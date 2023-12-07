const url = ""
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
        <a class="navbar-brand" href="#">TSP</a>
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
                <li><a class="dropdown-item" href="#" onclick="handleView()">View Report</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
      </div>
    </nav><br><br><br>

    <div>
          <label for="teamRosterDropdown">Team Rosters</label>
          <select name="teamRosterDropdown" id="myDropdown" class="form-control">PLACEHOLDER</select>
    </div>

    <div class="header2">
        <h1> Teams </h1>
    </div>
    `
    
    document.getElementById('app4').innerHTML=html;
    //populateTable();
    }
    async function populateDropdown(data) {
      const dropdown = document.getElementById('myDropdown');
    
    
      // Clear existing options
      dropdown.innerHTML = '';
    
      // Add new options from the fetched data
      data.forEach(item => {
        console.log(item);
          const option = document.createElement('option');
          option.value = item.teamname;  // Assuming each item has a 'value' property
          option.textContent = item.teamname;  // And a 'text' property
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
    