const htmlFactory = {
    interestCardFactory(interest){
    return `
    <section id="interestCardSection">
        <p>Name:${interest.name}</p>
        <p>Description:${interest.description}</p>
        <p>Cost:${interest.cost}</p>
        <p>Place: ${interest.place.name}</p>
        <p>Review:${interest.review}</p>
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
}, 
costAndReviewEditFactory(){
    return `
    <section>
    <form class = "interestEditForm" action="">
    <fieldset>
        <label for="interestEditCost">Edit Interest Cost:</label>
        <input type="text" name="interestEditCost" id="interestEditCost">
    </fieldset>
    <fieldset>
            <label for="interestEditReview">Edit Review:</label>
            <textarea name="interestEditReview" id="interestEditReview" cols="30" rows="5"></textarea>
    </fieldset>
    <button type="button" id="saveEditInterest">Save</button>
    </section>
    `
}
}

export default htmlFactory
