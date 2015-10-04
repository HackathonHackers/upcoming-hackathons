/*global console, $, hackathons, makeInfoBlock*/

$(document).ready(function () {
    'use strict';
    $('.info-cards').masonry({
        itemSelector: '.info-block-card',
        columnWidth: 300
    });
});

var h, hack;


for (h in hackathons.f2015) {
    if (hackathons.f2015.hasOwnProperty(h)) {
        hack = hackathons.f2015[h];
        /*
        var altName = null,
            start_month = parseInt(hack.date[0], 10),
            start_day = parseInt((parseFloat(hack.date[0]) % 1) * 100, 10);
        
        console.log(start_month, start_day);
        
        html = "<tr>";
        html += ("<td>" + (altName || hack.name) + "</td>");
        html += ("<td>" + hack.location + "</td>");
        html += ("<td>" + hack.date[0] + "</td>");
        html += ("<td>" + (hack.date[1] || '') + "</td>");
        html += "</tr>";
        
        if ((month > start_month) ||
                ((month === start_month) && (day > start_day))) {
            has_passed_html += html;
        } else {
            upcoming_html += html;
        }
        */
        makeInfoBlock(hack);
    }
}

//document.getElementById('hackathons-list').innerHTML = (has_passed_html + upcoming_html);