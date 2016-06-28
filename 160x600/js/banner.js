// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    //Bring in listeners i.e. if a user clicks or rollovers
    addListeners();

    preloadimages(["base-image-01.jpg","red-circle.svg","white-shape.svg", "blue-shape.svg"]).done(function (images) {
        console.log("loaded");

        initCSS();
        startAnimation();
    })

    console.log('hello');
});


//Add Event Listeners
addListeners = function () {
    //	bgExit.addEventListener('click', bgExitHandler, false);
}



function initCSS() {

    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 0, scaleX: 0.4, scaleY: 0.4, x: 96, y: 65, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.4, scaleY: 0.4, x: -2235, y: -1300, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 190, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#ff-logo"), {y:50});

    // SET STARTING POSITIONS FOR ELEMENTS

    TweenLite.set($("#white-shape"), {scaleX: 1.28, scaleY: 1.28, rotation: 50,  x: 330, y: -300});
    TweenLite.set($("#red-circle"), {scaleX: 4, scaleY: 4,x:-250,y:195, alpha:0.9});
    TweenLite.set($("#card-wrapper"), {alpha:0, perspective:800});
    TweenLite.set($(".card"), {transformStyle:"preserve-3d"});
    TweenLite.set($(".back"), {rotationY:-180});
    TweenLite.set($(".terms-wrapper"), {y:120});
    TweenLite.set($([".back", ".front"]), {backfaceVisibility:"hidden"});

}

//------------------------------- MAIN ANIMATION -------------------------------


function startAnimation() {

    $(".container").show();
    $(".loader").hide();


    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();


    var tl = new TimelineLite();


    //FRAME 01

    //tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0")
    tl.to(".shapes", 2, {rotation: -10, transformOrigin: "50% 50%"}, "0")
    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.5, scaleY: 1.5, x: -2070, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#blue-shape", 1, {rotation: -10, scaleX: 1.5, scaleY: 1.5, x: 13, y: 177, ease: Sine.easeInOut}, ".3")
    tl.from("#f1-copy", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "1.6")
    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 3, scaleY: 5, x: -1850, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .6, {rotation: -70, scaleX: 3, scaleY: 3, x: -160, y: 485, ease: Sine.easeInOut}, "1.4")

    //FRAME 02
    tl.to("#f1-copy", 1, {autoAlpha:0, ease: Sine.easeOut}, "4.4")

    //FRAME 03
    tl.from("#f3-copy", 1.5, {autoAlpha:0,y:-15, ease: Sine.easeOut}, "5.7")
        tl.from(".button", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "5.7")
    tl.from("#f2-copy", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "6.8")
    tl.to("#f2-copy", 1, {autoAlpha:0, ease: Sine.easeOut}, "6.8")
    tl.to("#white-shape", 3, { x: 170, y: -98, rotation: 20,ease: Sine.easeInOut}, "4.8")
    tl.to("#ff-logo", 2, {y: 0,ease: Sine.easeInOut}, "4.8")
    tl.to(".terms-wrapper", 2, {y:0,ease: Sine.easeInOut}, "4.8")
    tl.to("#red-circle", 3, {alpha:0.7,scaleX: 1, scaleY: 1,x:5,y:99,ease: Sine.easeInOut}, "4.8")
    tl.from("#anz-logo", 1, {autoAlpha:0, ease: Sine.easeOut}, "6.8")

    tl.to("#card-wrapper", 0.4, {alpha:1,ease: Sine.easeOut}, "5.8")
    tl.to(".card", 2, {rotationY:180, ease:Back.easeOut}, "8.8")
    tl.to("#white-shape", 2, {rotation: 160,x:-90,y:-60,ease: Sine.easeInOut}, "8.8")

    //TESTING - goto specific time of animation
//tl.seek(8);
//tl.pause(8)
}

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}



bgExitHandler = function (e) {
    //Call Exits
    //	Enabler.exit('HTML5_Background_Clickthrough');
}
