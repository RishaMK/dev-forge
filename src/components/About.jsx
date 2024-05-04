import React from 'react'

const About = () => {

    return (
        <>
            <div id='about' className='flex justify-between items-center gap-20 mt-20 py-24'>
                <div className='w-3/5 p-4 bg-slate-500/30 rounded-xl'>
                    <h2 className='text-3xl font-bold'>About DevForge</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum vestibulum nibh sed pharetra. Nam a purus tincidunt, tempor augue nec, interdum metus. Praesent luctus augue et augue viverra, in aliquam enim varius. Proin tristique felis at consectetur mattis. Nunc id quam est. In hac habitasse platea dictumst. Nam in dictum est, vel finibus diam. Suspendisse pretium consectetur mi, et posuere elit. Nulla ipsum est, aliquam vel eros in, aliquam auctor nisl. Curabitur magna nulla, dapibus sit amet enim eu, pulvinar venenatis nunc. Nam et egestas orci. Nulla consequat at velit eleifend vulputate.<br />
                        Etiam a nisi erat. Sed sollicitudin eros in massa faucibus dapibus. Donec sit amet lectus ut ligula pulvinar volutpat ut nec sapien. Integer fermentum feugiat vestibulum. Integer nec vulputate nulla. Curabitur vel turpis porta, hendrerit nunc et, porttitor turpis. Aliquam sodales eget mi id pellentesque. Mauris fermentum nunc sed lacinia porttitor. Phasellus viverra eu ante eu sagittis. Suspendisse sed dapibus mi. Nam vitae molestie nunc, non interdum mauris. Etiam imperdiet mauris et auctor accumsan. Quisque ac vulputate lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tristique vel purus eu accumsan. Maecenas non dolor nec magna vehicula rhoncus nec eu odio.
                    </p>
                </div>
                <div className='flex justify-center items-center h-fit rounded-full p-8 bg-slate-500/30'>
                    <img src='https://24.media.tumblr.com/tumblr_m46uw7Z5x61qzw1qyo1_500.gif' alt='DP' className='rounded-full w-56' />
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-slate-500/30 p-4 rounded-xl w-3/4 py-10'>
                <p className='text-lG font-jaro text-center'>BROUGHT TO YOU BY:</p>
                <p className='text-center text-3xl font-bold font-jaro'>DAYANANDA SAGAR COLLEGE OF ENGINEERING</p>
                <p className='text-center text-xl font-jaro'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</p>
                {/* <div className='flex justify-around mt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://storage.googleapis.com/ezap-prod/colleges/5011/dayanand-sagar-college-of-engineering-logo.png' className='w-44 rounded-full' />
                        <p className='p-4 text-xl'>DEPT OF CSE, DSCE</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://bytesyncstudio.com/assets/images/icons/Logo.png' className='w-44 rounded-full' />
                        <p className='p-4 text-xl'>ByteXync DSCE</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_pxBjtTjPa9C3CGc7-MYe6rhQVcCOuwqwG1KKrCR9A&s' className='w-44 rounded-full' />
                        <p className='p-4 text-xl'>OSCode DSCE</p>
                    </div>
                </div> */}
            </div>
            </div>
        </>
    )
}

export default About