import axios from "axios";

export const getAllOrganisations = async (setOrganisations) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/organisations/findAll');
        const organisations = response.data;
        setOrganisations(organisations);
    } catch (e) {
        console.log(e);
    }
}

export const getOrganisationByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisations/findById/${ID}`);
        const organisation = response.data;
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
        console.log(`${deletedOrganisation} was succesfully deleted.`);
    } catch (e) {
        console.log(e);
    }
}