let card = [...document.querySelectorAll('.skills_photo')];
let prebtns = [...document.querySelectorAll('.pre-btn')];
let nxtbtns = [...document.querySelectorAll('.nxt-btn')];

card.forEach((item, i) => {
    let containerdimensions = item.getBoundingClientRect();
    let containerwidth = containerdimensions.width;
   
    nxtbtns[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth -300;
    })
   
    prebtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth +300;
    })
})

//dark mode//
const toggle = document.getElementById("checkbox");
const body = document.querySelector('body');

const nav = document.getElementById('nav_a');
const nav1 = document.getElementById('nav_a1');
const nav2 = document.getElementById('nav_a2');
const nav3 = document.getElementById('nav_a3');
const nav4 = document.getElementById('nav_a4');
const nav5 = document.getElementById('nav_a5');
const nav_bar = document.querySelector("header");

const nav6 = document.getElementById('nav_a6');
const nav7 = document.getElementById('nav_a7');
const nav8 = document.getElementById('nav_a8');
const nav9 = document.getElementById('nav_a9');
const nav10 = document.getElementById('nav_a10');
const nav11 = document.getElementById('nav_a11');


toggle.addEventListener('click', function(){
   this.classList.toggle('dark-mode');
   if(this.classList.toggle('checkbox1')){
    body.style.background = 'black';
    body.style.color = 'white';
    nav.style.color = 'white';
    nav1.style.color = 'white';
    nav2.style.color = 'white';
    nav3.style.color = 'white';
    nav4.style.color = 'white';
    nav5.style.color = 'white';
    nav_bar.style.background = 'black';
    body.style.transition = '2s';
    nav6.style.color = 'white';
    nav7.style.color = 'white';
    nav8.style.color = 'white';
    nav9.style.color = 'white';
    nav10.style.color = 'white';
    nav11.style.color = 'white';
   }
   else{
    body.style.background = 'white';
    body.style.color = 'black';
    nav.style.color = 'black';
    nav1.style.color = 'black';
    nav2.style.color = 'black';
    nav3.style.color = 'black';
    nav4.style.color = 'black';
    nav5.style.color = 'black'; 
    nav_bar.style.background = 'white';
    body.style.transition = '2s';
    nav6.style.color = 'black';
    nav7.style.color = 'black';
    nav8.style.color = 'black';
    nav9.style.color = 'black';
    nav10.style.color = 'black';
    nav11.style.color = 'black';
   
   }
    
})

//vedio controller
const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            video.addEventListener('mouseenter', () => {
                video.play();
            });

            video.addEventListener('mouseleave', () => {
                video.pause();
                video.currenttime = 0;
            });
        });
