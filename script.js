/* ======================================================
   CANDI BAE COSMETICS
   script.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------
       Smooth Scroll
    ----------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* -----------------------------------
       Sticky Navigation
    ----------------------------------- */

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            nav.style.background = "rgba(255,255,255,.95)";
            nav.style.backdropFilter = "blur(25px)";
            nav.style.boxShadow = "0 12px 35px rgba(0,0,0,.15)";
            nav.style.padding = "14px 30px";

        } else {

            nav.style.background = "rgba(255,255,255,.25)";
            nav.style.backdropFilter = "blur(20px)";
            nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.12)";
            nav.style.padding = "18px 34px";

        }

    });

    /* -----------------------------------
       Scroll Reveal
    ----------------------------------- */

    const revealElements = document.querySelectorAll("section,.card");

    const reveal = () => {

        revealElements.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if(top < visible){

                el.classList.add("active");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);

    revealElements.forEach(el=>{

        el.classList.add("reveal");

    });

    /* -----------------------------------
       Back To Top Button
    ----------------------------------- */

    const topButton = document.createElement("button");

    topButton.className = "top";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    topButton.style.display = "none";

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            topButton.style.display="block";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* -----------------------------------
       Floating Sparkles
    ----------------------------------- */

    const hero = document.querySelector(".hero");

    function sparkle(){

        const star = document.createElement("span");

        star.className = "sparkle";

        star.style.left = Math.random() * window.innerWidth + "px";

        star.style.animationDuration = (5 + Math.random() * 6) + "s";

        star.style.opacity = Math.random();

        hero.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },10000);

    }

    setInterval(sparkle,500);

});