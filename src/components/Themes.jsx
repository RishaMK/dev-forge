import React from 'react'

const Themes = () => {

  const cardClass = 'w-fit flex flex-col justify-center items-center rounded-lg';
  const cardTitle = 'w-full py-2 text-xl font-bold text-green-400 text-center rounded-b-lg px-2';

  return (
    <div id='themes' className='flex flex-col gap-20 mt-10 py-24'>
      <h2 className='text-3xl font-bold'>THEMES</h2>
      <div className='flex flex-wrap justify-around'>
        <div className={cardClass}>
          <img src='https://cdn.pixabay.com/animation/2022/10/13/01/37/01-37-51-884_512.gif' alt='Finance' className='w-44' />
          <p className={cardTitle}> Finance</p>
        </div>
        <div className={cardClass}>
          <img src='https://media0.giphy.com/media/7Hj4pcZHZudRkMpOkh/giphy.gif' alt='Transport' className='w-44' />
          <p className={cardTitle}>Transportation</p>
        </div>
        <div className={cardClass}>
          <img src='https://media.tenor.com/95DC83MFflsAAAAi/healthcare-healthcare-for-all.gif' alt='Healthcare' className='w-44' />
          <p className={cardTitle}>Healthcare</p>
        </div>
        <div className={cardClass}>
          <img src='https://www.flowreporter.com/images/fr_landing_water.gif' alt='Water Management' className='w-44' />
          <p className={cardTitle}>Water Management</p>
        </div>
        <div className={cardClass}>
          <img src='https://media.tenor.com/7fw1qgKb4MkAAAAj/netherite-pickaxe-minecraft.gif' alt='Mining' className='w-44' />
          <p className={cardTitle}>Mining</p>
        </div>
      </div>
    </div>
  )
}

export default Themes