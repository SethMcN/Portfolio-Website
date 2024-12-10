
function ChangeSectionCssFile() {
    const sectionCssFile = document.getElementById('section-style').setAttribute('href', 'section-mobile.css');    
    
}


let width = screen.width;
if (width < 900) { 
    
    ChangeSectionCssFile();
}
