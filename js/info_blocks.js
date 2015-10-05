/*global $, console
*/

var img_src = "../hack-imgs/"; /* Path to hackathon image library */

function makeInfoBlock(hackathon, hasPassedOrNah) {
    'use strict';
    var name    = hackathon.name,
        hack_id = name.replace(/[\W_]+/g, '').toLowerCase(),
        link    = hackathon.link,
        img     = img_src + hackathon.img,
        dateStr = hackathon.date.join(' - '),
        loc     = hackathon.location,
        
        $hack_card,
        $hack_card_img,
        $hack_card_info;
    
    /**
     * Initializing the hack card div.
     **/
    $hack_card = $('<div>', {
        "id":    hack_id,
        "class": "info-block-card"
    });
    
    /**
     * Wraps the whole card in a hyperlink.
     * href=<link to the hackathon site>
     **/
    $hack_card.wrap($('<a>', {
        href: link
    }));
    
    /**
     * Initializing the hack card image div.
     **/
    $hack_card_img = $("<div>", {
        "id": "block-img"
    });
    
    /**
     * Adding the hackathon image to the background of the image div.
     * Setting the size to 100%.
     * TODO: Fix the ones where the image isn't tall enough.
     **/
    $hack_card_img.css("background-image", "url('" + img + "')");
    //$hack_card_img.css("background-repeat", "no-repeat");
    $hack_card_img.css("background-size", "100%");
    
    /**
     * Appends the image div to the card div.
     **/
    $hack_card_img.appendTo($hack_card);
    
    
    /**
     * Initializing the hack card info box div.
     **/
    $hack_card_info = $("<div>", {
        "id":    "info",
        "class": "info-block"
    });
    
    /**
     * Appends the div holding the name,     id=name.
     * Appends the div holding the date,     id=date.
     * Appends the div holding the location, id=loc.
     **/
    $hack_card_info.append(
        "<div id='name'>" + name + "</div>" +
            "<div id='date'>" + dateStr + "</div>" +
            "<div id='loc'>" + loc + "</div>"
    );
    
    /**
     * Appends the info div to the card div.
     **/
    $hack_card_info.appendTo($hack_card);
    
    /**
     * Appends the hack card to the div associated with
     *  the time that it takes place.
     **/
    $(hasPassedOrNah + ".info-cards").append($hack_card);
}