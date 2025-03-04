const navLink = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');

const removeActiveInLink = () => {
    navLink.forEach(link => {
        link.parentElement.classList.remove('active');
        link.classList.remove('active');
    })
};

const hideSections = () => {
    sections.forEach(section => {
        section.classList.add('hidden');
    })
};

navLink.forEach(link => {
    
    const section = document.querySelector(link.hash);

    link.addEventListener('click', ()=> {
        removeActiveInLink();
        hideSections();
        link.parentElement.classList.add('active');
        link.classList.add('active')
        section.classList.remove('hidden');
    })
});
