let active = false;

function setRotationSpeed(speed) {

    if (active) {
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

}

function Rotation(action) {
    const img = document.getElementById('FanPic');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');

    active = action;

    if (active) {
        start.disabled = true;
        stop.disabled = false;
        img.style.animation = `spin 10s linear infinite`
    }

    else {
        start.disabled = false;
        stop.disabled = true;
    }




    if (!active) {
        img.style.animation = `none`;
    }
}




// Initial speed
setRotationSpeed('5s');