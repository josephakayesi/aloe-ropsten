import React from 'react'

const Sold = ({ account }) => {
    return (
        <>
            <span className="owner mt-2">
                owner:
                <a href={`https://etherscan.io/address/${account}`} target="_blank" rel="noreferrer" className="text-link owner-account">
                    {'  '}
                    {`${account.substring(0, 5)}...${account.substring(38, 42)}`}
                </a>
            </span>
            <div className="p-3 sold text-center text-dark mt-3">
                <span className="text-lowercase badge rounded-pill bg-success">sold</span>
            </div>
        </>
    )
}

export default Sold
