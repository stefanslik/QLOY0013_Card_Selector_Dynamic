var deal = {}
var size = "320x100";
var clicktag;

Enabler.setProfileId(1056760);
var devDynamicContent = {};

devDynamicContent.Always_On_FY16_V2_Sheet1 = [{}];
devDynamicContent.Always_On_FY16_V2_Sheet1[0]._id = 0;
devDynamicContent.Always_On_FY16_V2_Sheet1[0].id = 1;
devDynamicContent.Always_On_FY16_V2_Sheet1[0].reporting = "AO2-ADL-AKL-ECO";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].from = "ADL";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].to = "AKL";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].fare = "ECO";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].json = "https:\/\/qantasflightdeals.herokuapp.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=O&quantity=1&marketingRegionCode=au&departureAirportCodes=ADL&arrivalAirportCodes=AKL&callback=callbackFunction";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].exit = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].exit.Url = "https://www.qantas.com/travel/airlines/international-flight-specials/global/en?departureAirportCode=ADL&arrivalAirportCode=AKL&travelClass=ECO&ext_cam=au:ff:banner:AO2:redpl:alwaysonfy16";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].show_video = false;
devDynamicContent.Always_On_FY16_V2_Sheet1[0].show_price = false;
devDynamicContent.Always_On_FY16_V2_Sheet1[0].is_default = true;
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x50 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x50.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AKL-300x50.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_320x50 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_320x50.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AKL-320x50.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_320x100 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_320x100.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AKL-320x100.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_160x600 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AUK-160x600.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_160x600 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/DBX_160x600.mp4";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x250 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AUK-300x250.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_300x250 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/WLG_300x250.mp4";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x600 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AUK-300x600.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_300x600 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/DBX_300x600.mp4";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_728x90 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AUK-728x90.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_728x90 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/DBX_728x90.mp4";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_970x250 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].bkgd_970x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/AKL-970x250.jpg";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_970x250 = {};
devDynamicContent.Always_On_FY16_V2_Sheet1[0].video_970x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0026/DBX_970x250.mp4";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_300x50 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_320x50 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_320x100 = "See the world’s ancient capital";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_160x600 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_300x250 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_300x600 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_728x90 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame1_text_970x250 = "Visit the sky tower";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_300x50 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_320x50 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_320x100 = "The perfect mix of old and new";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_160x600 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_300x250 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_300x600 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_728x90 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame2_text_970x250 = "Fly to";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_300x50 = "Discover Taiwan";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_320x50 = "Fly from";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_320x100 = "Discover Athens";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_160x600 = "Fly from";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_300x250 = "<br>Discover Taiwan";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_300x600 = "Fly from";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_728x90 = "Fly from";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].frame3_text_970x250 = "Fly from";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].short_terms = "*Price based on payment at qantas.com by BPAY or POLi.";
devDynamicContent.Always_On_FY16_V2_Sheet1[0].tcs = "Prices are based on payment at qantas.com by BPAY or POLi. Prices are updated at regular intervals throughout the day and may be subject to change and limited availability. Travel is via Sydney. A fee applies for card payments. Visit www.qantas.com for travel dates, conditions, and applicable offer end dates.";
Enabler.setDevDynamicContent(devDynamicContent);


function politeInit() {
    clicktag = dynamicContent.Always_On_FY16_V2_Sheet1[0].exit.Url;
    backgroundImage = dynamicContent.Always_On_FY16_V2_Sheet1[0]['bkgd_' + size].Url;
    preloadAssets();

    $(".terms").html(dynamicContent.Always_On_FY16_V2_Sheet1[0].short_terms);
    $(".terms-txt").html(dynamicContent.Always_On_FY16_V2_Sheet1[0].tcs);

    if (dynamicContent.Always_On_FY16_V2_Sheet1[0].show_price)
        loadFeed();

    if (!dynamicContent.Always_On_FY16_V2_Sheet1[0].show_price || dynamicContent.Always_On_FY16_V2_Sheet1[0].is_default) {

        $('.bg-image-01').attr('src', dynamicContent.Always_On_FY16_V2_Sheet1[0]['bkgd_' + size].Url);
        $("#f3-copy").html("<h1></h1>");
        $("#f3-copy").addClass("backup");
        $(".button").addClass("backup");

        $("#f1-copy h1").html(dynamicContent.Always_On_FY16_V2_Sheet1[0]['frame1_text_' + size]);
        $("#f2-copy h1").html(dynamicContent.Always_On_FY16_V2_Sheet1[0]['frame2_text_' + size]);
        $("#f3-copy h1").html(dynamicContent.Always_On_FY16_V2_Sheet1[0]['frame3_text_' + size]);

        if (imagesLoaded) {
            initBanner();
        } else {
            si = setInterval(function() {
                if (imagesLoaded) {
                    initBanner();
                    clearInterval(si);
                }
            }, 250)
        }
    }
}

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}

function loadFeed() {

    $.ajax({
        type: 'GET',
        url: dynamicContent.Always_On_FY16_V2_Sheet1[0].json,
        async: false,
        contentType: "application/json",
        dataType: 'json',
        success: function (json) {

            $(".f3-1-copy").hide();

            deal = json.dealQueryResult.result.deals.deal;

            if (json.dealQueryResult.result.deals.numberOfDeals == "0") {
                backupAnimation();
                return;
            }

            var dest = deal.arrivalAirport.airport.displayName;

            $('.bg-image-01').attr('src', dynamicContent.Always_On_FY16_V2_Sheet1[0]['bkgd_' + size].Url);

            $("#f1-copy h1").html(dynamicContent.Always_On_FY16_V2_Sheet1[0]['frame1_text_' + size]);

            var f2 = dynamicContent.Always_On_FY16_V2_Sheet1[0]['frame2_text_' + size] + "<br />";

            if (dest.indexOf("(") > -1) {
                var s = dest.split("(")
                var a = s[0];
                var b = a + "(" + s[1];
                f2 += b;
            } else {
                f2 += dest;
            }

            var f3 = deal.arrivalAirport.airport.displayName;

            if (dest.indexOf("(") > -1 && dest.length >= 17) {
                var s = dest.split("(")
                var a = s[0];
                var b = a + "<br/>(" + s[1];
                f3 = b;
            } //else {
            //                f3 += dest;
            //            }

            $("#f2-copy h1").html(f2);
            $("#from").html(deal.departureAirport.airport.displayName + '<span class="arrow"> ></span>');
            //$("#destination").html(deal.arrivalAirport.airport['@attributes'].displayName);
            $("#destination").html(f3);
            $("#price").html(deal.price.currencySymbol + deal.price.value + "<span id='asterix-char'>*</span>");

            if (dest.length > 25) {
                $("#destination").css({
                    "fontSize": "14px",
                    "lineHeight": "14px"
                });
                $("#from").css("marginBottom", "1px");
               // $("#f3-copy").css("top", "4px");
            }

            if ($("#f2-copy h1").html().length >= 30) {
                $("#f2-copy h1").css({
                    "fontSize": "24px",
                    "line-height": "24px",
                    "top": "14px"
                })
            }

            if ($("#f2-copy h1").html().length >= 40) {
                $("#f2-copy h1").css({
                    "fontSize": "20px",
                    "line-height": "22px",
                    "top": "16px"
                })
            }

            if (dest.indexOf("(") > -1 && $("#destination").html().length >= 20) {
                $("#destination").css({
                    "fontSize": "14px",
                    "lineHeight": "14px"
                });
                //$("#f3-copy").css("top", "9px");
            } else if (dest.indexOf("(") > -1 && $("#destination").html().length < 20) {
                $("#destination").css({
                    "fontSize": "19px",
                    "lineHeight": "19px"
                });
                //$("#f3-copy").css("top", "8px");
            }

            if ($("#destination").html().length >= 12) {
                $("#destination").css({
                    "fontSize": "26px",
                    "lineHeight": "45px"
                })
            }

            if ($("#destination").html().length >= 17) {
                $("#destination").css({
                    "fontSize": "26px",
                    "lineHeight": "45px"
                })
            }

            if ($("#destination").html().length >= 17 && $("#destination").html().indexOf("(") > -1) {
                $("#destination").css({
                    "fontSize": "26px",
                    "lineHeight": "25px"
                })
                //$("#f3-1-copy").css({
                //    "top": "67px"
                //})
            }

            var rightcopy = "each,<br />";

            if (deal.travelClass.indexOf("ECO") > -1)
                rightcopy += "Economy<br />";

            if (deal.travelClass.indexOf("BUS") > -1)
                rightcopy += "Business<br />";

            if (deal.travelClass.indexOf("PRE") > -1)
                rightcopy += "Premium Economy<br />";

            if (deal.travelClass.indexOf("FIR") > -1)
                rightcopy += "First class<br />";

            if (deal.tripType.value == "O")
                rightcopy += "One-way";
            else
                rightcopy += "return";

            $("#price-right-copy").html(rightcopy);
            $(".terms").html(dynamicContent.Always_On_FY16_V2_Sheet1[0].short_terms);
            $(".terms-txt").html(dynamicContent.Always_On_FY16_V2_Sheet1[0].tcs);

            if (imagesLoaded) {
                initBanner();
            } else {
                si = setInterval(function () {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250)
            }
        },
        error: function (e) {
            backupAnimation();
        }
    });
}

function initBanner() {
    initCSS();
    startAnimation();
    adjustCopyLayout();
}
