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
    <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Register To Volunteer</h5>
        <p class="card-text">To register enter the information below</p>
        
        </div>
    </div>
    <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p>
  
                  <form class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">First Name</label>
                        <input type="text" id="firstname" class="form-control" />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">Last Name</label>
                        <input type="text" id="lastname" class="form-control" />
                      </div>
                    </div>
  
                    <div class="dropdown" id="sportDropdown">
                    <div>
                    <label for="volunteerrole">Choose Volunteer Role</label><br>
                    <select id="volunteerrole" name="volunteerrole">
                    <option value="Umpire">Umpire</option>
                    <option value="Concession Stand">Concession Stand</option>
                    <option value="Assistant">Assistant Coach</option>
                    </select>
                    </div>
                    </div>
  
                    <div class="dropdown" id="sportDropdown">
                    <div>
                    <label for="sportType">Choose Sport Type</label><br>
                    <select id="sportType" name="sportType">
                    <option value="Softball">Softball</option>
                    <option value="Baseball">Baseball</option>
                    </select>
                    </div><br>
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onclick="handleVolunteer(${gameid})">Submit</button>
                    </div>
                    </div>
                  </form>
          
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="./styles/LOGO TSP.png"
                    class="img-fluid" alt="Sample image">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<br><br><br>
    `
    document.getElementById('app').innerHTML=html

    html=`
    <a href="./CustomerHomepage.html">Home</a>`;

    document.getElementById('button').innerHTML = html; 
}

async function handleVolunteer(gameid){
    const gameId = gameid;
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
        sportid:sportId,
        gameid: gameId 
        
        };
    myVolunteers.push(customer);
    console.log(customer);
    await fetch(baseUrl + "/Customer",{
        method: "PUT",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(customer),
    })

    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
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
        console.log(i, monthNum, year);
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
        console.log(eventdates, "EVENT DATES");
        if(eventdates[0] == month +1 && eventdates[1] == day && eventdates[2] == year)
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