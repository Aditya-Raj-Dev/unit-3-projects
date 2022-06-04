


let container = document.getElementById("container")

let movieData = JSON.parse(localStorage.getItem("movies"))||[]

async function Click() {

    let searchMovie = document.getElementById("searchMovie").value

    try {
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5803d9e8&t=${searchMovie}`)

        let data = await res.json()

        showMovie(data)

    }
     catch (err) {    
      console.log(err)

    }
}

function showMovie(data) {

    if (data.Response==="False") { 
        container.innerHTML = null  
        var image = document.createElement("img")
        image.src = "https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-size_restricted.gif"
        
        image.style.height ="400px";
        image.style.width ="300px";
       
        // document.getElementById("container").innerHTML= null

        document.getElementById("container").append(image)
        
    }

   else if(data.imdbRating>8.5){
    container.innerHTML = null
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data.Poster;

        let date = document.createElement("p");
        date.innerText = "Released date "+" : "+data.Released;

        let title = document.createElement("p");
        title.innerText = "Title "+" : "+data.Title;

        let genre = document.createElement("p");
        genre.innerText = "Genre "+" : "+data.Genre;

        let Language = document.createElement("p");
        Language.innerText= "Language "+" : "+data.Language;

        let Writer = document.createElement("p");
        Writer.innerText= "Writer "+" : "+data.Writer;


        let ratings = document.createElement("p")
        ratings.innerText = "imdb Rating "+" : "+data.imdbRating

        let Actors = document.createElement("p")
        Actors.innerText = "Actors "+" : "+ data.Actors

        let Runtime = document.createElement("p")
        Runtime.innerText = "Runtime "+" : "+ data.Runtime

        let img2 = document.createElement("img")
        img2.setAttribute("id", "recomanded")
        img2.src = "https://onlinelearninginsights.files.wordpress.com/2014/02/recommendedlogo_small.jpg"

        div.append(img, title ,ratings ,genre, Runtime, date, Language, Actors , Writer,img2)
            container.append(div);
    }
    

  else{ 
    container.innerHTML = null  

     console.log(data)
    //data.Search.map(function (ele, index) {

         let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = data.Poster;

        let date = document.createElement("p");
        date.innerText = "Released date "+" : "+data.Released;

        let title = document.createElement("p");
        title.innerText = "Title "+" : "+data.Title;

        let genre = document.createElement("p");
        genre.innerText = "Genre "+" : "+data.Genre;

        let Language = document.createElement("p");
        Language.innerText= "Language "+" : "+data.Language;

        let Writer = document.createElement("p");
        Writer.innerText= "Writer "+" : "+data.Writer;


        let ratings = document.createElement("p")
        ratings.innerText = "imdb Rating "+" : "+data.imdbRating

        let Actors = document.createElement("p")
        Actors.innerText = "Actors "+" : "+ data.Actors

        let Runtime = document.createElement("p")
        Runtime.innerText = "Runtime "+" : "+ data.Runtime

        div.append(img, title ,ratings ,genre, Runtime, date, Language, Actors , Writer)

        container.appendChild(div);
    }
   // });
}



























