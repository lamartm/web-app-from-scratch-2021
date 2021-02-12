export async function getNasa(d) {

    let getDateData = await fetch('https://mars-photos.herokuapp.com/api/v1/manifests/' + d)
    let getDateDataJson = await getDateData.json()
    let maxDateData = getDateDataJson.photo_manifest.max_sol

    let selectedEndpoint = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/' + d + '/photos?sol=' + maxDateData + '&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs')
    let selectedEndpointJson = await selectedEndpoint.json()
    console.log(selectedEndpointJson)
    return (selectedEndpointJson)
}