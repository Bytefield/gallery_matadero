const images = [
    {
        name: "digital_rediseño.png",
        text: "Mención //<br>Rediseno sitio web del Centro Cultural de La Moneda",
        title: "./assets/images/gallery/logos_categorias_SVG/digital.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "digital_mariachi.png",
        text: "Mención //<br>Mariachi Gema Negra",
        title: "./assets/images/gallery/logos_categorias_SVG/digital.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "desarrollo_pylonesque.png",
        text: "Mención //<br>Pylonesque",
        title: "./assets/images/gallery/logos_categorias_SVG/interiores.svg",
        path: "./assets/images/gallery/especiales/desktop/",
        tags: []
    },
    {
        name: "espacios_mo.png",
        text: "Mención//<br>Mo de Movimiento",
        title: "./assets/images/gallery/logos_categorias_SVG/interiores.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "espacios_mimm.png",
        text: "Mención //<br>MIMM. Museo Itinerante de la Memoria y la Identidad de Los Montes de María",
        title: "./assets/images/gallery/logos_categorias_SVG/interiores.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_iñor.png",
        text: "Premio //<br>Iñor",
        title: "./assets/images/gallery/logos_categorias_SVG/grafico.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_yasuni.png",
        text: "Mención //<br>YASUNÍ. Cartografía sonora",
        title: "./assets/images/gallery/logos_categorias_SVG/grafico.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_señaletica.png",
        text: "Mención //<br>Señalética Cabanas de Albeida",
        title: "./assets/images/gallery/logos_categorias_SVG/grafico.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_identidadvisual.png",
        text: "Mención //<br>Identidad visual/familia tipográfica Museo de Arte Moderno de Buenos Aires",
        title: "./assets/images/gallery/logos_categorias_SVG/grafico.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_manufactura.png",
        text: "Premio //<br>Manufactura Nacional",
        title: "./assets/images/gallery/logos_categorias_SVG/integral.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_concentrico.png",
        text: "Mención //<br>Concéntrico, Festival Internacional de Arquitectura y Diseño de Logroño",
        title: "./assets/images/gallery/logos_categorias_SVG/integral.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_usule.png",
        text: "Mención //<br>Ù-SuLé. Casa cósmica talamanqueña",
        title: "./assets/images/gallery/logos_categorias_SVG/integral.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_sonidostextiles.png",
        text: "Mención //<br>Sonidos Textiles",
        title: "./assets/images/gallery/logos_categorias_SVG/integral.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_coleccion.png",
        text: "Premio //<br>Colección 002. Tierra",
        title: "./assets/images/gallery/logos_categorias_SVG/moda.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_arekuna.png",
        text: "Mención //<br>Serie Arekuna",
        title: "./assets/images/gallery/logos_categorias_SVG/moda.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_escapular.png",
        text: "Mención //<br>Tejido Escapular",
        title: "./assets/images/gallery/logos_categorias_SVG/moda.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_puna.png",
        text: "Mención //Puna Project",
        title: "./assets/images/gallery/logos_categorias_SVG/moda.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_natura.png",
        text: "Premio //<br>Natura",
        title: "./assets/images/gallery/logos_categorias_SVG/producto.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_frontera.png",
        text: "Mención //<br>Frontera: Enfriador portátil para agua",
        title: "./assets/images/gallery/logos_categorias_SVG/producto.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_aplicador.png",
        text: "Mención //Aplicador analgésico para recién nacido",
        title: "./assets/images/gallery/logos_categorias_SVG/producto.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_kit.png",
        text: "Mención //<br>KIT",
        title: "./assets/images/gallery/logos_categorias_SVG/producto.svg",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    }
];
// Remember to add same number of repeated images at end of array for filling purpouses

const images_path = "./assets/images/gallery/categorias/desktop/";
var image_elements_array = [];

const images_to_display = 8
const positioning_coeficient = 25;
const scrolling_coeficient = 1000 ;
const number_total_images = images.length;
const scrolling_height = scrolling_coeficient * number_total_images;

const gallery_element = document.querySelector('.gallery');
const scrolling_element = gallery_element.querySelector('.scroll_item ')

// Set scroll item height for scrolling
scrolling_element.style.height = scrolling_height + 'px'

images.map(function(image, index) {

    let image_path = image.path + image.name;
    let image_class = 'image' + index;
    let image_text = image.text;
    let image_title = image.title;

    let new_title = document.createElement('img');
    new_title.setAttribute('src', image_title);
    new_title.classList.add('image_title');
    let new_text = document.createElement('p');
    new_text.innerHTML = image_text;
    new_text.classList.add('image_text')
    let new_image = document.createElement('img');
    new_image.setAttribute('src', image_path);
    new_image.setAttribute('alt', 'image number ' + index);
    new_image.classList.add("image", image_class);
    let image_container = document.createElement('div');
    image_container.classList.add('image_container')
    image_container.append(new_image);
    image_container.append(new_title);
    image_container.append(new_text);


    if (index < images_to_display) new_image.classList.add('visible');
    if (index == 0) image_container.classList.add('text_visible');

    gallery_element.append(image_container);
    image_elements_array.push(new_image);

}, false);

// function to position visible elements
var position_elements = function(elements_array) {
    elements_array.map(function(element, index) {

        let move_coeficient = positioning_coeficient * index
        let move_x = move_coeficient * 4;
        let move_y = move_coeficient * -1.75;
        let move_z = move_coeficient * -1;

        gsap.to(element, {
            x: move_x,
            y: move_y,
            z: move_z
        });
    });
}

// initial positioning
position_elements(image_elements_array);

// Get elements for image scrolling
const get_elements = function() {
    let first_in_visible = gallery_element.querySelectorAll('.visible')[0];
    let last_in_visible = gallery_element.querySelectorAll('.visible')[5]
    let last_in_visible_index = image_elements_array.indexOf(last_in_visible);
    let item_one_plus = (last_in_visible_index < image_elements_array.length) ? image_elements_array[last_in_visible_index + 1] : image_elements_array[image_elements_array.length - 1];
    let first_in_visible_index = image_elements_array.indexOf(first_in_visible);
    let item_one_minus = (first_in_visible_index > 0) ? image_elements_array[first_in_visible_index - 1] : image_elements_array[0];

    let elements = {
        first: first_in_visible,
        one_plus: item_one_plus,
        last: last_in_visible,
        one_minus: item_one_minus
    }

    return elements;
}


//
//
//
// https://codepen.io/Sahil89/pen/zMvxmb
//
//
//

var controller = new ScrollMagic.Controller();

$('img.image').each(function() {

})

var timelineHeight = $('.timeline').height();

$('.timeline .timeline__item').each(function() {

    var timelineItemScene = new ScrollMagic.Scene({
        triggerHook: .5,
        triggerElement: this,
        duration: 200
    })
    .setClassToggle(this, 'timeline__item--active')
    .addIndicators()
    .addTo(scrollMagicController);

});

var gradientController = new ScrollMagic.Controller({globalSceneOptions: {duration: timelineHeight}});

var fadeGradientScene = new ScrollMagic
    .Scene({
        triggerHook: .5,
        triggerElement: '.timeline__item',
    })
    .setClassToggle('.gradient', 'gradient--active')
    // .addIndicators({
    //     'name': 'gradient'
    // })
    .addTo(gradientController);

// END OF TESTING




// identify first and 7+1 in row
// a && a+7