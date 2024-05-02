import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between px-56 gap-3 py-8'>
                {/* <img src="" alt='DevForge' className='w-16 mx-8' /> */}
                <span className='text-5xl font-serif'>BX</span>
                <ul className='flex justify-center items-center gap-24 font-jaro'>
                    <li><a href='#about' className='text-2xl font-bold'>About</a></li>
                    <li><a href='#themes' className='text-2xl font-bold'>Themes</a></li>
                    <li><a href='#sponsors' className='text-2xl font-bold'>Sponsors</a></li>
                    <li><a href='#faq' className='text-2xl font-bold'>FAQ</a></li>
                    <li><a href='#venue' className='text-2xl font-bold'>Venue</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header