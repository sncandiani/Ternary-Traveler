const htmlFactory = {
    interestCardFactory(interest){
    return `
    <section id="interestCardSection">
        <p>Name:${interest.name}</p>
        <p>Description:${interest.description}</p>
        <p>Cost:${interest.cost}</p>
        <p>Place: ${interest.place.name}</p>
        <p>Review:
        <textarea name="interestReview" id="interestReview" cols="50" rows="5">${interest.review}</textarea>
        </p>
        <button id="deleteButton--${interest.id}">Delete</button>
        <button id="editButton--${interest.id}">Edit</button>
    </section>
    `
}, 
selectPlaceFactory(places) {
   let placeHtml = `
   <label for="placeSelect">Places</label>
<select name="placeSelect" id="placeSelect">
<option value="Please Select">Please Select</option>`
    places.forEach(place => {
       placeHtml +=  `<option value=${place.id}>${place.name}</option>`
   })
   placeHtml += `</select>`
   return placeHtml
}
}

export default htmlFactory
