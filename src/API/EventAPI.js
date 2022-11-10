import axios from 'axios';

export const getAllEvents = async (setEvents) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/events/findAll');
        const events = response.data;
        setEvents(events)

        return events;
    } catch (e) {
        console.log(e);
    }
};

export const getEventByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/events/findById/${ID}`);
        const event = response.data;
        console.log(event);

        return event;
    } catch (e) {
        console.log(e);
    }
};

export const createEvent = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/events/addEvent`, payload);
        const event = response.data;
        console.log(event);

        return event;
    } catch (e) {
        console.log(e);
    }
};

export const updateEventByID = async (ID, payload) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/events/findById/${ID}`, payload);
        const event = response.data;
        console.log(event);

        return event;
    } catch (e) {
        console.log(e);
    }
};

export const deleteEventByID = async (ID) => {
    try {
        const getResponse = await axios.get(`http://127.0.0.1:8080/events/findById/${ID}`);
        await axios.delete(`http://127.0.0.1:8080/events/deleteEvent/${ID}`);
        const deletedEvent = getResponse.data;

        return console.log(`${deletedEvent.name} was succesfully deleted.`);
    } catch (e) {
        console.log(e);
    }
};

export const addVote = async (eventId, userId, ballot) => {
    const res = await axios.patch(`http://127.0.0.1:8080/events/addVotes/1/5?ballot=DRINKS`);
    console.log(res)

    return res;
}

export const addUserToEvent = async (eventId, userId) => {
    const res = await axios.put(`http://127.0.0.1:8080/events/addUser/${eventId}/${userId}`).catch(err => console.log(err));
    console.log(res)

    return res;
}