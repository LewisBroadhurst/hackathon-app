import axios from "axios";

export const getAllEvents = async (setEvents) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/events/findAll');
        const events = response.data;
        setEvents(events);
    } catch (e) {
        console.log(e);
    }
}