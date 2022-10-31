"use strict";

const hands = document.querySelector(".hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");


function rotate(element, degrees) {
    degrees = (degrees + 90) % 360;

    // to prevent abruptness in animation
    if (degrees === 0) {
        hands.style.transitionProperty = null;
        setTimeout(() => {
            hands.style.transitionProperty = "all 0.05s";
            hands.style.transitionTimingFunction = "cubic-bezier(.64, 0, .25, 2.59)";
        }, 1000);
    }
    element.style.transform = `rotate(${degrees}deg)`;
}

function updateDate() {
    const date = new Date();
    rotate(hourHand, 30 * date.getHours() + 0.5 * date.getMinutes());
    rotate(minHand, 6 * date.getMinutes());
    rotate(secondHand, 6 * date.getSeconds());
}

setInterval(updateDate, 1000);