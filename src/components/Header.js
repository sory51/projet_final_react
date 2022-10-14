import React from 'react'
import logo from '../assets/tof/logo.png'
import '../style/Header.css'

function Header() {
    const title='lii xew';
   
	return (
		<div className='lmj-banner'>
			<img src={logo} alt='lii-xew' className='lmj-logo' />
			<h1 className='lmj-title'>{title}</h1>
		</div>
	)
}

export default Header