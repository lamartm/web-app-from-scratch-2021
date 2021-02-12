import { getData } from './api.js'
import { createElements } from './render.js'


window.onclick = function selectRover (e) {
    let check = ["none", "Spirit", "Opportunity", "Curiosity"]

    if (check.indexOf(e.target.id)) {
        getData(e.target.id)
        .then(createElements)
    }
    else {
        return none
    }
}


