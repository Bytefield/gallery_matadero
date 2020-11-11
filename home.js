// Globals
const coeficient_rotation_y = 30;

const scene = document.querySelector('.scene');
const groups_array = [...document.querySelectorAll('.group')];
const left_group = document.querySelector('.left');
const center_group = document.querySelector('.center');
const image_container = [...document.querySelectorAll('.image_container')];
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const images_elements_array = [...document.querySelectorAll('img')];


const window_width = window.innerWidth;
const window_center_x = window.innerWidth / 2;
const window_height = window.innerHeight;
const window_center_y = window.innerHeight / 2;

gsap.to(one, 0.1, {
    x: -400,
    z: -900,
    rotateY: 25
})

gsap.to(two, 0.1, {
    x: -200,
    z: -1200,
    rotateY: 25
})

gsap.to(three, 0.1, {
    x: 0,
    z: -1500,
    rotateY: 0
})

gsap.to(four, 0.1, {
    x: -100,
    z: 0,
    rotateY: 25
})

gsap.to(five, 0.1, {
    x: 150,
    z: 200,
    rotateY: 0
})

gsap.to(six, 0.1, {
    x: 500,
    z: 0,
    rotateY: -25
})

gsap.to(left_group, 0.1, {
    left: 0
})

gsap.to(center_group, 0.1, {
    left: "40%"
})

// Gallery rotation function
var rotate_gallery = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    let rotation_angle_Y = coeficient_rotation_y * (x - window_center_x)/window_width;

    gsap.to(scene, {
        rotateY: rotation_angle_Y
    })
}

document.addEventListener('mousemove', rotate_gallery);

// zoom image on click when active group
var open_image = function(element) {

    let element_parent = element.parentElement;
    let target_element = element.parentElement;
    let parent_group = element.closest('.group');

    if(element_parent.classList.contains('clicked')) {
        element_parent.classList.remove('clicked');
    } else {
        element_parent.classList.add('clicked');
    }

    let element_not_clicked = scene.querySelectorAll('.image_container:not(.clicked)');

    let element_tl = new TimelineMax({ paused: true});
    let element_not_clicked_tl = new TimelineMax({ paused: true});
    let target_element_tl = new TimelineMax({ paused: true});
    let parent_group_tl = new TimelineMax({ paused: true});
    let scene_tl = new TimelineMax({ paused: true});

    element_tl.to(element, 0.5, {
        width: "100vw",
        height: "100vh",
        top: 0,
        left:0,
        rotateY: 0
    })

    element_not_clicked_tl.to(element_not_clicked, 0.5, {
        autoAlpha: 0
    })

    target_element_tl.to(target_element, 1, {
        rotateY: 0,
        x: 0,
        y: 0,
        z: 0
    })

    parent_group_tl.to(parent_group, 1, {
        left: 0
    })

    scene_tl.to(scene, 1, {
        top: 0,
        rotateY: 0,
        x: 0,
        z: 0
    })

    element_tl.play();
    element_not_clicked_tl.play();
    target_element_tl.play();
    parent_group_tl.play();
    scene_tl.play();
    document.removeEventListener('mousemove', rotate_gallery)
}

// Detect position of clicked element and reposition
var detect_component = (function() {

    let image_array = [...document.querySelectorAll('.group img')];

    image_array.map((element)=>{
        element.addEventListener('click', (event)=> {

            let clicked_element = event.target;
            let clicked_group = clicked_element.closest('.group');

            if (clicked_group.classList.contains('active')) {
                open_image(clicked_element);
            } else {
                document.querySelector('.active').classList.remove('active');
                clicked_group.classList.add('active');
                reposition(clicked_group);
            }
        })
    })
})()

// Reposition camera on click
var reposition = function(element) {

    let modifier_x = 0;
    let modifier_z = 0;
    let modifier_rotation = 0;
    let time_line = new TimelineMax();

    if (element.classList.contains('left')) {
        modifier_x = 1;
        modifier_z = 1;
        modifier_rotation = -1;

    } else {
        modifier_x = 0;
        modifier_z = 0;
        modifier_rotation = 1;
    }

    time_line
        .to('.scene', 1, {
            ease: Sine.easeOut,
                x: 250 * modifier_x
            })
        .to('.scene', 1, {
            ease: Sine.easeOut,
            z: 2000 * modifier_z,
            rotateY: 20 * modifier_rotation
        })
}

const close_button = [...document.querySelectorAll('.close_button')];
close_button.map(function(element) {
    element.addEventListener('click', function() {
        position_elements();
    })
});

// Getting all elements in their original position
const position_elements = function() {

    gsap.to(one, 0.1, {
        x: -400,
        z: -900,
        rotateY: 25
    })

    gsap.to(two, 0.1, {
        x: -200,
        z: -1200,
        rotateY: 25
    })

    gsap.to(three, 0.1, {
        x: 0,
        z: -1500,
        rotateY: 0
    })

    gsap.to(four, 0.1, {
        x: -100,
        z: 0,
        rotateY: 25
    })

    gsap.to(five, 0.1, {
        x: 150,
        z: 200,
        rotateY: 0
    })

    gsap.to(six, 0.1, {
        x: 500,
        z: 0,
        rotateY: -25
    })

    gsap.to(left_group, 0.1, {
        left: 0
    });

    gsap.to(center_group, 0.1, {
        left: "40%"
    });

    gsap.to(images_elements_array, 0.1, {
        width: 350,
        height: "auto"
    });

    gsap.to(image_container, 0.1, {
        autoAlpha: 1
    });

    image_container.map(function(element) {
        if (element.classList.contains('clicked')) element.classList.remove('clicked');
    });

    gsap.to(scene, 0.1, {
        top: "calc(50% - 125px)"
    });

    document.addEventListener('mousemove', rotate_gallery);
}