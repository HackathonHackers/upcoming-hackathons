/*global console, $, hackathons, makeInfoBlock*/

/**
 * Temporarily using JQuery Masonry package for gridding format.
 * Its really slow, so I'm hoping to have something else soon.
 **/
$(document).ready(function () {
    'use strict';
    $('.info-cards').masonry({
        itemSelector: '.info-block-card'
    });
});

var hack, hackathon,
    /* Date to be used to determine how to sort the listed events. */
    date = new Date(),
    month = date.getMonth() + 1,
    day = date.getDate() + 1;
/**
 * @function hasPassed
 * @param date - The array holding the dates, represented as strings.
 * @return {string} id - The id of the up-coming or past-hack sets.
 **/
function hasPassed(date) {
    'use strict';
    var start_date = date[0].split('.'),
        start_month = parseInt(start_date[0], 10),
        start_day = parseInt(start_date[1], 10);
    
    if ((month > start_month) ||
            ((month === start_month) && (day > start_day))) {
        return "#past-hack";
    } else {
        return "#up-coming";
    }
}
/**
 * Loops through the hackathons JSON and runs
 * makeInfoBlock on all of the individual hackathons.
 **/
for (hack in hackathons.f2015) {
    if (hackathons.f2015.hasOwnProperty(hack)) {
        hackathon = hackathons.f2015[hack];
        makeInfoBlock(hackathon, hasPassed(hackathon.date));
    }
}