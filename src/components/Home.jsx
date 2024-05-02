import React from 'react'

const Home = () => {
    return (
        <div className='overflow-hidden flex gap-5 px-56 py-24 justify-between my-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl text-wrap font-bold'>DevForge</h1>
                <span className='mb-16'>Code, Create, Conquer!</span>
                <span className='text-xl font-bold'>7th-8th June 2024</span>
                <span className='text-xl font-bold'>30 Hour Hackathon</span>
                <button className='w-56 p-2 bg-slate-700/50 rounded-lg flex justify-center items-center transition duration-700 hover:scale-110'>
                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzMN4ER2Z_hkiF9L26ObXDcLoos0e-H6rDNXgCcGc0Q&s' alt='Devfolio' className='w-5 inline-block' /> */}
                    Register With &nbsp;
                    <img src='https://hacknovate-ef339.web.app/images/sponsor/Devfolio.png' alt='Devfolio' className='w-24 inline-block' />
                </button>
                <button className='w-56 p-2 flex items-center justify-center bg-slate-50/10 rounded-lg transition duration-700 hover:scale-110'>
                    Brochure&nbsp;
                    <img src='https://static-00.iconduck.com/assets.00/link-out-icon-256x256-1npwezdb.png' alt='Open' className='w-6' />
                </button>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <div className='bg-gray-500/20 p-16 rounded-full flex items-center justify-center'>
                    <img src='https://bx.tech/wp-content/uploads/2022/04/web-logo-BX-Light.png' alt='BX' className='size-24' />
                </div>
                <div className='flex gap-10'>
                    <a href='https://instagram.com/bytexync/' target='_bytexync' className='w-16 p-4 rounded-full bg-slate-500/30 cursor-pointer  transition duration-700 hover:scale-110'>
                        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' alt='BXInstagram' />
                    </a>
                    <a href='mailto:bytexync@gmail.com' className='w-16 p-4 rounded-full bg-slate-500/30 cursor-pointer transition duration-700 hover:scale-110'>
                        <img src='https://logodix.com/logo/610924.png' alt='Mail' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home