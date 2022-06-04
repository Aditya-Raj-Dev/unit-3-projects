
const showdata = async (url)=>{
    let container=document.getElementById("container")

    try{
        let res= await fetch(url);
        let data= await res.json();
        appenddata(data.meals,container)
        return data.meals
       
    }
     catch(err){
        console.log(err);
    }
};

let appenddata = (data,box)=>{
    box.innerHTML=null
data.map(({strMealThumb,strMeal,strCategory,strArea})=>{
    let div= document.createElement("div")

    let img=document.createElement("img")
    img.src=strMealThumb

    let title=document.createElement("h3")
    title.innerText=`Meal : ${strMeal}`

    let veg=document.createElement("h3")
    veg.innerText=`veg or Non-veg:${strCategory}`

    let food=document.createElement("h3")
    food.innerText=`Food Type :  ${strArea}`

    div.append(img,title,veg,food)

    box.append(div)



})
}

export  {showdata,appenddata}