function search(){
    let inputDetails = document.getElementById("input")
    let movieName =inputDetails.value

    //c117d45f
    let httpRequest = new XMLHttpRequest()
    let apiUrl =  "http://www.omdbapi.com/?apiKey=c117d45f&t="+movieName
    console.log(apiUrl)

    httpRequest.open("GET", apiUrl)//open httpRequest
    httpRequest.send() //sent httpRequest
    httpRequest.responseType = "json" //type of the g==html request
    httpRequest.onload = ()=>{
        console.log(httpRequest.response)
        let movie = httpRequest.response

        let image =document.getElementById("img")
        image.src = movie.Poster

        let description = document.getElementById("description")
        description.innerHTML = movie.Plot

        //h=get image to the  image  tag in html page
        //let image = document.getElemenyyById("img")
        //image.src = 
    }    

}