import axios from 'axios';

export const updateEventByID = async (setEventEnums) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/eventEnums/getAll`);
        const eventEnums = response.data;
        console.log(eventEnums);

        return setEventEnums(eventEnums);
    } catch (e) {
        console.log(e);
    }
};

export const getEventTypes = async (setEventEnums) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/enums/getAllEventTypes`);
        const eventEnums = response.data;
        setEventEnums(eventEnums);

        return eventEnums
    } catch (e) {
        console.log(e);
    }
};
