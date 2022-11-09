import axios from 'axios';

export const getAllVenues = async (setVenues) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/venues/findAll');
        const venues = response.data;
        setVenues(venues);
        console.log(venues)

        return venues;
    } catch (e) {
        console.log(e);
    }
};

export const getVenueByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/venues/findVenueById/${ID}`);
        const venue = response.data;
        console.log(venue);

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const createVenue = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/venues/addVenue`, payload);
        const venue = response.data;
        console.log(venue);

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const updateVenue = async (ID, payload) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/venues/updateVenue/${ID}`, payload);
        const venue = response.data;
        console.log(venue);

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const deleteVenue = async (ID) => {
    try {
        const getResponse = await axios.delete(`http://127.0.0.1:8080/events/deleteVenue/${ID}`);
        await axios.delete(`http://127.0.0.1:8080/venues/deleteVenue/${ID}`);
        const deletedVenue = getResponse.data;

        return console.log(`${deletedVenue.name} was succesfully deleted.`);
    } catch (e) {
        console.log(e);
    }
};