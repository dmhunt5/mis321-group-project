const playerurl = "http://localhost:5291/api/Child/"
const teamurl ="http://localhost:5291/api/Team/"
let myPlayers = []

async function handleEditOnLoad(){
    let html = `
    <div class= "banner1"> 
        <img src= "./styles/LOGO TSP.png" class="bannerLogo">
    </div>  

    <button onclick = "handleBackToHome()">
        <img src="./styles/home.png" class ="checkoutButton">
    </button>

    <div>
        <h1 id= "header">Remove Players from Teams Below</h1>
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
        dateofbirth: "nothing",
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
}


async function handleBackToHome(){
    window.location.href = "./Adminhomepage.html"
}