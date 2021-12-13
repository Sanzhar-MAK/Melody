$(document).ready(function () {
    let currentFloor = $(".counter").text();

    const floorPath = $(".home-image path");
    const counterUp = $(".counter-up");
    const counterDown = $(".counter-down");

    const modal = $(".modal");
    const modalCloseButton = $(".modal-close-button");
    const buttonPrimary = $(".button-primary");
    const flatPath = $(".modal-image path");
    const flatLink = $(".flat-item a");

    const modalDialog = $(".modal-dialog");

    const toggleModal = () => {
        modal.toggleClass("is-open");
    }

    floorPath.on('mouseover', (e) => {
        currentFloor = $(e.target).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
    });


    flatPath.on('mouseover', e => {
        currentFlat = $(e.target).data("flat");
        if ($(".flat-item a:contains('" + currentFlat + "')")) {
            currentFlatLink = $(".flat-item a:contains('" + currentFlat + "')")
            flatLink.removeClass("flat-link-active");
            currentFlatLink.toggleClass("flat-link-active");
        }
    })

    flatPath.on('mouseout', () => {
        flatLink.removeClass("flat-link-active")
    });

    flatLink.on('mouseover', e => {
        currentFlatPosition = $(e.target).data("flat-link");
        flatPath.removeClass("flat-active");
        $(`[data-flat=${currentFlatPosition}]`).toggleClass("flat-active");
    })

    flatLink.on('mouseout', () => {
        flatPath.removeClass("flat-active");
    });


    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    buttonPrimary.on('click', toggleModal);

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