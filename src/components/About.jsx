import React, { useEffect, useState } from 'react'

const About = () => {

    const [current, setCurrent] = useState()
    const [target, setTagret] = useState({month:5, date:7, hour:9, minute:0})

    useEffect(() => {
        console.log(new Date())
        const date = new Date().getDate();
        const month = new Date().getMonth();
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        setCurrent({date, month, hour, minute})
    }, [])

    useEffect(() => {
      console.log(current,target)
    }, [current])
    
    


    return (
        <div className='my-20 px-56 py-24'>
            <div id='about' className='flex justify-between gap-20 mb-10'>
                <div className='w-3/5 p-4 bg-slate-500/10 rounded-xl'>
                    <h2 className='text-3xl font-bold'>About DevForge</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum vestibulum nibh sed pharetra. Nam a purus tincidunt, tempor augue nec, interdum metus. Praesent luctus augue et augue viverra, in aliquam enim varius. Proin tristique felis at consectetur mattis. Nunc id quam est. In hac habitasse platea dictumst. Nam in dictum est, vel finibus diam. Suspendisse pretium consectetur mi, et posuere elit. Nulla ipsum est, aliquam vel eros in, aliquam auctor nisl. Curabitur magna nulla, dapibus sit amet enim eu, pulvinar venenatis nunc. Nam et egestas orci. Nulla consequat at velit eleifend vulputate.<br />
                        Etiam a nisi erat. Sed sollicitudin eros in massa faucibus dapibus. Donec sit amet lectus ut ligula pulvinar volutpat ut nec sapien. Integer fermentum feugiat vestibulum. Integer nec vulputate nulla. Curabitur vel turpis porta, hendrerit nunc et, porttitor turpis. Aliquam sodales eget mi id pellentesque. Mauris fermentum nunc sed lacinia porttitor. Phasellus viverra eu ante eu sagittis. Suspendisse sed dapibus mi. Nam vitae molestie nunc, non interdum mauris. Etiam imperdiet mauris et auctor accumsan. Quisque ac vulputate lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tristique vel purus eu accumsan. Maecenas non dolor nec magna vehicula rhoncus nec eu odio.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src='https://24.media.tumblr.com/tumblr_m46uw7Z5x61qzw1qyo1_500.gif' alt='DP' className='rounded-full w-56' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p>Countdown:</p>
                <div className='flex'>
                    <div className='bg-slate-500/20 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>0</p><p>DAYS</p></div>
                    <div className='bg-slate-500/20 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>0</p><p>HOURS</p></div>
                    <div className='bg-slate-500/20 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>0</p><p>MINUTES</p></div>
                </div>
            </div>
        </div>
    )
}

export default About