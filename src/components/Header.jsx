import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='flex w-full justify-around gap-3 py-8 mb-10 bg-zinc-950/50'>
                {/* <img src="" alt='DevForge' className='w-16 mx-8' /> */}
                <span className='text-5xl font-jaro'>DF</span>
                <ul className='flex justify-center items-center gap-24 font-jaro'>
                    <li><a href='#about' className='text-2xl font-bold'>ABOUT</a></li>
                    <li><a href='#themes' className='text-2xl font-bold'>THEMES</a></li>
                    <li><a href='#sponsors' className='text-2xl font-bold'>SPONSORS</a></li>
                    <li><a href='#faq' className='text-2xl font-bold'>FAQ</a></li>
                    <li><a href='#venue' className='text-2xl font-bold'>VENUE</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header