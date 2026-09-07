/* ======================================================
   CANDI BAE COSMETICS
   script.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if(menuToggle && navMenu){

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                navMenu.classList.contains("active")
            );

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        document.addEventListener("click", event => {

            if(
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ){

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

        window.addEventListener("resize", () => {

            if(window.innerWidth > 768){

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            if(!targetId || targetId === "#"){
                return;
            }

            const target = document.querySelector(targetId);

            if(target){

                e.preventDefault();

                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight + 30 : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({
                    top:targetPosition,
                    behavior:"smooth"
                });

            }

        });

    });

    const nav = document.querySelector("nav");

    if(nav){

        window.addEventListener("scroll", () => {

            if(window.scrollY > 60){

                nav.style.background = "rgba(255,255,255,.95)";
                nav.style.backdropFilter = "blur(25px)";
                nav.style.webkitBackdropFilter = "blur(25px)";
                nav.style.boxShadow = "0 12px 35px rgba(0,0,0,.15)";

            } else {

                nav.style.background = "rgba(255,255,255,.72)";
                nav.style.backdropFilter = "blur(24px)";
                nav.style.webkitBackdropFilter = "blur(24px)";
                nav.style.boxShadow = "0 18px 55px rgba(0,0,0,.12)";

            }

        });

    }

    const revealElements = document.querySelectorAll("section,.card");

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    const reveal = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;
            const visible = window.innerHeight - 120;

            if(top < visible){
                el.classList.add("active");
            }

        });

    };

    reveal();
    window.addEventListener("scroll", reveal);

    const topButton = document.createElement("button");

    topButton.className = "top";
    topButton.innerHTML = "↑";
    topButton.setAttribute("aria-label", "Back to top");

    document.body.appendChild(topButton);
    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        topButton.style.display =
            window.scrollY > 500 ? "block" : "none";

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    const hero = document.querySelector(".hero");

    function sparkle(){

        if(!hero){
            return;
        }

        const star = document.createElement("span");

        star.className = "sparkle";
        star.style.left = Math.random() * 100 + "%";
        star.style.bottom = "0";
        star.style.animationDuration =
            (5 + Math.random() * 6) + "s";
        star.style.opacity = Math.random();

        hero.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 11000);

    }

    setInterval(sparkle, 700);

});