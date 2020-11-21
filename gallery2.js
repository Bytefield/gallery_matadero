const images = [
    {
        name: "FelixBeltran",
        text: "Felix Beltrán",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "GiovanniVannucchi",
        text: "Giovanni Vannucchi",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "RuthKlotzel",
        text: "Ruth Klotzel",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "GonzaloCastillo",
        text: "Gonzalo Castillo",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "KarinaSalguero-Moya",
        text: "Karina Salguero-Moya",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "PeterMussfeldt",
        text: "Peter Mussfeldt",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "ManuelLecuona",
        text: "Manuel Lecuona",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "OscarSalinas",
        text: "Oscar Salinas",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "FranciscoProvidencia",
        text: "Francisco Providência",
        title: "comite_asesor",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "FelipeCesarLondono",
        text: "Felipe César Londoño",
        title: "equipo_BID",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "LulaCapriel",
        text: "Lula Capriel",
        title: "equipo_BID",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "OvidioMorales",
        text: "Ovidio Morales",
        title: "equipo_BID",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "CarlosZuniga",
        text: "Carlos Zúñiga",
        title: "equipo_BID",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "AnabellaRondina",
        text: "Anabella Rondina",
        title: "equipo_BID",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    },
    {
        name: "AlexLobos",
        text: "Alex Lobos",
        title: "jurado_bid18",
        title_path: "./assets/images/gallery/videos/titles/",
        path: "./assets/images/gallery/videos/",
        url: ""
    }
];

const images_path = "./assets/images/gallery/categorias/desktop/";
var gallery_element_array = [];
var image_elements_array = [];

const images_to_display = 9
const positioning_coeficient = 15;
const scrolling_coeficient = 1000 ;
const number_total_images = images.length;
const scrolling_height = scrolling_coeficient * number_total_images;

const gallery_element = document.querySelector('.gallery');
const scrolling_element = gallery_element.querySelector('.scroll_item ')

// Set scroll item height for scrolling
scrolling_element.style.height = scrolling_height + 'px';

var last_image_title = "";

images.map(function(image, index) {

    let image_path = "./assets/images/gallery/videos/" + image.name + ".png";
    let title_image_src = image.title_path + image.title + ".svg"
    let url = image.url || "#"

    let image_container_DOM =
        "<div class='image_container'>" +
            "<div class='title_image'>" +
                "<img src='" + title_image_src + "' alt='" + image.title + "' class='image_title' data-url='" + url + "'/>" +
            "</div>" +
            "<a href='" + image.url + "' target='_parent'><img src='" + image_path + "' alt='" + image.name + "' class='main_image' /></a>" +
            "<p class='image_text'>" + image.text + "</p>" +
        "</div>";

    gallery_element.innerHTML += image_container_DOM;

}, false);

// Initializing images array, after gallery element has been loaded with all the images
image_elements_array = [...gallery_element.querySelectorAll('.image_container')];

// Positioning image container relative to bottom
const window_height = window.innerHeight;
const percent_height = window_height / 100;
const image_alignment_bottom = scrolling_height -(window_height - (5 * percent_height));

image_elements_array.map(function(element, index) {
    element.style.bottom = image_alignment_bottom + "px";
});

// function to position visible elements
var position_elements = function(counter) {

    // variables
    let last_image_title = "";

    image_elements_array.map(function(element, index) {

        let move_coeficient = positioning_coeficient * index;
        let counter_coeficient = positioning_coeficient * counter;
        let x_coeficient = 3;
        let y_coeficient = -19;
        let z_coeficient = -1;
        let move_x = move_coeficient * x_coeficient - counter_coeficient * x_coeficient;
        let move_y = move_coeficient * y_coeficient - counter_coeficient * y_coeficient;
        let move_z = move_coeficient * z_coeficient - counter_coeficient * z_coeficient;

        if (counter >= 0) {
            gsap.to(element, {
                x: move_x,
                y: move_y,
                z: move_z
            });
        }

        // hide / show first element
        if (index < counter)  {
            element.classList.add('hidden');
            element.classList.remove('show');
        }  else {
            element.classList.add('show');
            element.classList.remove('hidden');
        }

        // hide / show repeated title image
        let image_title_element = element.querySelector('.title_image img');
        let image_title = image_title_element.getAttribute('alt');
        if (image_title == last_image_title) image_title_element.classList.add('hide');

        // When element first in view -> show
        let element_index = image_elements_array.indexOf(element);
        if (element_index == counter) image_title_element.classList.remove('hide');

        // Storing last image title for later comparison
        last_image_title = image_title;
    });
}

// initial positioning
position_elements(0);


//
// SCROLLING
//

// 1) Variables
let scroll_counter = 0;
var ticker = 0;
var last_ticker = 0;
var visibles_array = [];

// 2) Function
$('.gallery').mousewheel(function(event, delta) {

    if (delta < 0) scroll_counter++;
    else scroll_counter--;

    if ((scroll_counter % 15 == 0) && (delta < 0) && (ticker < image_elements_array.length - 1)) ticker++;
    else if ((scroll_counter % 15 == 0) && (delta > 0) && (ticker >= 0)) ticker--;

    console.log(ticker);
    if(last_ticker != ticker && ((ticker >= 0) || (ticker <= gallery_element_array))) {
            position_elements(ticker);
    }

    last_ticker = ticker
});



// move gallery on keypress arrow up/down
document.addEventListener('keydown', function(event) {
    if ( (event.code == "ArrowUp")  && (ticker < image_elements_array.length - 1) ) ticker++;
    else if ( (event.code == "ArrowDown") && (ticker > 0) ) ticker--;
    console.log(ticker);

    if ( (last_ticker != ticker) && (ticker >= 0) ) {
        position_elements(ticker);
    }

    last_ticker = ticker
})