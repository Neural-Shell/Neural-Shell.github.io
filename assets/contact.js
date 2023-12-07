document.addEventListener('DOMContentLoaded', function () {
    const brandParagraph = document.querySelector('p.brand');

    brandParagraph.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the click event
        window.open('/', '_self'); // Open the URL "/" in a new tab
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const brandParagraph = document.querySelector('img.logo-logo');

    brandParagraph.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the click event
        window.open('/', '_self'); // Open the URL "/" in a new tab
    });
});

var i = 0;
var txt = 'Contact Us!';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
});