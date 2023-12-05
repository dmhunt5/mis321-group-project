const url = "http://localhost:5291/api/Child/"
let myChildren=[]


async function handleRegisterOnLoad(){
    let html=`
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
            <label>Enter Date of Birth (0000-00-00)</label><br>
            <input type="DateTime" id="dateofbirth" name="dateofbirth"><br>
            <div class="dropdown">
            <div>
            <label for="sportType">Choose Sport Type</label><br>
            <select id="sportType" name="sportType">
              <option value="Softball">Softball</option>
              <option value="Baseball">Baseball</option>
            </select>
            </div><br>
            <button onclick= "handleChildAdd()">Submit</button>
        </div>
    </form> 
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>

    `
    document.getElementById('app').innerHTML=html
}

async function handleChildAdd(){
    console.log(sportType.value)
    console.log("here")
    if (sportType.value == "Softball"){
        sportId = 1;
    }
    else sportId = 2;
    console.log(sportId)
    let child = {
        childid: 0,
        dateofbirth: document.getElementById('dateofbirth').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        sportid: sportId,
        teamid:0
        };
    myChildren.push(child);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(child),
    })
    //handleOnLoad();
    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
    document.getElementById('dateofbirth').value='';
}
async function handleBackToHome(){
    window.location.href = "./CustomerHomepage.html"
}