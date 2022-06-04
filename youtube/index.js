 //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyAVyya_V1ZY8cajaXa0waZVScdLihC-aAc

 const searchvideo=async ()=>{
    let query=document.getElementById("search").value;
    try{
        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyAVyya_V1ZY8cajaXa0waZVScdLihC-aAc`)
    let data= await res.json()
    let x= data.items
    console.log(x)
    displaydata(x)
    }
    catch(err){
        console.log(err)
    }
}
let displaydata=(data)=>{
    let container=document.getElementById("container")
    container.innerHTML=null
    data.map(({id:{videoId},snippet:{title,thumbnails}})=>{
    let div=document.createElement("div")
    div.setAttribute("id","pointer")

    let img=document.createElement("img")
    // img.src=`https://www.youtube.com/embed/${videoId}`;
    img.src=thumbnails.high.url;
    // img.style.width="100%";
    // img.style.height="60%";
    

    let tit=document.createElement("h4")
    tit.innerText=title

    div.append(img,tit)
    div.addEventListener("click",function(){

       localStorage.setItem("video",JSON.stringify(videoId))
        window.location.href="video.html"
     })
    container.append(div)


})
}
  
const mostpopularvideo=async ()=>{
    
    try{
        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=popularvideo&key=AIzaSyAVyya_V1ZY8cajaXa0waZVScdLihC-aAc`)
    let data= await res.json()
    let x= data.items
    console.log(x)
    displaydata(x)
    }
    catch(err){
        console.log(err)
    }
}
let displaydata2=(data)=>{
    let container=document.getElementById("container")
    container.innerHTML=null
    data.map(({id:{videoId},snippet:{title,thumbnails}})=>{
    let div=document.createElement("div")
    div.setAttribute("id","pointer")

    let img=document.createElement("img")
    // img.src=`https://www.youtube.com/embed/${videoId}`;
    img.src=thumbnails.high.url;
    // img.style.width="100%";
    // img.style.height="60%";
    

    let tit=document.createElement("h4")
    tit.innerText=title

    div.append(img,tit)
    div.addEventListener("click",function(){

       localStorage.setItem("video",JSON.stringify(videoId))
        window.location.href="video.html"
     })
    container.append(div)


})
}
  


mostpopularvideo()