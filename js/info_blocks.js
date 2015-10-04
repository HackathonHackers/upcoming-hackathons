/*global $, console*/

var img_src = "../hack-imgs/",
    date = new Date(),
    month = date.getMonth() + 1,
    day = date.getDate() + 1;

function hasPassed(date) {
    'use strict';
    var start_month = parseInt(date[0], 10),
        start_day = parseInt((parseFloat(date[0]) % 1) * 100, 10);
    if ((month > start_month) ||
            ((month === start_month) && (day > start_day))) {
        return "#past-hack";
    } else {
        return "#up-coming";
    }
}

function makeInfoBlock(hackathon) {
    'use strict';
    var name    = hackathon.name,
        hack_id = name.replace(/[\W_]+/g, '').toLowerCase(),
        link    = hackathon.link,
        img     = img_src + hackathon.img,
        date    = hackathon.date,
        dateStr = date[0],
        loc     = hackathon.location,
        
        pastOrNah = hasPassed(date),
        
        $hack_card,
        $hack_card_img;
    
    
    
    $(pastOrNah + ".info-cards").append(
        "<div id='" + hack_id + "' "
            + "class='info-block-card'>"
            + "<div id='block-img'>"
            + "<img class='info-block' "
            + "src='" + img + "'/>"
            + "</div></div>"
    );
    
    $hack_card = $("#" + hack_id + ".info-block-card");
    
    $hack_card_img = $hack_card.find("#block-img img");
    
    if (($hack_card_img.width() / $hack_card_img.height()) > (240 / 300)) {
        $hack_card_img.parent().addClass("portrait");
    } else {
        $hack_card_img.parent().addClass("landscape");
    }
    
    $hack_card.append(
        "<div id='info' class='info-block'></div>"
    );
    
    $hack_card = $hack_card.find("#info");
    
    $hack_card.append(
        "<div id='name'>" + name + "</div>"
    );
    
    if (date.length === 2) {
        dateStr += (" - " + date[1]);
    }
    
    $hack_card.append(
        "<div id='date'>" + dateStr + "</div>"
    );
    
    $hack_card.append(
        "<div id='loc'>" + loc + "</div>"
    );
    
    $("#" + hack_id).wrap($('<a>', {
        href: link
    }));
}