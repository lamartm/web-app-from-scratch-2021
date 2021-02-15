export function createElements(data) {

    const section = document.querySelector('[data-route=images]')
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(section)

    data.photos.forEach(item => {
        section.insertAdjacentHTML('afterbegin', `<div> <img src='${item.img_src}'> <p> Picture taken: ${item.earth_date} from the ${item. camera.full_name}</p> </div>`)
    })

}