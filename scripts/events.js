import api from "./apiManager.js"
import renderInterests from "./renderInterestCard.js"
const saveButton = document.getElementById("saveInterest")

const nameInput = document.querySelector("#interestName")
const descriptionInput = document.querySelector("#interestDescription")
const costInput = document.querySelector("#interestCost")
const placeInput = document.querySelector("#interestPlace")

const events = {
    addSaveEventListener() {
        saveButton.addEventListener("click", () => {
            const newInterest = {
                "name": nameInput.value, 
                "description": descriptionInput.value, 
                "cost": costInput.value, 
                "place": placeInput.value
            }
            api.postTravel(newInterest).then(api.getAllTravels).then(renderInterests)
        })
    }
}

export default events