function login(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}
let arr=[
"https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/03/rustom-movie-posters.jpg",
"https://boldoutline.in/wp-content/uploads/2019/10/Web-Cover-99.jpg",
"https://stat2.bollywoodhungama.in/wp-content/uploads/2021/12/RRR-New-480x270.jpg",
"https://p4.wallpaperbetter.com/wallpaper/975/765/275/movies-bollywood-movies-wallpaper-preview.jpg"]
 console.log(arr)

let slide=document.getElementById("slideshow")
 
 let img=document.createElement("img")
 let i=0;
 setInterval(function(){
 if(i== arr.length){
     i=0
 }
 img.src=arr[i]
 slide.append(img)
 i++
 
 },3000)

 let moviedata=[]
 function database(n,r,p,i){
     this.name=n;
     this.relese=r;
     this.poster=p;
     this.IMDb=i;
 }

 let movie1= new database("KGF","2018","https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c374c53c341fda5afa0c0092e4d62029895c2fc9745026c49eca00a70da4473f._RI_V_TTW_.jpg",8.5)
 moviedata.push(movie1)
let movie2= new database("RRR","2022","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH",9.5)
moviedata.push(movie2)
let movie3=new database("Bahubali","2017","https://c8.alamy.com/comp/J30B3J/baahubali-the-beginning-aka-bahubali-the-beginning-poster-from-left-J30B3J.jpg",8.3)
moviedata.push(movie3)
let movie4= new database("Mirzapur","2018","https://m.media-amazon.com/images/M/MV5BMjEzNzMwNjAzMl5BMl5BanBnXkFtZTgwMTI4MzY3NjM@._V1_.jpg",7.9)
moviedata.push(movie4)
let movie5= new database("Family Man","2019","https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/5/Desk/2021_5$largeimg_884557700.jpeg",6.4)
moviedata.push(movie5)
let movie6= new database("Pushpa","2021","https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226579/Pushpa-1.jpg",8.8)
moviedata.push(movie6)
let movie7= new database("Dhoni","2016","https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",6.2)
moviedata.push(movie7)
let movie8= new database("Guru","2008","https://loverays.com/movies/Guru_Bollywood_Movie_2007.jpg",5.5)
moviedata.push(movie8)
let movie9= new database("Hera pheri","2003","https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",9.8)
moviedata.push(movie9)

localStorage.setItem("movies",JSON.stringify(moviedata))
var showimg=document.getElementById("movies")

function showdata(){
showimg.innerHTML=""

    moviedata.map(function(elem,index){
        let div=document.createElement("div")
    
        var rate= document.createElement("div")
        rate.setAttribute("id","detail")
    
        let img=document.createElement("img")
        img.src=elem.poster
        img.setAttribute("id","picture")
    
        let name=document.createElement("h1")
        name.innerText=elem.name
    
        var i= document.createElement("i")
        i.setAttribute("class","fa-solid fa-star")
    
        let imdb=document.createElement("h1")
        imdb.innerText= `⭐ ${elem.IMDb} `
        imdb.setAttribute("id","imdb")
    
        let relese=document.createElement("h1")
        relese.innerText=elem.relese
    
        rate.append(name,relese,imdb)
        div.append(img,rate)
        showimg.append(div)
    
    })
}
showdata()

document.getElementById("sort-lh").addEventListener("click",lowtohigh)

function lowtohigh(){
    moviedata.sort(function(a,b)
     {return a.IMDb - b.IMDb} )

     showdata()
}


document.getElementById("sort-hl").addEventListener("click",hightolow)

function hightolow(){
    moviedata.sort(function(a,b){
        return b.IMDb - a.IMDb
    })
    showdata()
}