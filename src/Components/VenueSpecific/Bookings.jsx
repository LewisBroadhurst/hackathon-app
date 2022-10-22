import React, {useState} from 'react';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Bookings = () => {

    const [date, setDate] = useState(new Date());

  return (
    <section>
        <Calender onChange={setDate} value={date} />
    </section>
  )
}

export default Bookings;