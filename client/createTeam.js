const url = "http://localhost:5291/api/Team/"
let myTeams =[]

async function handleOnLoadFive(){
    let html = `
       
    <div id="pagebackground">
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Create Teams</h5>
        <p class="card-text">To create teams enter their name and sport type below</p>
        <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
        </div>
    </div>
    <form onsubmit="return false" class="formContainer">
        <div class ="teamForm">
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
            <button onclick= "handleTeamAdd()">Submit</button>
        </div>
    </form> 
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>
  
    
    `
    document.getElementById('app5').innerHTML=html;
}

async function handleTeamAdd(){
    console.log(sportType.value)
    console.log("here")
    if (sportType.value == "Softball"){
        sportId = 1;
    }
    else sportId = 2;
    console.log(sportId)
    let team = {
        teamname: document.getElementById('teamname').value,
        sportid: sportId
        };
    myTeams.push(team);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(team),
    })
    //handleOnLoad();
    document.getElementById('teamname').value='';
    
}

async function handleBackToHome(){
    window.location.href = "./Adminhomepage.html"
}