import { faCalendarAlt, faClock, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect, useContext} from 'react';
import { getRsvpOptions } from '../../API/AllEnums';
import { addVote, getEventByID } from '../../API/EventAPI';
import { getEventTypes } from '../../API/EventEnumAPI';
import { sendRsvp } from '../../API/PollAPI';
import {UserContext} from '../../Contexts/User.context';

const defaultChoicesObject = {
    choice1: '',
    choice2: '',
    choice3: ''
}


const PollPost = ({id, rsvp}) => {

const [eventEnums, setEventEnums] = useState(null);
const [rsvpEnums, setRsvpEnums] = useState(null);
const [currentEvent, setCurrentEvent] = useState(null);
const [choicesObject, setChoicesObject] = useState(defaultChoicesObject);
const [usersRsvpStatus, setUsersRsvpStatus] = useState('');
const { user, login } = useContext(UserContext)


  useEffect(() => {
    response();
  }, [])

  const response = async () => {
    let res1 = await getEventTypes(setEventEnums);
    setEventEnums(res1);

    let res2 = await getRsvpOptions(setRsvpEnums);
    setRsvpEnums(res2.data);

    let res3 = await getEventByID(id);
    setCurrentEvent(res3);

    login(user);
  }

  const handleRsvpStatusChange = (event) => {
    event.preventDefault()
    setUsersRsvpStatus(event.target.value)
  }

  const sendRsvpUpdate = async (e) => {
    e.preventDefault()

    console.log(id, user.uniqueId, usersRsvpStatus, 'THIS')
    await sendRsvp(id, user.uniqueId, usersRsvpStatus);
  }

  const handleVote = async (e) => {
    e.preventDefault()
    let string = '?';

    if (choicesObject === defaultChoicesObject) {
        return alert("Please pick a choice before voting.")
    }

    const choices = Object.keys(choicesObject)
    
    for (let i = 0; i < choices.length; i++) {
        if (i !== 0) {
            string += '&'
        }

        string += choicesObject[choices[i]]
    }

    console.log(string)
    const response = await addVote(id, user.uniqueId, string)
    login(user)

    let res3 = await getEventByID(id);
    setCurrentEvent(res3);

    if (response.status === 200) {
        return alert("Thanks for voting!")
    }

    return alert("Something went wrong... please try again!")
  }

  const handleAddRemoveBallot = (e) => {
    const choice = e.target.name;
    const ballot = e.target.value;
    console.log(ballot)

    setChoicesObject({...choicesObject, [choice]: ballot})
    console.log(choicesObject)
  }

  const content = () => {
    if (!id | !currentEvent) {
        return '...'
    }

    const {pollStatus, votes, name, startDateTime} = currentEvent;

    const getWinningEvent = () => {
        let votesArray = Object.entries(votes);
        let highestValue = votesArray[0][1];
    
    
        for (let i = 0; i < votesArray.length; i++) {
            if (highestValue < votesArray[i][1]) {
                highestValue = votesArray[i][1];
            }
        }
    
        return Object.keys(votes).find(key => votes[key] === highestValue)
      }

    return (
    <section className="p-5 rounded-md bg-white customShadow1 mb-3">
        <div className='flex flex-col gap-4'>
            <div className="flex flex-row items-center gap-4">
                <span className="rounded-full text-6xl"><FontAwesomeIcon icon={faPoll} /></span>
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold" onClick={handleAddRemoveBallot}>{name}</h3>
                    <div className="text-sm flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} /> 
                        <span>{startDateTime.slice(0, 10)}</span>
                        <span><FontAwesomeIcon icon={faClock} /></span>
                        <span>{startDateTime.slice(11, 16)}</span>
                    </div>
                </div>
            </div>

            {
                pollStatus === 'OPEN' ? 
                
                <form className="grid grid-cols-2 gap-2">
                <select className="select select-bordered w-full" name='choice1' onChange={handleAddRemoveBallot}>
                    <option disabled selected>First Choice</option>
                    {
                        !eventEnums ? <option>loading...</option>
                        :
                        eventEnums.map((type, i) => {
                            return (
                                <option key={i}>{type.niceName}</option>
                            )
                        })
                    }
                </select>

                <select className="select select-bordered w-full" name='choice2' onChange={handleAddRemoveBallot}>
                    <option disabled selected>Second Choice</option>
                    {
                        !eventEnums ? <option>loading...</option>
                        :
                        eventEnums.map((type, i) => {
                            return (
                                <option key={i}>{type.niceName}</option>
                            )
                        })
                    }
                </select>

                <select className="select select-bordered w-full" name='choice3' onChange={handleAddRemoveBallot}>
                    <option disabled selected>Third Choice</option>
                    {
                        !eventEnums ? <option>loading...</option>
                        :
                        eventEnums.map((type, i) => {
                            return (
                                <option key={i}>{type.niceName}</option>
                            )
                        })
                    }
                </select>
                
                <button className='btn m-0 btn-md' onClick={handleVote}>Confirm vote</button>
                </form>
                : 
                <div className='flex flex-col items-center text-center gap-4'>
                    <span>The winning event was... <span className='text-secondary font-bold'>{getWinningEvent()}</span>!</span>
                    {
                        !rsvp ? <span>Please RSVP below :)</span>
                        :
                        <div className='flex flex-col items-center gap-4'>
                            <span className='font-bold'>Your current RSVP status is: {rsvp}</span>
                            <span className='text-sm px-10'>If you'd like to change your status, please confirm your new availability below:</span>
                        </div>
                    }
                    

                    <form action="" className='flex flex-row self-stretch justify-center gap-4 text-black'>
                        <select className="select select-bordered w-1/3" name='rsvpStatus' onChange={handleRsvpStatusChange}>
                        <option disabled selected>RSVP</option>
                        {
                            !rsvpEnums ? <option>loading...</option>
                            :
                            Object.entries(rsvpEnums).map((rsvp, i) => {
                                return (
                                    <option key={i}>{rsvp.slice(1,10)}</option>
                                )
                            })
                        }
                        </select>
                        <button className='btn w-1/3' onClick={sendRsvpUpdate}>Confirm</button>
                    </form>
                </div>
            }

            {
                pollStatus === 'CLOSED' ? ''
                :
                <div className='flex flex-row justify-between border-t-2 pt-2 border-neutral'>
                    <span>Votes: {Object.keys(votes).length ? Object.keys(votes).length : '0'}</span>
                    <span>Currently winning: {getWinningEvent()}</span>
                </div>
            }

        </div>
    </section>
    )
  }

  return (
    <>
        {content()}
    </>
  )
}

export default PollPost;