import { getNasa } from './api.js'
import { createElements } from './render.js'


window.onclick = function selectRover (e) {
    getNasa(e.target.id)
        .then(createElements)
}

