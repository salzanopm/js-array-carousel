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
for( let i = 0; i < 1; i++ ) {
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
for( let i = 0; i < 1; i++ ) {
    const pathTitle = titleArray[i]
    const newTitle = `
    <div class="box-title">
        <h2>${pathTitle}</h2>
    </div>
    `;
    titleContainer.innerHTML += newTitle;
}

const textContainer = document.querySelector('.text-container');
// Per ogni elemento di imagesArray popolo i container
for( let i = 0; i < 1; i++ ) {
    const pathText = textArray[i]
    const newText = `
    <div class="box-title">
        <p>${pathText}</p>
    </div>
    `;
    textContainer.innerHTML += newText;
}