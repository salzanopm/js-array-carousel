const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArray = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// Popolare partendo dall'array di immagini, il contenitore di immagini e i cerchietti
// Prendiamoci i container
const imagesContainer = document.querySelector('.images-container');
// Per ogni elemento di imagesArray popolo i container
for( let i = 0; i < imagesArray.length ; i++ ) {
    const pathImages = imagesArray[i];
    
    // Popolare il contenitore di immagini
    const newImage = `
    <div class="single-image">
        <img src="${pathImages}" alt="Img ${i}">
    </div>
    `;
    imagesContainer.innerHTML += newImage;
}



const titleContainer = document.querySelector('.title-container');
// Per ogni elemento di imagesArray popolo i container
for( let i = 0; i < titleArray.length ; i++ ) {
    const pathTitle = titleArray[i]
    const newTitle = `
    <div class="box-title">
        <h2>${pathTitle}</h2>
    </div>
    `;
    titleContainer.innerHTML += newTitle;
}

const titleContainer = document.querySelector('.title-container');
// Per ogni elemento di imagesArray popolo i container
for( let i = 0; i < titleArray.length ; i++ ) {
    const pathTitle = titleArray[i]
    const newTitle = `
    <div class="box-title">
        <p>${pathTitle}</p>
    </div>
    `;
    titleContainer.innerHTML += newTitle;
}


// Diamo la classe active ad un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
allImages[activeImage].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const downArrow = document.querySelector('.down');
downArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeImage < imagesArray.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
});

const upArrow = document.querySelector('.up');
upArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');

    // decrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = imagesArray.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
});


// Diamo la classe active ad un elemento
let activeTitle = 0;
const allTitle = document.getElementsByClassName('title-container');
allTitle[activeTitle].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const downArrow = document.querySelector('.down');
downArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allTitle[activeTitle].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeTitle < titleArray.length - 1 ) {
        activeTitle++;
    } else {
        activeTitle = 0;
    }

    // assegnare all'immagine col nouvo indice la classe active
    alltitle[activeTitle].classList.add('active');
    
});

const upArrow = document.querySelector('.up');
upArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allTitle[activeText].classList.remove('active');

    // decrementare activeText di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeText > 0 ) {
        activeText--;
    } else {
        activeText = textArray.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allTitle[activeText].classList.add('active');
});

// Diamo la classe active ad un elemento
let activeText = 0;
const allTitle = document.getElementsByClassName('title-container');
allText[activeText].classList.add('active');

// Al click di prev e next, sposto le classi active all'immagine e al cerchietto
const downArrow = document.querySelector('.down');
downArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allText[activeText].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeText < textArray.length - 1 ) {
        activeText++;
    } else {
        activeText = 0;
    }

    // assegnare all'immagine col nouvo indice la classe active
    alltext[activeText].classList.add('active');
    
});

const upArrow = document.querySelector('.up');
upArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allText[activeText].classList.remove('active');

    // decrementare activeText di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeText > 0 ) {
        activeText--;
    } else {
        activeText = titleArray.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allText[activeText].classList.add('active');
});