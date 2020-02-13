import interestCardFactory from "./interestCardHtml.js"

const container = document.getElementById("interestCardContainer")
const renderInterests = (interests) => {
    container.innerHTML = ""
    interests.forEach(interest => {
        container.innerHTML += interestCardFactory(interest)
    })
} 
export default renderInterests