// Link hover effect
function linkHover(){
    const navLink = Array.from(document.querySelectorAll('#navlink'));
    navLink.forEach((element) => {
        element.addEventListener('mouseover',(e) =>{
            element.classList.add('navactive');
        })
        element.addEventListener('mouseleave',(e) =>{
            element.classList.remove('navactive');
        })
    })
}
linkHover();

// Respoinsive menubar
function responsiveHeader(){
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click',(e) => {
        header.classList.add('activeheader');
    })
    menuIcon.addEventListener('dblclick',(e) => {
        header.classList.remove('activeheader');
        header.style.transition = '0.6s all linear';
    })
}
responsiveHeader();