import React, { useEffect } from 'react'
import { preLoaderAnim } from './animation'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])


    return (
        <div className='preloader h-screen w-full fixed bottom-0 left-0 z-55 overflow-hidden text-white bg-black flex justify-center items-center gap-x-4 font-jaro text-4xl'>
            <div className='texts-container flex justify-between items-center overflow-hidden h-60 w-96'>
                <span>CODE,</span>
                <span>CREATE,</span>
                <span>CONQUER!</span>
            </div>
        </div>
    )
}

export default PreLoader