import axios from 'axios';

export const getAllOrganisations = async (setOrganisations, authToken) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:8080/organisations/findAll',
            headers: {authorization: 'Bearer fcb000d1-0c04-4d31-bd94-0ce23ccdf48a'}
        })
        const organisations = response.data;

        return setOrganisations(organisations);
    } catch (e) {
        console.log(e);
    }
}

// export const getAllOrganisations = async (setOrganisations, authToken) => {

//     const response = await axios.get('http://127.0.0.1:8080/organisations/findAll')

//     const organisations = response.data;

//     return setOrganisations(organisations);

// }

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