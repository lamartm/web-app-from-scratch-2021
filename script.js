async function getNasa() {
    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-2-1&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs')
    let data = await response.json()
    return data
}

getNasa().then(function (d) {
    console.log(d)
    document.getElementById('nasa').src = d.photos[2].img_src
    document.getElementById('roverName').innerHTML = "Rover name: " + d.photos[0].rover.name
    document.getElementById('date').innerHTML = "Date: " + d.photos[3].earth_date
})

