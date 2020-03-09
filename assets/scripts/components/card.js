window.addEventListener('load', () => {     // TODO: Move load-event, it should not be part of the component-script
    const cards = document.querySelectorAll('.c-card');
    Array.prototype.forEach.call(cards, card => {
        let down, up, link = card.querySelector('h2 a');
        card.style.cursor = 'pointer';
        card.onmousedown = () => down = +new Date();
        card.onmouseup = () => {
            up = +new Date();
            if ((up - down) < 200) {
                link.click();
            }
        }
    });
});