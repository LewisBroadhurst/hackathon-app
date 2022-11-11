import axios from "axios";

export const sendRsvp = (eventId, userId, rsvp) => {
    const response = axios.patch(`http://127.0.0.1:8080/polls/rsvp/${eventId}/${userId}?rsvp=${rsvp}`)

    return response;
}

export const getAllPolls = (setPolls) => {
    const response = axios.get(`'http://127.0.0.1:8080/polls/findAll'`)
    setPolls(response);

    return response;
}