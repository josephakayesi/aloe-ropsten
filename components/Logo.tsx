import React from 'react'
import Image from 'next/image';
import logo from '../assets/images/logo.svg'

export const Logo = () => {
    return (
        <div className="logo-wrapper d-flex">
        <Image src={logo} alt='aloe-logo' className='logo' layout='intrinsic' width={65}/>
      </div>
    )
}
