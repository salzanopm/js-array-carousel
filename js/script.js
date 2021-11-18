const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// Popolare partendo dall'array di immagini, il contenitore di immagini e i cerchietti
// Prendiamoci i container
const imagesContainer = document.querySelector('.images-container');
const circlesContainer = document.querySelector('.circles-list');

// Per ogni elemento di imagesArray popolo i container
for( let i = 0; i < imagesArray.length; i++ ) {
    const thisPath = imagesArray[i];
    
    // Popolare il contenitore di immagini
    const newImage = `
    <div class="single-image">
        <img src="${thisPath}" alt="Img ${i}">
    </div>
    `;

    imagesContainer.innerHTML += newImage;

    // Popolare il contenitore di cerchietti
    const newCircle = `
        <li class="single-circle"></li>
    `;
    circlesContainer.innerHTML += newCircle;
}

// Diamo la classe active ad un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const allCircles = document.getElementsByClassName('single-circle');
allImages[activeImage].classList.add('active');
allCircles[activeImage].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const nextArrow = document.querySelector('.next');
nextArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allCircles[activeImage].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeImage < imagesArray.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
    allCircles[activeImage].classList.add('active');
});

const prevArrow = document.querySelector('.prev');
prevArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allCircles[activeImage].classList.remove('active');

    // decrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = imagesArray.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
    allCircles[activeImage].classList.add('active');
});