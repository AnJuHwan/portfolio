'use strict'
// navbar 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else { 
        navbar.classList.remove('navbar--dark');
    }
})



// Handle navbar scrolling
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=> {

const target = event.target;
const link = target.dataset.link;
if(link == null) { 
    return;
}
navbarMenu.classList.remove('open');
scrollIntoView(link);
})


// navar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
})

// navbar handle click "contactme"
const contactme = document.querySelector('.home__contact');


contactme.addEventListener('click',()=>{
    scrollIntoView('#contact');
})





window.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight){
        
    }
})

// Make home transparent window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=> { 
    home.style.opacity = 1-window.scrollY / homeHeight;
})

// Arrow up button opacity
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=> { 
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})

// Arrow up button
arrowUp.addEventListener('click',()=> { 
    scrollIntoView('#home');
})

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e)=> { 
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null) { 
        return;
    }
    
    // Remove selection from the previous item and select
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectsContainer.classList.add('anim-out');
    setTimeout(()=> { 
        projects.forEach((project) => { 
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else { 
                project.classList.add('invisible');
            }
        });
        projectsContainer.classList.remove('anim-out');
    },300)
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
}