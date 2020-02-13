import api from "./apiManager.js"
import events from "./events.js"
import renderDom from "./renderInterestCard.js"
api.getAllTravels().then(renderDom.renderInterests)
events.addSaveEventListener()
events.addDeleteEventListener()
api.getPlaces().then(renderDom.renderPlaces)
