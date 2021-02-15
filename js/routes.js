import { getData } from './api.js'
import { createElements } from './render.js'

export function checkRoute() {
routie({
        'Spirit': function(){
            getData('Spirit')
            .then(createElements)
        },
        'Opportunity': function(){
            getData('Opportunity')
            .then(createElements)
        },
        'Curiosity': function(){
            getData('Curiosity')
            .then(createElements)
        }
    })
}

