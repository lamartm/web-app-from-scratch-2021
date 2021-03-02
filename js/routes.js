import { getData } from './api.js'
import { createElements, selectedImage } from './render.js'
import { loader } from './loader.js'

export function checkRoute() {
routie({
        'Spirit': function(){
            loader('active')
            getData('Spirit')
            .then(createElements)
        },
        'Spirit/:id': id => {
            loader('active')
            getData('Spirit')
            .then(data => {
                selectedImage(data, parseInt(id))
            })
        },
        'Opportunity': function(){
            loader('active')
            getData('Opportunity')
            .then(createElements)
        },
        'Opportunity/:id': id => {
            loader('active');
            getData('Opportunity')
            .then(data => {
                selectedImage(data, parseInt(id))
            })
        },
        'Curiosity': function(){
            loader('active')
            getData('Curiosity')
            .then(createElements)
        },
        'Curiosity/:id': id => {
            loader('active')
            getData('Curiosity')
            .then(data => {
                selectedImage(data, parseInt(id))
            })
        }
    })
}
