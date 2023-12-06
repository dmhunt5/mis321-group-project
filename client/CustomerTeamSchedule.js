let events = [];
let baseUrl = "http://localhost:5291/api";
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d = new Date();
let monthNum = d.getMonth();
let monthName = monthNames[monthNum];
let year = d.getFullYear();

function handleOnLoad()
{
    getTeamSchedules();
    let html = `
    <div class="month" id="changeMonth">
        <ul>
          <li class="prev"><button onclick="movePrevMonth()">&#10094;</button></li>
          <li class="next"><button onclick="moveNextMonth()">&#10095;</button></li>
          <li>${monthName}<br><span style="font-size:18px">${year}</span></li>
        </ul>
    </div>
      
    <ul class="weekdays" id="calendar">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
    </ul>
    
    <ul class="days" id="days">
    </ul>`;
    document.getElementById("app").innerHTML = html;

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
    let numDays = daysInMonth();
    html = ``;
    console.log(d.getMonth());
    console.log(numDays);
    for (let i = 1; i <= numDays; i++) 
    {
        if(monthNum == d.getMonth() && i == d.getDate())
        {
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else{
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
            `;
        }
    }

    document.getElementById("days").innerHTML = html;
}

function daysInMonth() 
{
    return new Date(year, monthNum + 1, 0).getDate();
}

function movePrevMonth()
{
    if(monthNum == 0)
    {
        monthNum = 11;
        year -= 1;
    }
    else
    {
        monthNum = monthNum - 1;
    }

    let monthName = monthNames[monthNum];

    let numDays = daysInMonth();
    console.log(monthNum);
    console.log(numDays);

    let html = `
        <ul if="calendar">
          <li class="prev"><button onclick="movePrevMonth(monthNum)">&#10094;</button></li>
          <li class="next"><button onclick="moveNextMonth(monthNum)">&#10095;</button></li>
          <li>${monthName}<br><span style="font-size:18px">${year}</span></li>
        </ul>`;
    document.getElementById("changeMonth").innerHTML = html;

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html;

    html = ``;
    for (let i = 1; i <= numDays; i++) 
    {
        if(monthNum == d.getMonth() && i == d.getDate())
        {
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else
        {
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
            `;
        }
    }

    document.getElementById("days").innerHTML = html;
}

function moveNextMonth()
{
    if(monthNum == 11)
    {
        monthNum = 0;
        year += 1;
    }
    else
    {
        monthNum = monthNum + 1;
    }

    let monthName = monthNames[monthNum];

    let html = `
        <ul id="calendar">
          <li class="prev"><button onclick="movePrevMonth(monthNum)">&#10094;</button></li>
          <li class="next"><button onclick="moveNextMonth(monthNum)">&#10095;</button></li>
          <li>${monthName}<br><span style="font-size:18px">${year}</span></li>
        </ul>`;
    document.getElementById("changeMonth").innerHTML = html;

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
    
    let numDays = daysInMonth();

    html = ``;
    for (let i = 1; i <= numDays; i++) 
    {
        if(monthNum == d.getMonth() && i == d.getDate())
        {
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else
        {
            html += `
            <li><button type="button" onclick="handleOnClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
            `;
        }
    }

    document.getElementById("days").innerHTML = html;
}

async function getTeamSchedules()
{
    let response = await fetch(baseUrl + "/TeamSchedules", {
        method: 'GET'
    });
    events = await response.json();
}

function handleOnClick(day, month, year)
{
    let html= `
    <table class="table table-striped">
        <tr>
            <th>Date of game</th>
            <th>Time of game</th>
            <th>Team 1 ID</th>
            <th>Team 2 ID</th>
        </tr>`;
    events.forEach(function(event) {
        let eventdates = event.dateOfGame.split("-");
        if(eventdates[0] == day && eventdates[1] == month + 1 && eventdates[2] == year)
        {
            html += `
            <tr>
            <td>${event.dateOfGame}</td>
            <td>${event.timeOfGame}</td>
            <td>${event.teamId}</td>
            <td>${event.opponentId}</td>
            </tr>`;
        }
    })
    html+=`</table>`
    document.getElementById('app').innerHTML = html;

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
}