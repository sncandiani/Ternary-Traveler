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
    }, 
    deleteButton(buttonId){
        return fetch(`${baseUrl}/interests/${buttonId}/`, {
            method: "DELETE"
        });
}, 
 updateFormFields(interestId) {
    const hiddenInterestId = document.querySelector("#hiddenInterestId")
    const costInput = document.querySelector("#interestEditCost")
    const reviewInput = document.querySelector("#interestEditReview")
    fetch(`http://localhost:8088/interests/${interestId}`)
        .then(response => response.json())
        .then(interests => {    
            hiddenInterestId.value = interests.id
            costInput.value = interests.cost
            reviewInput.value = interests.review
        })
}, 
updateFormFieldsFetch(interests) {
    return fetch(`${baserlL}/${interests.hiddenInterestId}/`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interests)
    })
}
}

export default api
