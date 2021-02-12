export async function getData(d) {
    const apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
    const apiKey = '&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs'

    let getDateData = await fetch('https://mars-photos.herokuapp.com/api/v1/manifests/' + d)
    let getDateDataJson = await getDateData.json()
    let maxDateData = getDateDataJson.photo_manifest.max_sol

    let selectedEndpoint = await fetch(apiURL + d + '/photos?sol=' + maxDateData + apiKey)
    let selectedEndpointJson = await selectedEndpoint.json()
    
    console.log(selectedEndpointJson)
    return (selectedEndpointJson)
}