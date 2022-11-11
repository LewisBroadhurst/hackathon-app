import axios from 'axios';

const USER_NAME = 'etodd@gmail.com'
const PASSWORD = 'password'

export const getAllOrganisations = async (setOrganisations) => {
    try {
        var url = 'http://127.0.0.1:8080/organisations/findAll'
        const response = await axios.get(url,
        { headers: { authorization: 'Basic ' + window.btoa(USER_NAME + ":" + PASSWORD) } }
        );
        const organisations = response.data;

        return setOrganisations(organisations);
    } catch (e) {
        console.log(e);
    }
}

export const getOrganisationByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisations/findById/${ID}`);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}

export const deleteOrganisationByID = async (ID) => {
    try {
        const getResponse = await axios.get(`http://127.0.0.1:8080/organisations/findById/${ID}`);
        await axios.delete(`http://127.0.0.1:8080/organisations/deleteOrganisation/${ID}`);
        const deletedOrganisation = getResponse.data;

        return console.log(`${deletedOrganisation.name} was succesfully deleted.`);
    } catch (e) {
        console.log(e);
    }
}

export const updateOrganisationByID = async (ID, payload) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/organisations/updateOrganisation/${ID}`, payload);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}

export const createOrganisation = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/organisations/addOrganisation`, payload);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}