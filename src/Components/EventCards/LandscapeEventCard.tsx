import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ILandscapeEventCardProps {
    location: string,
    name: string,
    starting: string,
    event: any
}

const LandscapeEventCard = ({location, name, starting, event}: ILandscapeEventCardProps) => {

    const content = () => {
        if (!location) {
            return 'loading...'
        }

        return (
        <section className='customShadow1'>
        {
            !event ? <span className='m-2 absolute badge badge-secondary xl:hidden'>VOTE!</span> : <span className='m-2 absolute badge badge-secondary xl:hidden'>{event.niceName}</span>
        }
        <div className='flex flex-row gap-4 items-center bg-white rounded-md p-3'>
            <div className='xl:w-96'>
                {
                    !event ? <span className='m-2 absolute badge badge-secondary xl:hidden'>VOTE!</span> : <span className='m-1 absolute badge badge-secondary xl:flex'>{event.niceName}</span>
                }
                <img className='rounded-sm' src='https://placeimg.com/400/400/arch' alt="" />
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eos minima sapiente atque reiciendis. Officiis distinctio ullam enim veniam libero aperiam nobis consequuntur voluptas neque.</p>
                <div className='flex flex-row gap-2 items-center text-sm font-bold'>
                    <span><FontAwesomeIcon icon={faCalendar} /></span>
                    <span>{starting.slice(0, 10)}, {starting.slice(11,16)}</span>
                </div>
            </div>
        </div>
        </section>
        )
    }
  return (
    <>{content()}</>
  )
}

export default LandscapeEventCard