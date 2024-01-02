var overlay=document.querySelector(".overlay")
var addcontainer=document.querySelector(".add-container")
var addpopup=document.getElementById("addpopup")
addpopup.addEventListener("click",function(){
   overlay.style.display="block"
   addcontainer.style.display="block"
})
var cancelpopup=document.getElementById("cancel-movie")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
   addcontainer.style.display="none"
})

var container=document.querySelector(".container")
var addmovie=document.getElementById("add-movie")
var moviename=document.getElementById("movie-name")
var movietype=document.getElementById("movie-type")
var moviedescription=document.getElementById("movie-description")
addmovie.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","container-box")
    div.innerHTML=`<h2>${moviename.value}</h2>
    <h5>${movietype.value}</h5>
    <p>${moviedescription.value}</p>
    <button onclick="deletemovie(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
   addcontainer.style.display="none"
})
function deletemovie(event)
{
    event.target.parentElement.remove()
}