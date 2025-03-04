const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('a');



window.addEventListener('scroll', ()=> {
    const scrollPosition = window.scrollY;
    nav.style.top = scrollPosition + "px";

    navLinks.forEach(link => {
        const sectionElement = document.querySelector(link.hash);

        if(scrollPosition + 50 > sectionElement.offsetTop && scrollPosition + 50 < sectionElement.offsetTop + sectionElement.offsetHeight){
            link.classList.add('active');
            link.parentElement.classList.add('active');
        } else{
            link.classList.remove('active');
            link.parentElement.classList.remove('active');
        }
    })
})