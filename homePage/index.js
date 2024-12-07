let width = screen.width;

console.log(width);
const sectionsArr = document.getElementsByClassName('section-container');

console.log(sectionsArr);



if (width > 1650) { 
    console.log('wide');
    
    sectionsArr[0].style.width = '70%'; 
}
