const baseUrl = "http://localhost:8088"
//api is an object which holds methods that perform my fetch calls
//interests?_expand=place`
const api = {
    getAllTravels() {
        return fetch(`${baseUrl}/interests?_expand=place`).then(resp => resp.json())
    }, 
    postTravel(newInterest) {
        return fetch(`${baseUrl}/interests`, { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterest)
    }).then(resp => resp.json())
    }, 
    getPlaces() {
        return fetch(`${baseUrl}/places`).then(resp => resp.json())
    }
}

export default api
