import axios from "axios";

export const getRsvpOptions = (setRsvpOptions) => {
    const response = axios.get('http://127.0.0.1:8080/enums/getAllRSVPOptions');
    setRsvpOptions(response);

    return response;
}