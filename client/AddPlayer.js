const teamurl ="http://localhost:5291/api/Team/"
const playerurl ="http://localhost:5291/api/Child/"
let myPlayers = []

async function onLoad(){
    let html = `

    <div class= "banner1"> 
        <img src= "./styles/LOGO TSP.png" class="bannerLogo">
    </div>  

    <form onsubmit="return false" class="formContainer">
        <div class ="teamForm">
            <label>Enter Player's Name</label><br>
            <input type="text" id="playername" name="playername"><br>
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

    `
    document.getElementById('addplayer').innerHTML=html;
}

async function handlePlayerAdd(){
    const teamname = document.getElementById('teamname').value;
    const playername = document.getElementById('playername').value
      console.log(teamname);
      console.log(playername);
   const response = await fetch(teamurl + teamname + "/" + playername,{
        method: "GET",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json",
        }
   }) 

   const data = await response.json();
   console.log(data)
    
   let team = {

    teamid: data,
    playername: playername
    };

    myPlayers.push(team);
    await fetch(playerurl,{
    method: "POST",
    headers: {
        accepts: '*/*',
        "Content-type" : "application/json"
    },
    body: JSON.stringify(team),
})
   
    }
