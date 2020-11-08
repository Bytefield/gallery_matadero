// Globals
var coeficient_rotation_y = 25;
var coeficient_rotation_x = -5;

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
// END ↑ ↑ ↑


// Detect position of clicked element

// START ↓ ↓ ↓
var detect_component = (function() {
    let image_array = [...document.querySelectorAll('.image')];
    image_array.map((element)=>{
        element.addEventListener('click', (event)=> {
            let clicked_element = event.target;
            let clicked_group = clicked_element.closest('.group');
            // group has class front? stay : add class front
            if (!clicked_group.classList.contains('front')) {
                document.querySelector('.front').classList.remove('front');
                clicked_group.classList.add('front');
            }
        })
    })
})()
// END ↑ ↑ ↑

// Reposition camera on click

document.addEventListener('mousemove', rotate_gallery);
