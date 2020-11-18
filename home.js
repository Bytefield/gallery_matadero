// Globals
const window_width = window.innerWidth;
const window_center_x = window.innerWidth / 2;
const window_height = window.innerHeight;
const window_center_y = window.innerHeight / 2;

const coeficient_rotation_y = 30;

const scene = document.querySelector('.scene');
const groups_array = [...document.querySelectorAll('.group')];
const image_container = [...document.querySelectorAll('.image_container')];

var last_clicked_element = null;

const elements_object = {
    groups: {
        left: {
            node: document.querySelector('.left'),
            position: {
                left: "-30%"
            }
        },
        center: {
            node: document.querySelector('.center'),
            position: {
                left: "57.5%"
            }
        },
        scene: {
            node: document.querySelector('.scene'),
            position: {
                rotateX: 10
            }
        }
    },
    image_containers: {
        one: {
            node: document.querySelector('.one'),
            position: {
                x: -400,
                y: 0,
                z: -900,
                rotateY: 25
            }
        },
        two: {
            node: document.querySelector('.two'),
            position: {
                x: -200,
                y: 0,
                z: -1200,
                rotateY: 25
            }
        },
        three: {
            node: document.querySelector('.three'),
            position: {
                x: 0,
                y: 0,
                z: -1500,
                rotateY: 0
            }
        },
        four: {
            node: document.querySelector('.four'),
            position: {
                x:-500,
                y: 0,
                z: -200,
                rotateY: 25
            }
        },
        five: {
            node: document.querySelector('.five'),
            position: {
                x: -100,
                y: -25,
                z: -50,
                rotateY: 0
            }
        },
        six: {
            node: document.querySelector('.six'),
            position: {
                x: 400,
                y: 0,
                z: -200,
                rotateY: -25
            }
        }
    }
}

// Initital position
const one = elements_object.image_containers.one;
const two = elements_object.image_containers.two;
const three = elements_object.image_containers.three;
const four = elements_object.image_containers.four;
const five = elements_object.image_containers.five;
const six = elements_object.image_containers.six;
const left = elements_object.groups.left;
const center = elements_object.groups.center;

const el_to_position = [one, two, three, four, five, six, left, center]

const position_elements = function(element) {
    gsap.to(element.node, 0.1, {
        x: element.position.x || 0,
        y: element.position.y || 0,
        z: element.position.z || 0,
        rotateY: element.position.rotateY || 0,
        left: element.position.left || 0
    })

    if(last_clicked_element) {
        let target_element = last_clicked_element.parentElement.parentElement;
        let scene_set = false
        if(target_element.classList.contains('left') && !scene_set) {
            gsap.to(scene, {
                x: 600,
                z: 1100
            });
            scene_set = true;
        }
    } else {
        gsap.to(scene, {
            x: 600,
            z: 900
        });
        scene_set = true;
    }
};

el_to_position.map(function(element) {
    position_elements(element);
});

// Function to toggle classes
// @element: (type -> node) element to toggle class in
// @class: (type -> string) class to be toggled
const toggle_class = function(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

var elements_not_clicked;
var is_clicked;

// zoom image on click when active group
var open_image = function(element) {
    if(!is_clicked) {
        let element_parent = element.parentElement;
        let closest_group = element.closest('.group');

        toggle_class(element_parent, 'clicked');

        elements_not_clicked = scene.querySelectorAll('.image_container:not(.clicked)');

        const el_to_reposition = [scene, closest_group, element_parent, elements_not_clicked, element];

        let element_parent_tl = new TimelineMax({ paused: true});
        let element_tl = new TimelineMax({ paused: true});
        let elements_not_clicked_tl = new TimelineMax({ paused: true});
        let closest_group_tl = new TimelineMax({ paused: true});
        let scene_tl = new TimelineMax({ paused: true});

        element_parent_tl.to(element_parent, 0.5, {
            height: "100vh",
            width: "100vw",
            rotateY: 0,
            x: 0,
            y: 0,
            z: 0
        })

        element_tl.to(element, 0.5, {
            width: "70vw",
            top: 0,
            left:0,
            rotateY: 0
        })
        Array.from(elements_not_clicked).map(function(element) {
            toggle_class(element, 'hidden');
        });
        // toggle_class(elements_not_clicked, 'hidden');

        closest_group_tl.to(closest_group, 1, {
            left: 0
        })

        scene_tl.to(scene, 1, {
            top: 0,
            rotateY: 0,
            x: 0,
            z: 0
        })

        if (!element.classList.contains('is_zoomed')) {

            element_parent_tl.play();
            element_tl.play();
            elements_not_clicked_tl.play();
            closest_group_tl.play();
            scene_tl.play();

            document.removeEventListener('mousemove', rotate_gallery)
            toggle_class(element, 'is_zoomed');

            element.addEventListener('click', function() {
                let url = element.getAttribute('data-url') || '#';
                let link = document.createElement('a');
                link.setAttribute('href', url);
                link.setAttribute('target', "_parent");
                link.click();
                // window.open(url, '_self');
            });

        }

        is_clicked = true;
    }
}

// Detect position of clicked element for reposition (IIFE)
var detect_component = (function() {

    let image_array = [...document.querySelectorAll('.group img')];

    image_array.map((element)=>{
        element.addEventListener('click', (event)=> {

            let clicked_element = event.target;
            let clicked_group = clicked_element.closest('.group');

            last_clicked_element = clicked_element;

            if (clicked_group.classList.contains('active')) {
                open_image(clicked_element);
            } else {
                document.querySelector('.active').classList.remove('active');
                toggle_class(clicked_group,'active');
                reposition(clicked_group);
            }
        })
    })
})()

// Reposition camera function
var reposition = function(element) {

    let modifier_x = 0,
        modifier_z = 0,
        modifier_rotation = 0,
        time_line = new TimelineMax();

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
                x: 600 * modifier_x
            })
        .to('.scene', 1, {
            ease: Sine.easeOut,
            z: 1400 * modifier_z,
            rotateY: 20 * modifier_rotation
        })
}

// Gallery rotation function
var rotate_gallery = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    let is_left_active = false
    if(left.node.classList.contains('active')) is_left_active = true;
    let element_modifier = is_left_active ? 0.01 : 1;

    let rotation_angle_y = 0;
    let translation_x = 0;
    let translation_z = 0;
    if (is_left_active) {
        translation_x = 700;
        translation_z = 1100;
        rotation_angle_y = coeficient_rotation_y * (x - window_center_x)/window_width;
    } else {
        translation_x = (window_center_x - x)/3
        rotation_angle_y = coeficient_rotation_y * (x - window_center_x)/window_width;
    }

    gsap.to(scene, {
        x: translation_x || 0,
        z: translation_z || 0,
        rotateY: rotation_angle_y || 0
    })
}

document.addEventListener('mousemove', rotate_gallery);

const close_button = [...document.querySelectorAll('.close_button')];
close_button.map(function(element) {
    element.addEventListener('click', function() {
        // reposition(element);
        el_to_position.map(function(element) {
            position_elements(element);
        });
        Array.from(elements_not_clicked).map(function(element) {
            toggle_class(element, 'hidden');
        });
        let zoomed_element = document.querySelector('.is_zoomed');
        gsap.to(zoomed_element, {
            width: "45vw"
        })
        let zoomed_parent = zoomed_element.parentElement;
        zoomed_parent.style.width = "unset";
        zoomed_parent.style.height = "unset";
        scene.style.top = "10vh";
        toggle_class(zoomed_element, "is_zoomed");
        toggle_class(zoomed_parent, "clicked");
        // zoomed_element.removeEventListener('click');
        document.addEventListener('mousemove', rotate_gallery);
        is_clicked = false;
    })
});