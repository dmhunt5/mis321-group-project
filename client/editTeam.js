const playerurl = "http://localhost:5291/api/Child/"
const teamurl ="http://localhost:5291/api/Team/"
let myPlayers = []

async function handleEditOnLoad(){
    let html = `
    <div id="pagebackground">
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Remove Players from Teams</h5>
        <p class="card-text">To remove players from teams enter their first name, last name, team name, and sport type below</p>
        <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
        </div>
    </div>

    <form onsubmit="return false" class="formContainer">
    <div class ="teamForm">
        <label>Enter Player's First Name</label><br>
        <input type="text" id="playerfirstname" name="playerfirstname"><br>
        <label>Enter Player's Last Name</label><br>
        <input type="text" id="playerlastname" name="playerlastname"><br>
        <label>Enter Team Name</label><br>
        <input type="text" id="teamname" name="teamname"><br>
        <div class="dropdown">
        <div>
        <label for="sportType">Choose Sport Type</label><br>
        <select id="sportType" name="sportType">
          <option value="Softball">Softball</option>
          <option value="Baseball">Baseball</option>
        </select>
        </div><br>
        <button onclick= "handlePlayerDelete()">Submit</button>
    </div>
    </form> 
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>
    `
    document.getElementById("appEditTeam").innerHTML=html;
}


async function handlePlayerDelete(){
    const teamname = document.getElementById('teamname').value;
    const playerfirstname = document.getElementById('playerfirstname').value
    const playerlastname = document.getElementById('playerlastname').value
      console.log(teamname);
      console.log(playerfirstname);
      console.log(playerlastname);

    const response = await fetch(teamurl + teamname,{
        method: "GET",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json",
        }
   }) 

    const data = await response.json();
    console.log(data)

    let child = {
        childid: 0,
        firstname: playerfirstname,
        lastname: playerlastname,
        sportid: 0,
        teamid: data,
        };

    await fetch(playerurl,{
        method: "DELETE",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(child)
    })

    document.getElementById('playerfirstname').value='';
    document.getElementById('playerlastname').value='';
    document.getElementById('teamname').value='';
}


async function handleBackToHome(){
    window.location.href = "./Adminhomepage.html"
}