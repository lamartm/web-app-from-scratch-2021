import { loader } from './loader.js'

export function createElements(data) {
    loader('inactive')

    const section = document.querySelector('[data-route=images]')
    const previousSection = document.querySelector('[data-route=selected-image]')

    removeAllChildNodes(section)
    removeAllChildNodes(previousSection)

    data.forEach(item => {
        section.insertAdjacentHTML('beforeend', 
        `<a href="#${item.rover}/${item.id}">
        <div> 
        <img src='${item.img_src}'> <p> Picture taken: ${item.earth_date} from the ${item.camera}</p> 
        </div>
        `)
    })

}

export function selectedImage(data, id) {
    loader('inactive')

    const findID = data.find(d => d.id === id)

    const section = document.querySelector('[data-route=selected-image]')
    const previousSection = document.querySelector('[data-route=images]')

    removeAllChildNodes(section)
    removeAllChildNodes(previousSection)

    section.insertAdjacentHTML('afterbegin', 
        `<div> 
        <img src='${findID.img_src}'> 
        <p> Picture taken in earth time: ${findID.earth_date}
        <br>
         Picture taken in Martian time: ${findID.sol} sol
        <br>
        Taken from the ${findID.camera}</p> 
        </div>
        `)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}