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


// TestomonialSlider
function testoMonial(){
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const testomonialCard = [...document.querySelectorAll('.testomonial-card')];
    const length = testomonialCard.length;
    const testomonialDotDiv = document.querySelector('.testomonial-dot');
    let sliderNumber = 0;

    // create dot dynamically equal to testomonialCard div length;
    for(let i = 0 ; i < length ; i++){
        let testoMonialDiv = document.createElement('div');
        testoMonialDiv.className = 'button';
        testomonialDotDiv.appendChild(testoMonialDiv);
    }
    const testomonialDot = [...document.querySelectorAll('.button')];
    console.log(testomonialDot)

    // testomonial position change
    function changeTestomonialPosition(){
        testomonialCard.forEach((element,index) => {
            element.style.left = `${index * 100}%`;
        })
    }
    changeTestomonialPosition();

    // if clicked the arrowRight slider element++
    arrowRight.addEventListener('click',(e) => {
        if(sliderNumber < length - 1){
            sliderNumber++;
        }else{
            sliderNumber = 0;
        }
        sliderTestomonial();
    })
      // if clicked the arrowLeft slider element--
    arrowLeft.addEventListener('click',(e) => {
        if(sliderNumber > 0){
            sliderNumber--;
        }else{
            sliderNumber = length -1;
        }
        sliderTestomonial();
    })

    function sliderTestomonial(){
        testomonialCard.forEach((element) => {
            element.style.transform = `translateX(-${sliderNumber * 100}%)`;
        })
    }
    // for dot
    testomonialDot.forEach((dot,index) => {
        dot.addEventListener('click',(e) => {
            testomonialCard.forEach((ele,i) => {
                ele.style.transform = `translateX(-${index*100}%)`;
            })
        })
    })

}
testoMonial();