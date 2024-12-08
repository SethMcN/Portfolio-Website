let width = screen.width;

const sectionCssFile = document.getElementById('section-style');

function ChangeSectionCssFile() {
    console.log('Changing section css file');
    sectionCssFile.setAttribute('href', 'section-mobile.css');


}


if (width < 900) { 
    
    ChangeSectionCssFile();
}
