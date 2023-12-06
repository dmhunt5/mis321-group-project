let myVolunteers =[]
let events = [];
let baseUrl = "http://localhost:5291/api";
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d = new Date();
let monthNum = d.getMonth();
let monthName = monthNames[monthNum];
let year = d.getFullYear();

async function handleRegisterOnLoad(gameid){
    console.log(gameid);
    let html =`
    <div id="pagebackground">
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Register Your Child</h5>
        <p class="card-text">To register enter the information below</p>
        <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
        </div>
    </div>
    <form onsubmit="return false" class="formContainer">
        <div class ="teamForm">
            <label>Enter First Name</label><br>
            <input type="text" id="firstname" name="firstname"><br>
            <label>Enter Last Name</label><br>
            <input type="text" id="lastname" name="lastname"><br>
            <div class="dropdown">
            <div>
            <label for="volunteerrole">Choose Volunteer Role</label><br>
            <select id="volunteerrole" name="volunteerrole">
              <option value="Softball">Umpire</option>
              <option value="Baseball">Concession Stand</option>
              <option value="Baseball">Assistant Coach</option>
            </select>
            <div class="dropdown">
            <div>
            <label for="sportType">Choose Sport Type</label><br>
            <select id="sportType" name="sportType">
              <option value="Softball">Softball</option>
              <option value="Baseball">Baseball</option>
            </select>
            </div><br>
            <button onclick= "handleVolunteer(${gameid})">Submit</button>
        </div>
    </form> 
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>
    `
    document.getElementById('app').innerHTML=html

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
}

async function handleVolunteer(gameid){
    console.log(gameid);
    console.log(sportType.value);
    if (sportType.value == "Softball"){
        sportId = 1;
    }
    else sportId = 2;
    console.log(sportId)
    let customer = {
        customerid: 0,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        volunteerrole: document.getElementById('volunteerrole').value,
        userid:0,
        childid:0,
        gameid: gameid, //you'll have to figure out how to pull the gameid
        sportid:sportId
        };
    myVolunteers.push(customer);
    await fetch(baseUrl + "/Customer",{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(customer),
    })
}

function loadCalendar()
{
    getTeamSchedules();
    html = `
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
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else{
            html += `
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
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
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else
        {
            html += `
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
            `;
        }
    }

    document.getElementById("days").innerHTML = html;
}

function moveNextMonth()
{
    console.log(monthNum);
    if(monthNum == 11)
    {
        monthNum = 0;
        year += 1;
    }
    else
    {
        console.log("inside else");
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

    console.log(monthNum);
    console.log(numDays);

    html = ``;
    for (let i = 1; i <= numDays; i++) 
    {
        if(monthNum == d.getMonth() && i == d.getDate())
        {
            html += `
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" class="btn btn-warning">${i}</button></li>`
        }
        else
        {
            html += `
            <li><button type="button" onclick="handleDayClick(${i}, ${monthNum}, ${year})" id="dayButton" class="btn btn-light">${i}</button></li>
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
    console.log(events);
}

function handleDayClick(day, month, year)
{
    let html= `
    <table class="table table-striped">
        <tr>
            <th>Date of game</th>
            <th>Time of game</th>
            <th>Team 1 ID</th>
            <th>Team 2 ID</th>
        </tr>`;
    console.log(events);
    console.log(day, month, year);
    events.forEach(function(event) {
        let eventdates = event.dateOfGame.split("-");
        console.log(eventdates, "EVENT DATES")
        if(eventdates[0] == day && eventdates[1] == month + 1 && eventdates[2] == year)
        {
            html += `
            <tr>
            <td>${event.dateOfGame}</td>
            <td>${event.timeOfGame}</td>
            <td>${event.teamId}</td>
            <td>${event.opponentId}</td>
            <td><button class="btn btn-primary" onclick="handleRegisterOnLoad('${event.gameId}')">Register</button></td>
            </tr>`;

            
        }
    })
    html+=`</table>`
    document.getElementById('app').innerHTML = html;

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
}

async function handleBackToHome(){
    window.location.href = "./CustomerHomepage.html"
}