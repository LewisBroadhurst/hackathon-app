import { faCalendarAlt, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect, useContext} from 'react';
import { addVote } from '../../API/EventAPI';
import { getEventTypes } from '../../API/EventEnumAPI';
import {UserContext} from '../../Contexts/User.context';

const PollPost = ({location, startdate, votes, name, id}) => {

const [eventEnums, setEventEnums] = useState(null);
const [choicesArray, setChoicesArray] = useState([]);
const { user } = useContext(UserContext)

  useEffect(() => {
    response();
  }, [])

  const response = async () => {
    let res = await getEventTypes(setEventEnums);
    setEventEnums(res);
  }
 


  const handleVote = async (e) => {
    e.preventDefault()

    if (!choicesArray) {
        return alert("Please pick a choice before voting.")
    }

    for (let i = 0; i < choicesArray.length; i++) {
        let response = await addVote(id, user.uniqueId, choicesArray[i])
        console.log(response)
    }
    console.log(votes)

    response()
  }

  const handleAddRemoveBallot = (e) => {
    const ballot = e.target.name;
    const checked = e.target.checked;
    const array = choicesArray;

    if (checked) {
        array.push(ballot);
        return setChoicesArray(array);
    }

    const removedValFromArray = array.filter(choice => choice !== ballot)
    setChoicesArray(removedValFromArray);
  }

  const content = () => {
    if (!startdate) {
        return '...'
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
                        <span>{startdate.slice(0, 10)} -- {startdate.slice(11, 16)}</span>
                    </div>
                </div>
            </div>

            <form className="grid grid-cols-2 gap-2">
                {
                    !eventEnums ? 'loading...' : eventEnums.map((eventenum, i) => {
                        return (
                        <div key={i} className="flex flex-row justify-between items-center p-2 rounded-md border-base-300 border-2 hover:bg-base-200 hover:cursor-pointer">
                            <h3>{eventenum.niceName}</h3>

                            <input type="checkbox" className='hover:cursor-pointer' name={eventenum.niceName.toUpperCase()} onClick={handleAddRemoveBallot}/>
                        </div>
                        )
                    })
                }
                
                <button className='btn m-0 btn-md' onClick={handleVote}>Confirm vote</button>
            </form>

            <div className='flex flex-row justify-between border-t-2 pt-2 border-neutral'>
                <span>Votes: {Object.keys(votes).length ? Object.keys(votes).length : '0'}</span>
                <span>Currently winning: {}</span>
            </div>
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