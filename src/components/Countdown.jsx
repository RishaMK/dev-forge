import React, { useEffect, useRef, useState } from 'react'

const Countdown = () => {

    let interval = useRef()

    const [countdown, setCountdown] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [target, setTarget] = useState(new Date('June 7, 2024 09:30:00').getTime())

    useEffect(() => {
        startTimer()
    })

    const startTimer = () => {
        interval = setInterval(() => {
            const current = new Date().getTime()
            const distance = target - current
            // console.log(distance)
            const monthsleft = Math.floor(distance / (1000 * 60 * 60 * 24 * 30)) % 12
            const daysleft = Math.floor(distance / (1000 * 60 * 60 * 24)) % 30
            const hoursleft = Math.floor(distance / (1000 * 60 * 60)) % 24
            const minutesleft = Math.floor(distance / (1000 * 60)) % 60
            const secondsleft = Math.floor(distance / (1000)) % 60
            // console.log(monthsleft, daysleft, hoursleft, minutesleft)
            if (distance <= 0) {
                // Stop the timer
                clearInterval(interval)
            } else {
                // Set the countdown state
                setCountdown({ months: monthsleft, days: daysleft, hours: hoursleft, minutes: minutesleft, seconds: secondsleft })
            }
        }, 1000)
    }

    return (
        <div className='flex flex-col justify-center items-center mb-20'>
            <div className='flex font-jaro text-3xl'>
                {countdown.months > 0 ?
                    <div className='bg-slate-500/30 p-2 m-2 rounded-xl flex-col justify-center items-center'>
                        <p className='text-center'>{countdown.months}</p><p>MONTH
                            {
                                countdown.months !== 1 ?
                                    <span>S</span> :
                                    null
                            }
                        </p>
                    </div> : null
                }
                <div className='bg-slate-500/30 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>{countdown.days}</p>
                    <p>DAY
                        {
                            countdown.days !== 1 ?
                                <span>S</span> :
                                null
                        }
                    </p></div>
                <div className='bg-slate-500/30 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>{countdown.hours}</p>
                    <p>
                        HOUR
                        {
                            countdown.hours !== 1 ?
                                <span>S</span> :
                                null
                        }
                    </p>
                </div>
                <div className='bg-slate-500/30 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>{countdown.minutes}</p>
                    <p>
                        MINUTE
                        {
                            countdown.minutes !== 1 ?
                                <span>S</span> :
                                null
                        }
                    </p>
                </div>
                <div className='bg-slate-500/30 p-2 m-2 rounded-xl flex-col justify-center items-center'><p className='text-center'>{countdown.seconds}</p>
                    <p>
                        SECOND
                        {
                            countdown.seconds !== 1 ?
                                <span>S</span> :
                                null
                        }
                    </p>
                </div>
            </div>
            <p className='text-2xl font-bold'>REMAINING!</p>
        </div>
    )
}

export default Countdown