// Globals
var coeficient_rotation_y = 15;
var coeficient_rotation_x = -5;

var left_group = document.querySelector('.left');
var center_group = document.querySelector('.center');
var right_group = document.querySelector('.right');
var groups_array = [...document.querySelectorAll('.group')];

var window_width = window.innerWidth;
var window_center_x = window.innerWidth / 2;
var window_height = window.innerHeight;
var window_center_y = window.innerHeight / 2;

// Gallery rotation function

// START ↓ ↓ ↓
var rotate_gallery = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    let rotation_angle_Y = coeficient_rotation_y * (x - window_center_x)/window_width;
    let rotation_angle_X = coeficient_rotation_x * (y - window_center_y)/window_height;

    gsap.to('.scene', {
        rotateY: rotation_angle_Y ,
        rotateX: rotation_angle_X
    })
}

document.addEventListener('mousemove', rotate_gallery);
// END ↑ ↑ ↑

// Detect position of clicked element and reposition

// START ↓ ↓ ↓
var detect_component = (function() {

    let image_array = [...document.querySelectorAll('.image')];

    image_array.map((element)=>{
        element.addEventListener('click', (event)=> {
            let clicked_element = event.target;
            let clicked_group = clicked_element.closest('.group');
            // group has class active? stay : add class active
            if (!clicked_group.classList.contains('active')) {
                document.querySelector('.active').classList.remove('active');
                clicked_group.classList.add('active');
            } else {
                reposition(clicked_group);
            }
        })
        element.addEventListener('mouseenter', function(event) {
            let image = event.target;
            image.classList.add('hovered');
        });
        element.addEventListener('mouseleave', function(event) {
            let image = event.target;
            image.classList.remove('hovered');
        });
    })
})()
// END ↑ ↑ ↑

// Reposition camera on click

// START ↓ ↓ ↓
var reposition = function(element) {

    let modifier_x = 0;
    let modifier_z = 0;
    let time_line = new TimelineMax();

    if (element.classList.contains('left')) {
        modifier_x = 1;
        modifier_z = 1;
    } else if (element.classList.contains('right')) {
        modifier_x = -1;
        modifier_z = 1;
    } else {
        modifier_x = 0;
        modifier_z = 0;
    }

    time_line  .to('.scene', {
            x: 450 * modifier_x
        })
        .to('.scene', {
            z: 800 * modifier_z
        })
}
// END ↑ ↑ ↑