export const getAPI = () => {
    if(window.location.hostname === "localhost") {
        return "http://localhost:3001/api"
    } else {
        return "https://isaiah-collazo-backend.herokuapp.com/api"
    }
}