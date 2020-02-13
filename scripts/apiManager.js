const baseUrl = "http://localhost:8088"

const api = {
    getAllTravels() {
        return fetch(`${baseUrl}`/interests).then(resp => resp.json())
    }
}

export default api