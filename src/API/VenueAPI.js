import axios from 'axios';

export const getAllVenues = async (setVenues) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/venues/findAll');
        const venues = response.data;
        setVenues(venues);

        return venues;
    } catch (e) {
        console.log(e);
    }
};

export const getVenueByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/venues/findById/${ID}`);
        const venue = response.data;

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const createVenue = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/venues/addVenue`, payload);
        const venue = response.data;

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const updateVenue = async (ID, payload) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/venues/updateVenue/${ID}`, payload);
        const venue = response.data;

        return venue;
    } catch (e) {
        console.log(e);
    }
};

export const deleteVenue = async (ID) => {
    try {
        await axios.delete(`http://127.0.0.1:8080/venues/deleteVenue/${ID}`);
    } catch (e) {
        console.log(e);
    }
};