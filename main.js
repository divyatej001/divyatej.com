document.addEventListener('DOMContentLoaded', function() {



const divElement = document.getElementById('rowtwo');
const bodyElement = document.body;
let isScrollingDown = false;

window.addEventListener('scroll', () => {
    const rect = divElement.getBoundingClientRect();
    const divTopOffset = rect.top;

    if (divTopOffset <= 320) {
        if (!isScrollingDown) {
            bodyElement.style.transition = 'background-color 0.5s ease'; // Add transition effect
            bodyElement.style.backgroundImage = 'none'; // Remove the background image
            bodyElement.style.backgroundColor = 'black'; // Set background color to black
        }
        isScrollingDown = true;
    } 
    else {
        if (isScrollingDown) {
            bodyElement.style.transition = 'background-color 0.5s ease'; // Add transition effect
            bodyElement.style.backgroundImage = ''; // Reset to default background image
            bodyElement.style.backgroundColor = ''; // Reset to default background color
        }
        isScrollingDown = false;
    }
});

})