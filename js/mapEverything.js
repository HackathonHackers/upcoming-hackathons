/*global console, $, hackathons*/

var h, hack, html,
    upcoming_html = "<th>Upcoming Hacks</th>",
    has_passed_html = "<th>Passed Hackathons</th>",
    date = new Date(),
    month = date.getMonth() + 1,
    day = date.getDate() + 1;
console.log(date);
console.log("today", month, day);

upcoming_html += "<tr class='hackathon-list-head'><td>Name</td><td>Location</td><td>Start</td><td>Finish</td></tr>";
has_passed_html += "<tr class='hackathon-list-head'><td>Name</td><td>Location</td><td>Start</td><td>Finish</td></tr>";


for (h in hackathons.f2015) {
    if (hackathons.f2015.hasOwnProperty(h)) {
        hack = hackathons.f2015[h];
        
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
        
        if ((month > start_month) || ((month === start_month) && (day > start_day))) {
            has_passed_html += html;
        } else {
            upcoming_html += html;
        }
    }
}


document.getElementById('hackathons-list').innerHTML = (has_passed_html + upcoming_html);