import axios from 'axios';

export const getAllPosts = async (setPosts) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/posts/findPosts');
        const posts = response.data;
        setPosts(posts);

        return posts;
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