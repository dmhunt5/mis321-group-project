const url = "http://localhost:5291/api/Team/"
const playerUrl =  "http://localhost:5291/api/Child/"
const playerNameUrl = "http://localhost:5291/api/Child/GetPlayerNames/"
let myTeams = []
async function handleOnLoadFour(){
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
        <a class="navbar-brand" href="#"><button onclick="handleToLogin()"><img src = "./styles/LOGO TSP.png" class="navbarLogo"></button></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accounts
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#" onclick="handleCustAccount()">Create Customer Account</a></li>
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
                Reports
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#" onclick="handleView()">View Reports</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
      </div>
    </nav><br><br><br><br> 
    <div id="pagebackground">
    <div class= "scroll-container">
    <img src="./styles/baseballpic.jpg.webp" id="scrollpic" alt="BB">
    <img src="./styles/softballpic.jpeg" id="scrollpic" alt="SB">
    <img src="./styles/youthbaseball.jpeg" id="scrollpic" alt="BB2">
    <img src="./styles/youthsoftball.jpg" id="scrollpic" alt="SB2">
    </div>
   

    <div class="header2">
    <h1> Teams </h1>
    </div><br><br>
    </div>

    <div>
          <label for="teamRosterDropdown">Team Names</label>
          <select name="teamRosterDropdown" id="myDropdown" class="form-control">PLACEHOLDER</select>
    </div>



<table id="playersTable">
  <caption> Team Players </caption>
</table>
<div id="detailsContainer"></div>
</div>

</div>
<div id="pagebackground">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>

    `
    
    document.getElementById('app4').innerHTML=html;
    //populateTable();
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


    async function handleCustAccount(){
      window.location.href = "./createCustAccountEmp.html"
    }

    async function handleView(){
      window.location.href = "./viewreport.html"
    }
    
    async function handleToLogin(){
      window.location.href = "./loginpage.html"
    }
    