export function createElements(d) {

    const section = document.querySelector('[data-route=images]')
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(section)

    d.photos.forEach(item => {
        const wrapper = document.createElement('div')
        section.appendChild(wrapper)
        
        const imgItem = document.createElement('img')
        imgItem.src = item.img_src
        wrapper.appendChild(imgItem)

        const pItem = document.createElement('p')
        pItem.innerHTML = 'Picture taken: ' + item.earth_date + ' from the ' + item.camera.full_name
        wrapper.appendChild(pItem)
    })

}