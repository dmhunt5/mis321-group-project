const url =""
let myVolunteers =[]

async function handleRegisterOnLoad(){
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
            <button onclick= "handleChildAdd()">Submit</button>
        </div>
    </form> 
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>
    `
    document.getElementById('app').innerHTML=html
}

async function handleVolunteer(){
    console.log(sportType.value)
    console.log("here")
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
        gameid: something, //you'll have to figure out how to pull the gameid
        sportid:sportId
        };
    myVolunteers.push(customer);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(customer),
    })
}