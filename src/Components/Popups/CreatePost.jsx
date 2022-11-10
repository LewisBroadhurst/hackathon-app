import React from 'react'
import { faPlus, faPen, faImage, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePost = () => {
  return (
    <section>
        <label tabIndex={0} className="">
            <div className="fixed right-4 bottom-4">
                <button className="btn btn-circle btn-md text-2xl bg-primary">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </label>
        <ul tabIndex={0} className="dropdown-content mb-16 flex flex-col gap-4">
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </div>
            </li>
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faImage} />
                    </button>
                </div>
            </li>
            <li>
                <div className="">
                    <button className="btn btn-circle text-2xl bg-primary">
                        <FontAwesomeIcon icon={faSquarePollVertical} />
                    </button>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default CreatePost