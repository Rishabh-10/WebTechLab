
// stoping the slider

const link1 = document.getElementById('text-1');
const link2 = document.getElementById('text-2');
const link3 = document.getElementById('text-3');

function stopSlider() {
    link1.style.animationPlayState = 'paused';
}

function playSlider() {
    link1.style.animationPlayState = 'running';
}

link1.onmouseenter = stopSlider;
link1.onmouseleave = playSlider;

link2.onmouseenter = stopSlider;
link2.onmouseleave = playSlider;

link3.onmouseenter = stopSlider;
link3.onmouseleave = playSlider;
