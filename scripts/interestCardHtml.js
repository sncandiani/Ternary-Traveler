const interestCardFactory = (interest) => {
    return `
    <section>
        <p>${interest.name}</p>
        <p>${interest.description}</p>
        <p>${interest.cost}</p>
        <p>${interest.place}</p> 
    </section>
    `
}

export default interestCardFactory