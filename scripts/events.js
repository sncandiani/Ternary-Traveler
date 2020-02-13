import api from "./apiManager.js"
import renderDom from "./renderInterestCard.js"
const saveButton = document.getElementById("saveInterest")
const interestCard = document.querySelector("#interestCardContainer")



const nameInput = document.querySelector("#interestName")
const descriptionInput = document.querySelector("#interestDescription")
const costInput = document.querySelector("#interestCost")



const events = {
    addSaveEventListener() {
        saveButton.addEventListener("click", () => {
            const placeInput = document.querySelector("#placeSelect")

            const newInterest = {
                "name": nameInput.value, 
                "description": descriptionInput.value, 
                "cost": parseInt(costInput.value), 
                "placeId": parseInt(placeInput.value), 
                "review": ""
            }
            api.postTravel(newInterest).then(api.getAllTravels).then(renderDom.renderInterests)
        })
    }, 
    addDeleteEventListener() {
        interestCard.addEventListener("click", (event) => {
            if(event.target.id.startsWith("deleteButton--")) {
             const buttonId = event.target.id.split("--")[1]
            api.deleteButton(buttonId)
            .then(api.getAllTravels)
            .then(renderDom.renderInterests)
            }
        })
    }, addEditEventListener() {
        interestCard.addEventListener("click", (event) => {
        if (event.target.id.startsWith("editButton--")) {
            const interestIdToEdit = event.target.id.split("--")[1]
            renderDom.renderCostAndReview(interestIdToEdit)
            api.updateFormFields(interestIdToEdit)
            const saveEditButton = document.getElementById("saveEditInterest")
            saveEditButton.addEventListener("click", () => {
               console.log("You have clicked the save button!")
            })
        }
    })}, 
    
}

export default events