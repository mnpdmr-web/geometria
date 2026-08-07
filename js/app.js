/*====================================================
 GEOAULA - PLATAFORMA EDUCATIVA DE GEOMETRÍA
 ARCHIVO: app.js
=====================================================*/


//=====================================================
// CARGA INICIAL DE LA PÁGINA
//=====================================================


window.addEventListener("load",()=>{


    const loader=document.getElementById("preloader");


    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";


            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },800);


    }


});




//=====================================================
// MODAL DE BIENVENIDA
//=====================================================


document.addEventListener("DOMContentLoaded",()=>{


const modal=document.getElementById("welcomeModal");


const closeModal=document.querySelector(".close-modal");



if(modal){


    setTimeout(()=>{


        modal.style.display="flex";


    },1500);



}



if(closeModal){


    closeModal.onclick=()=>{


        modal.style.display="none";


    };


}



window.onclick=(event)=>{


    if(event.target===modal){


        modal.style.display="none";


    }


};



});





//=====================================================
// BOTÓN VOLVER ARRIBA
//=====================================================


const btnTop=document.getElementById("btnTop");



window.addEventListener("scroll",()=>{


    if(btnTop){


        if(window.scrollY>400){


            btnTop.style.display="flex";


        }

        else{


            btnTop.style.display="none";


        }


    }


});




if(btnTop){


btnTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });



});


}






//=====================================================
// MODO OSCURO
//=====================================================


const themeButton=document.getElementById("themeButton");



const currentTheme=
localStorage.getItem("theme");



if(currentTheme==="dark"){


    document.body.classList.add("dark");


}



if(themeButton){



themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    let theme="light";



    if(document.body.classList.contains("dark")){


        theme="dark";


    }



    localStorage.setItem("theme",theme);



});



}






//=====================================================
// ANIMACIONES AL HACER SCROLL
//=====================================================


const observer=
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("fade-in");


}


});


},
{

threshold:0.2

});



document.querySelectorAll(

".card, .competencia, .modulo, .topic-card"

)

.forEach(element=>{


observer.observe(element);


});






//=====================================================
// SISTEMA DE PROGRESO DEL ESTUDIANTE
//=====================================================


function saveProgress(section){


let progress=
JSON.parse(

localStorage.getItem("geoProgress")

)

|| [];



if(!progress.includes(section)){


progress.push(section);



localStorage.setItem(

"geoProgress",

JSON.stringify(progress)

);



}



}




// Detectar página actual


let page=
window.location.pathname;



if(page.includes("index")){


saveProgress("inicio");


}


if(page.includes("teoria")){


saveProgress("teoria");


}


if(page.includes("video")){


saveProgress("video");


}


if(page.includes("simulador")){


saveProgress("simulador");


}


if(page.includes("actividad")){


saveProgress("actividad");


}


if(page.includes("evaluacion")){


saveProgress("evaluacion");


}


if(page.includes("asistente")){


saveProgress("asistente");


}






//=====================================================
// MOSTRAR PROGRESO
//=====================================================


function showProgress(){


let progress=
JSON.parse(

localStorage.getItem("geoProgress")

)

|| [];



const steps=
document.querySelectorAll(".step");



steps.forEach((step,index)=>{


if(progress.length>index){


step.classList.add("activo");


}



});


}



showProgress();






//=====================================================
// MENSAJE DE CONSOLA
//=====================================================


console.log(

"GeoAula cargado correctamente 🚀"

);



