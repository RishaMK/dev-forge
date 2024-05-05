import React from 'react'

const Venue = () => {
  return (
    <div id='venue' className='flex flex-col gap-20 py-24'>
      <h2 className='text-3xl font-bold'>VENUE</h2>
      <iframe title='venue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9776449725514!2d77.56398017512177!3d12.909158287400535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1714745558488!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className='rounded-xl w-full h-[450px]'></iframe>
    </div>
  )
}

export default Venue