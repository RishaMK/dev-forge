import React, { Fragment } from 'react'

const timeline = [
    {
        heading: 'Beginning',
        time: '9:30',
        description: 'sto commodo vitae. Morbi fermentum nec quam sit amet mollis. Etiam rhoncus semper sem, quis molestie mauris elementum a. Suspendisse egestas finibus nisl, non vulputate elit hendrerit sodales. Sed sed elit massa. Fusce molestie, erat et lobortis pharetra, est ante hendrerit lorem, at iaculis mi velit ac odio. Phasellus nec condimentum est. Duis sem orci, congue ac suscipit ac, imperded laoreet diam'
    },
    {
        heading: 'Timestamp 2',
        time: '12:00',
        description: 'mmodo vitae. Morbi fermentum nec quam sit amet mollis. Etiam rhoncus semper sem, quis molestie mauris elementum a. Suspendisse egestas finibus nisl, non vulputate elit hendrerit sodales. Sed sed elit massa. Fusce molestie, erat et lobortis pharetra, est ante hendrerit lorem, at iaculis mi velit ac odio. Phasellus nec condimentum est. Duis sem orci, congue '
    },
    {
        heading: 'Hello 3',
        time: '15:00',
        description: 'sto commodo vitae. Morbi fermentum nec quam sit amet mollis. Etiam rhoncus semper sem, quis molestie mauris elementum a. Suspendisse egestas finibus nisl, non vulputate elit hendrerit sodales. Sed sed elit massa. Fusce molestie, erat et lobortis pharetra, est ante hendrerit lorem, at iaculis mi velit ac odio. Phasellus nec condimentum est. Duis sem orci, congue ac suscipit ac, imperded laoreet diam'
    },
    {
        heading: 'Hello 4',
        time: '20:00',
        description: 'sto commodo vitae. Morbi fermentum nec quam sit amet mollis. Etiam rhoncus semper sem, quis molestie mauris elementum a. Suspendisse egesta\rit lorem, at iaculis mi velit ac odio. Phasellus nec condimentum est. Duis sem orci, congue ac suscipit ac, imperded laoreet diam'
    },
]

const Circle = () => {
    return (
        <div className='rounded-full border-8 h-0 w-0 -m-2 p-0 border-green-500 z-10'>
        </div>
    )
}

const Pillar = () => {
    return (
        <div className='border-4 w-0 min-h-36 h-full border-slate-200/60'>
        </div>
    )
}

const EventCard = ({ event }) => {
    return (
        <div className='flex flex-col gap-y-2 p-4 bg-slate-500/30 mb-10 h-fit font-jaro min-w-56 max-w-full rounded-xl'>
            <p className='text-2xl font-bold'>{event.heading}</p>
            <p className='italic'>{event.time}</p>
            <p className='text-xl'>{event.description}</p>
        </div>
    )
}

const Timeline = () => {

    return (
        <div id='timeline' className='flex flex-col gap-20 mt-10'>
            <h2 className='text-3xl font-bold'>Timeline</h2>
            <div className='flex flex-col justify-center my-4'>
                {
                    timeline.map((event, index) => (
                        <Fragment key={index}>
                            <div className='grid grid-cols-[1fr_auto_1fr] justify-stretch gap-x-4 mx-auto'>
                                {
                                    index % 2 === 0 ?
                                        <>
                                            <EventCard event={event} />
                                            <div className='flex flex-col items-center'>
                                                <Circle />
                                                {
                                                    index !== timeline.length - 1 &&
                                                    <Pillar />
                                                }
                                            </div>
                                            <div></div>
                                        </> :
                                        <>
                                            <div></div>
                                            <div className='flex flex-col items-center'>
                                                <Circle />
                                                {
                                                    index !== timeline.length - 1 &&
                                                    <Pillar />
                                                }
                                            </div>
                                            <EventCard event={event} />
                                        </>
                                }
                            </div>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Timeline