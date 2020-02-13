import api from "./apiManager.js"
import events from "./events.js"
import renderInterests from "./renderInterestCard.js"
api.getAllTravels().then(renderInterests)
events.addSaveEventListener()