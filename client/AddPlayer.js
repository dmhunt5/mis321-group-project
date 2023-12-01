const teamurl ="http://localhost:5291/api/Team/"
const playerurl ="http://localhost:5291/api/Child/"
let myPlayers = []

async function onLoad(){
    let html = `
    <div id="pagebackground">
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Add Players to Teams Below</h5>
        <p class="card-text">To add players enter their first name, last name, team name, and sport type</p>
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
            <button onclick= "handlePlayerAdd()">Submit</button>
            </div>
    </form> 
   
    </div>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>
    `
    document.getElementById('addplayer').innerHTML=html;
}

async function handlePlayerAdd(){
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
    dateofbirth: 0000-00-00,
    firstname: playerfirstname,
    lastname: playerlastname,
    sportid: 0,
    teamid: data,
    };

    myPlayers.push(child);
    await fetch(playerurl,{
        method: "PUT",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(child),
    })
   
    document.getElementById('playerfirstname').value='';
    document.getElementById('playerlastname').value='';
    document.getElementById('teamname').value='';
 }

 async function handleBackToHome(){
    window.location.href = "./Adminhomepage.html"
}
