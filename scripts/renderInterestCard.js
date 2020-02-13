import htmlFactory from "./interestCardHtml.js"

const container = document.getElementById("interestCardContainer")
const placeContainer = document.getElementById("interestPlaceContainer")
const reviewContainer = document.getElementById("editCardContainer")

const renderDom = {
    renderInterests(interests){
        container.innerHTML = ""
        interests.forEach(interest => {
            container.innerHTML += htmlFactory.interestCardFactory(interest)
        })
    }, 
    renderPlaces(place) {
            placeContainer.innerHTML += htmlFactory.selectPlaceFactory(place)
    }, 
    renderCostAndReview() {
    
        reviewContainer.innerHTML = htmlFactory.costAndReviewEditFactory()
    }
}
export default renderDom