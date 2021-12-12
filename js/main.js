$(document).ready(function () {
    let currentFloor = $(".counter").text();

    const floorPath = $(".home-image path");
    const counterUp = $(".counter-up");
    const counterDown = $(".counter-down");

    floorPath.on('mouseover', (e) => {
        currentFloor = $(e.target).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
    });

    counterUp.on('click', () => {
        if (currentFloor < floorPath.last().data("floor")) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGroupping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    counterDown.on('click', () => {
        if (currentFloor > floorPath.first().data("floor")) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGroupping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })




});