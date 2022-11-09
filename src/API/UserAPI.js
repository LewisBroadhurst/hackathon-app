import axios from 'axios';

export const getAllUsers = async (setUsers) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/users/findAll');
        const users = response.data;
        setUsers(users);

        return console.log(users);
    } catch (e) {
        console.log(e);
    }
};

export const getUserByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/users/findById/${ID}`);
        const user = response.data;
        console.log(user);

        return user;
    } catch (e) {
        console.log(e);
    }
};

export const createUser = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/api/v1/registration`, payload);
        const user = response.data;
        console.log(user);

        return user;
    } catch (e) {
        console.log(e);
    }
};

export const loginUser = async (payload) => {
    try {
        const {email, password} = payload;
        console.log(email, password);
        const response = await axios.post(`http://127.0.0.1:8080/users/login/login`, null, {params: {email: email, password: password}});
        const user = response.data;
        console.log(user, email, password);

        return user;
    } catch (e) {
        console.log(e);
    }
};

export const updateUser = async (ID, payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/users/updateUser/${ID}`, payload);
        const user = response.data;
        console.log(user);

        return user;
    } catch (e) {
        console.log(e);
    }
};

export const deleteUser = async (ID) => {
    try {
        const getResponse = await axios.delete(`http://127.0.0.1:8080/users/deleteUser/${ID}`);
        await axios.delete(`http://127.0.0.1:8080/venues/deleteVenue/${ID}`);
        const deletedUser = getResponse.data;

        return console.log(`${deletedUser.name} was succesfully deleted.`);
    } catch (e) {
        console.log(e);
    }
};