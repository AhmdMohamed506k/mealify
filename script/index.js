
let navBar = document.querySelector('#navbar');
const monnnavIcon = document.querySelector('#MoodIcon');
const sunnavIcon = document.querySelector('#sunIcon');
const pageStyle = document.querySelector('#stylePage');
const links=document.querySelectorAll(".nav-link");

const sections=document.querySelectorAll(".section");
const Links=document.querySelectorAll("nav ul li a");








function scroll(){


    
 let sectionPostion= window.scrollY + window.innerHeight / 2 ; // to get scroll position
  
 sections.forEach((section,i)=>{
    let sectionTop = section.offsetTop;
    let sectionBottom = sectionTop + section.offsetHeight;
   


    // if the section is in the viewport
    if(sectionPostion >= sectionTop && sectionPostion < sectionBottom){
      links.forEach(link => link.classList.remove("active") )  // remove active class from all links
      links[i].classList.add("active") //add active class to current section
    }
 })
  
}






window.addEventListener("scroll", ()=>{
    scroll()
    

})






if(localStorage.getItem("darkMode") == "true"){
    monnnavIcon.classList.add("d-none")
    sunnavIcon.classList.remove("d-none")
    pageStyle.href="style/Darkstyles.css"
}else{
    monnnavIcon.classList.remove("d-none")
    sunnavIcon.classList.add("d-none")
    pageStyle.href="style/styles.css"
}


monnnavIcon.addEventListener('click', () => {
   monnnavIcon.classList.add("d-none")
   sunnavIcon.classList.remove("d-none")
   localStorage.setItem("darkMode", "true")
   pageStyle.href="style/Darkstyles.css"
   





})
sunnavIcon.addEventListener('click', () => {
    sunnavIcon.classList.add("d-none")
    monnnavIcon.classList.remove("d-none")
    localStorage.setItem("darkMode", "false")
    pageStyle.href="style/styles.css"
   

  
 
})
