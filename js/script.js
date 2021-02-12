async function getNasa(d) {
    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3024&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs')
    let maxData = await fetch('https://mars-photos.herokuapp.com/api/v1/manifests/' + d)
    let maxInfo = await maxData.json()
    let maxSol = maxInfo.photo_manifest.max_sol
    let selectedEndpoint = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/' + d + '/photos?sol=' + maxSol + '&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs')
    let selectedEndpointJson = await selectedEndpoint.json()
    return (selectedEndpointJson)
}

function createElements(d) {

    const section = document.querySelector('[data-route=images]')
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(section)

    d.photos.forEach(item => {
        const imgItem = document.createElement('img')
        imgItem.src = item.img_src
        section.appendChild(imgItem)

        const pItem = document.createElement('p')
        pItem.innerHTML = 'Picture taken: ' + item.earth_date + ' from the ' + item.camera.full_name
        section.appendChild(pItem)
    })

}



window.onclick = e => {
    getNasa(e.target.id)
        .then(createElements)
}



