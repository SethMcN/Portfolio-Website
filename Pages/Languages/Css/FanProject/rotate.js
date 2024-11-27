function setRotationSpeed(speed) {
    const img = document.getElementById('FanPic');
    if (img) {
        console.log(speed);
        if (img) {
            img.style.animation = `spin ${speed} linear infinite`;
        }
    } else {
        console.error('Element with id "FanPic" not found.');
    }
}

// Initial speed
setRotationSpeed('5s');