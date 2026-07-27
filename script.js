window.addEventListener("load", addTabFocus);

function addTabFocus() {
    console.log("Adding tabindex");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", function() {
            console.log("Mouse over image");
        });

        images[i].addEventListener("mouseleave", function() {
            console.log("Mouse left image");
        });

        images[i].addEventListener("focus", function() {
            console.log("Focused image");
        });

        images[i].addEventListener("blur", function() {
            console.log("Lost focus image");
        });
    }
}