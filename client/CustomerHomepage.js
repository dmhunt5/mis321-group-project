const url = "http://localhost:5291/api/Team/"
const playerUrl =  "http://localhost:5291/api/Child/"
const playerNameUrl = "http://localhost:5291/api/Child/GetPlayerNames/"

async function handleOnLoadThree(){
  fetch('http://localhost:5291/api/Team/')  // Replace with your API endpoint
  .then(response => response.json())
 
  .then(data => {
    console.log(data)
      populateDropdown(data);
  })
  .catch(error => console.error('Error fetching data:', error));
    let html =`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TSP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sports
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#" onclick="registerChild()">Register a Child</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Volunteering
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#" onclick="handleRegister()">Register for an Event</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Events
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#" onclick="handleSchedule()">View Schedule</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <button onclick = "handleCheckout()">
            <img src="./styles/cart.jpg" class ="checkoutButton">
        </button>
      </div>
    </nav><br><br><br>

    <div class="header2">
    <h1> Teams </h1>
</div><br><br><br>

    <div>
          <label for="teamRosterDropdown">Team Rosters</label>
          <select name="teamRosterDropdown" id="myDropdown" class="form-control">PLACEHOLDER</select>
    </div>


<div>
<table id="playersTable">
  <caption> Team Players </caption>
</table>
<div id="detailsContainer"></div>
</div>

<div id=detailsContainer"></div>
    `
    
    document.getElementById('app3').innerHTML=html;
    
    }

async function populateDropdown(data) {
      const dropdown = document.getElementById('myDropdown');
      const playersTable = document.getElementById('playersTable');
    
      dropdown.addEventListener('change', async function(event) {
        const selectedValue = event.target.value;
    
          playersTable.innerHTML=` `;
    
          const teamResponse = await fetch(url + selectedValue);
          const teamData = await teamResponse.json();
    
          const playersResponse = await fetch(`${playerNameUrl}${teamData}`);
          const playerData = await playersResponse.json();
          
          playerData.forEach(player =>{
            playersTable.innerHTML += `
            <tr>
                <td>${player.firstname}</td>
                <td>${player.lastname}</td>
            </tr>`
          });
        
        console.log('Selected value:', selectedValue);
      
      });
      
      dropdown.innerHTML = '';
    
      data.forEach(item => {
        console.log(item);
          const option = document.createElement('option');
          option.value = item.teamname;  
          option.textContent = item.teamname;  
          console.log(option);
          dropdown.appendChild(option);
      });
    }
    
    
        

async function handleSchedule(){
  window.location.href = "./CustomerTeamSchedule.html"
}

async function registerChild(){
  window.location.href = "./registerChild.html"
}

async function handleRegister(){
  window.location.href = "./registerVolunteer.html"
}

async function handleCheckout(){
  window.location.href = "./checkout.html"
}
    