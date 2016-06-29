var tl;
var imagesLoaded = false;

$(document).ready(function(){
  preloadimages(["shape-mask.svg", "shape-red.svg", "shape-blue.svg","card-shadow.png","black-visa-back.png","black-visa-front.png","shape-red-base.svg","white-shape.svg","logo-ff.svg"]).done(function (images) {

      // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
       initCSS();
       startAnimation();
       adjustCopyLayout();

      // TERMS & CONDITIONS FUNCTIONALITY / COMMENT OUT IF NOT NEEDED
      $(".overlay-close").click(function () {
          $(".overlay").hide();
          $(".terms-wrapper").show();
      });

      $(".overlay-trigger").click(function () {
          $(".terms-wrapper").hide();
          $(".overlay").show();
      });

      imagesLoaded = true;

  })
})




function initCSS() {

    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 10, scaleX: 0.3, scaleY: 0.3, x: 76, y: 65, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .9, rotation: -20, scaleX: 0.3, scaleY: 0.3, x: 130, y: 73, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.2, scaleY: 0.2, x: -2235, y: -1275, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 10, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#white-shape"), {x:-90,rotation: -15});
    TweenLite.set($("#white-shape-2"), {x:80,rotation: -15});
    TweenLite.set($("#card-wrapper"), {x:80, perspective:800});
    TweenLite.set($(".card"), {transformStyle:"preserve-3d"});
    TweenLite.set($(".back"), {rotationY:-180});
    TweenLite.set($(".logos"), {x:-80});
    TweenLite.set($(["#impact-copy01", "#f2-copy", "#f3-copy"]), {alpha:0});
    TweenLite.set($([".back", ".front"]), {backfaceVisibility:"hidden"});



}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
//    if($("#destination").text().length > 14){
//        $("#destination").css("fontSize","24px");
//    }
    //RE-POSITION CTA BUTTON DEPENDING ON WIDTH OF TEXT LOCKUP
    //var f3CopyWidth = $('#f3-copy').outerWidth(true);
    //var ctaBtnOffset = 20 + f3CopyWidth;
    //$(".button").css("left",ctaBtnOffset);

}



// MAIN ANIMATION --------------------------------------------------------------------
function backupAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    initCSS();
    $("#f1-copy h1").css({"font-size": "36px", "line-height": "40px", "top": "12px"});
    $("#f1-copy").css({"z-index": "4960", "width":"728px", "x":"-100px"});
    $(".button").css({"top": "15px", "right": "15px"})
    $(".container").show();
    $(".loader").hide();
    $("#f3-copy").hide();
    $("#f2-copy").hide();
    //$(".terms-wrapper").hide();
    $("#f2-2-copy").hide();
    $("#f1-copy h1").html("Fly with<br /> Qantas")


    // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite
    tl = new TimelineLite();

    //FRAME 01
    tl.to(".shapes", 2, {rotation: -160, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.5, scaleY: 1.5, x: 231, y: 55, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1, scaleY: 1, x: -4, y: 117, ease: Sine.easeInOut}, ".3")
    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 4.2, scaleY: 4.2, x: -1650, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .7, {rotation: -230, scaleX: 1.5, scaleY: 1.5, x: -260, y: 120, ease: Sine.easeOut}, "1.45")
    tl.to("#red-shape", .7, {rotation: 0, scaleX: 4, scaleY: 4, opacity: 0, x: 495, y: 75, ease: Sine.easeInOut}, "1.45")
    tl.from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "1.7")
    tl.from(".bg-image", 2, {alpha: 0, ease: Sine.easeOut}, "0")

    //FRAME 02

    tl.to("#blue-shape", .7, {x: -400, y: 80, ease: Sine.easeIn}, "2.5")
    tl.to("#red-shape", .7, {x: 895, y: 75, ease: Sine.easeIn}, "2.5")
    tl.to(".bg-image-01", 1.5, {alpha: 0, ease: Sine.easeOut}, "4.5")
    //tl.to("#video", 1.5, {alpha: 0, ease: Sine.easeOut}, "4.5")
    tl.from(".logos", 2, {alpha: 0, ease: Sine.easeOut}, "2.5")
    tl.to("#red-curved", 2, {alpha: 0, ease: Sine.easeOut}, "4")



    //FRAME 03

    tl.to("#f1-copy", 1, {x: -100}, "5")
//    tl.from("#f3-copy", 1, {alpha: 0, y: -10, ease: Sine.easeOut}, "10.5")
    tl.to("#f1-copy", 1, {alpha: 1, y: 0, ease: Sine.easeOut}, "6.5")
    tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "6.5")
    tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "3")

}

function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();

    tl = new TimelineLite();

    //FRAME 01

    tl.to(".shapes", 2, {rotation: -160, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.5, scaleY: 1.5, x: 231, y: 55, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1, scaleY: 1, x: -4, y: 117, ease: Sine.easeInOut}, ".3")
    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 4.2, scaleY: 4.2, x: -1650, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .7, {rotation: -230, scaleX: 0.6, scaleY: 0.6, x: -49, y: 220, ease: Sine.easeOut}, "1.45")
    tl.to("#red-shape", .7, {rotation: 0, scaleX: 4, scaleY: 4, opacity: 0, x: 575, y: -175, ease: Sine.easeInOut}, "1.45")
  //  tl.from("#red-shape-base", 1, {autoAlpha: 0, xPercent: -50, ease: Sine.easeOut}, "1.4")
    tl.from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "1.1")
    tl.from(".bg-image", 2, {alpha: 0, ease: Sine.easeOut}, "0")

    //FRAME 02
    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "4.7")
    tl.to("#red-shape-base", 1.5, {y: -40,x:60, ease: Sine.easeOut}, "5.2")
    tl.from(".terms-wrapper", 1.5, {autoAlpha: 0, ease: Sine.easeOut}, "5.2")
//    tl.to("#red-shape", .7, {x: 25, y: 375, ease: Sine.easeIn}, "4.5")
    tl.to(".terms-wrapper", .5, {alpha: 0, ease: Sine.easeOut}, "8.5")
    tl.to(".ff-logo-mono", .5, {alpha: 0, ease: Sine.easeOut}, "8.5")
    //tl.from("#f3-1-copy", 1, {autoAlpha: 0, ease: Sine.easeOut}, "9");

    //FRAME 03
    tl.to(["#impact-copy01", "#f2-copy"], 1, {alpha: 1, ease: Sine.easeOut}, "9")
    tl.to("#red-shape-base", 2, {scale:.4, y: -220, ease: Sine.easeOut}, "9")
    tl.to(".bg-image-01", 2, {alpha: 0, ease: Sine.easeOut}, "9")
    tl.to("#card-wrapper", 2, {x:0, ease: Sine.easeOut}, "9")
    tl.to("#white-shape", 2, {x:0, alpha:1,ease: Sine.easeOut}, "9")
    tl.to("#white-shape-2", 2, {x:0, rotation:0,ease: Sine.easeOut}, "9")
    tl.to(".logos", 2, {x:0, ease: Sine.easeOut}, "9")
    tl.to(".card", 2, {rotationY:180, ease:Back.easeOut}, "12")
    tl.to("#white-shape-2", 2, {scale:.9, rotation:-14,x:9,y:-28,scaleX:1.1,scaleY:0.8,ease: Sine.easeOut}, "12")
    tl.to(["#impact-copy01", "#f2-copy"], 1, {alpha: 0, ease: Sine.easeOut}, "12")
    tl.to("#f3-copy", 1, {alpha: 1, ease: Sine.easeOut}, "12")
    // tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "9")
    tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "9")

    // TESTING - goto specific time of animation
  //  tl.seek(13);
  //tl.pause(3.1)
}


// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------


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
