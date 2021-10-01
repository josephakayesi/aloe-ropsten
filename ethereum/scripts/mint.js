const { create, globSource } = require('ipfs-http-client')
const wordToNum = require('word-to-numbers');
const ipfs = create('http://127.0.0.1:5001')
const Aloe = artifacts.require("Aloe")
const fs = require('fs');
// const web3 = require('../web3')

// !(migrate --reset) contract before running the script!

module.exports = async function(callback) {
  try {
    let data = [] 
    const aloe = await Aloe.deployed()
    const accounts = await web3.eth.getAccounts()

    console.log('\nuploading images on ipfs...')
    let files = fs.readdirSync(`${__dirname}/gallery`);
    let upload = await ipfs.add(globSource(`${__dirname}/gallery`, { recursive: true }))

    console.log('\npreparing metadata directory...')
    await fs.rmdirSync(`${__dirname}/metadata`, { recursive: true }, callback);
    await fs.mkdirSync(`${__dirname}/metadata`, { recursive: true }, callback);

    console.log('\ncreating metadata...')
    for(let i=0; i<files.length; i++){
      let metadata = JSON.stringify({
        "id": wordToNum(files[i].substring('5')),
        "name": `${/[^.]*/.exec(files[i])[0]}`,
        "description": "digital art by joseph akayesi",
        "ipfs_url": `https://ipfs.io/ipfs/${upload.cid.toString()}/${files[i]}`
      }, null, '\t');

      var img = fs.readFileSync(`${__dirname}/gallery/${files[i]}`, {encoding: 'base64'});
      data.push(metadata.slice(0, -2) + `,\n\t"image": "${img}"` + `\n\t\n}`)

      // data.push(metadata.slice(0, -2) + `,\n\t"id": ${i+1}\n}`) //add metadata&id to data
      await fs.writeFileSync(`${__dirname}/metadata/${/[^.]*/.exec(files[i])[0]}.json`, metadata)
    }

    console.log('\nuploading metadata on ipfs...')
    files = fs.readdirSync(`${__dirname}/metadata`);
    upload = await ipfs.add(globSource(`${__dirname}/metadata`, { recursive: true }))

    console.log('\nminting nfts...')
    for(let i=0; i<files.length; i++){
      await aloe.mint(`https://ipfs.io/ipfs/${upload.cid.toString()}/${files[i]}`, web3.utils.toWei('0.003', 'Ether'))
      data[i] = data[i].slice(0, -2) + `,\n\t"price": ${await aloe.price(i+1)},\n\t"metadata_url": "${await aloe.tokenURI(i+1)}"\n}` //add price&URI to data
      console.log(`\n${i+1} aloe is minted with uri:\n${await aloe.tokenURI(i+1)}`)
    }

    console.log('\naggregating aloe data...')
    if(fs.existsSync(`${__dirname}/data.js`)) {
      await fs.unlinkSync(`${__dirname}/data.js`)
    }
    await fs.writeFileSync(`${__dirname}/data.js`, `export const data = [${data}]`)

    console.log('\n\nsuccess.')
  } catch(error) {
    console.log(error)
  }
  callback()
}