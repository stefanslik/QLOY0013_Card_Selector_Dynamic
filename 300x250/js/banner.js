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

    preloadimages(["shape-blue.svg","red-circle.svg","shape-red.svg","ANZ-logo.svg","logo-ff.svg","black-visa-front.png","black-visa-back.png"]).done(function (images) {
        console.log("loaded");

        initCSS();
        startAnimation();
    })
});


//Add Event Listeners
addListeners = function () {
    //	bgExit.addEventListener('click', bgExitHandler, false);
}


function initCSS() {

    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .8, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#black-circle-container"), {rotation:40, scaleX: .8, scaleY: .8});
    // TweenLite.set($("#red-shape"), {rotation:10, x: -158, y: -71, overwrite: "none", force3D: false});
    // TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    // TweenLite.set($(".shapes"), {rotation: 220, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#white-shape"), {scaleX: 1, scaleY: 1});
    TweenLite.set($("#red-shape-3"), {scaleX: 1.5, scaleY: 1.5});
    TweenLite.set($("#red-circle"), {alpha:0,x:250});
    TweenLite.set($("#card-wrapper"), {alpha:0, perspective:800});
    TweenLite.set($(".card"), {transformStyle:"preserve-3d"});
    TweenLite.set($(".back"), {rotationY:-180});

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

    tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")

    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -10, scaleX: 1, scaleY: 1, x: 211, y: 35, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.1, scaleY: 1.1, x: 5, y: 130, ease: Sine.easeInOut}, ".3")

    tl.to("#mask-shape", .5, {rotation: 0, scaleX: 2.3, scaleY: 2.3, x: -1950, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -100, y: 240, ease: Sine.easeIn}, "1.4")
    tl.to("#red-shape", .4, {rotation: -20, scaleX: 2.5, scaleY: 2.5, x: 330, y: -95, ease: Sine.easeIn}, "1.4")
    tl.from("#black-circle-container", 2.1, {scaleX:.1, scaleY:.1, x: 60, autoAlpha:.8, rotation:250, ease: Sine.easeInOut}, "0")
    tl.from("#black-circle", .6, {scaleX:.5, scaleY:.5, y: -600, ease: Sine.easeInOut}, "0")
    tl.to("#red-shape-3", 1, {y:-109, ease: Sine.easeOut}, "1")
    tl.from("#f1-copy", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "1.2")
    tl.from(".terms-wrapper", 1, {autoAlpha:0, ease: Sine.easeOut}, "2.5")



    //FRAME 02
    tl.to("#f1-copy", 1, {autoAlpha:0, ease: Sine.easeOut}, "4.4")
    tl.to("#black-circle-container", 2, {scaleX:1.4, scaleY:1.4, x: 80, y: -50, ease: Sine.easeInOut}, "4.4") //???????????
    tl.from("#f2-copy", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "5.7")
    tl.to("#f2-copy", 1, {autoAlpha:0, ease: Sine.easeOut}, "5.8")


    //FRAME 03
    tl.to("#red-shape-3", 1.5, {y:50, ease: Sine.easeOut}, "4.8")
    tl.from("#white-shape", 1.5, {rotation: 150, scaleX: 1, scaleY: 1, x: 150, y: -100, ease: Sine.easeOut}, "4.8")
    tl.to("#red-circle", 1.5, {alpha:1, x:0,ease: Sine.easeOut}, "4.8")
    tl.from("#anz-logo", 1, {autoAlpha:0, y:10, ease: Sine.easeOut}, "5.8")
    tl.from(".terms", 1, {alpha:0, ease: Sine.easeOut}, "5.8")
    tl.from(".button", 1, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "5.8")
    tl.to("#card-wrapper", 0.5, {alpha:1,ease: Sine.easeOut}, "5.8")
    tl.to(".card", 1.5, {rotationY:180, ease:Back.easeOut}, "7.8")
    tl.to("#white-shape", 1.5, {rotation: 10, ease: Sine.easeIn}, "7.0")
    tl.from("#f3-copy", 1.5, {autoAlpha:0, y:-15, ease: Sine.easeOut}, "5.7")
    tl.to("#red-circle-container", 1.5, {x: 0, y: 0, rotation:40, scaleX: .8, scaleY: .8, ease: Sine.easeInOut}, "9")
    tl.to("#red-shape", 1.5, {scaleX: 1, scaleY: 1, rotation:10, x: -158, y: -71, overwrite: "none", force3D: false, transformOrigin: "50% 50%", ease: Sine.easeInOut}, "9")


    //TESTING - goto specific time of animation
//    tl.seek(8);
  //  tl.pause(4)
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
