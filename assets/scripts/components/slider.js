import glide from '../../../fractal/node_modules/@glidejs/glide';
window.Glide = glide;

window.addEventListener('load', () => {     // TODO: Move load-event, it should not be part of the component-script
    let elements = document.querySelectorAll('.glide');
    if(elements.length) {
        elements.forEach((el) => {
            new Glide(el).mount();
        });
    }
});