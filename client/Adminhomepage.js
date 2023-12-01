const url = "http://localhost:5291/api/Team/"
let myTeams = []

async function handleOnLoadTwo(){
// Fetch call to get data
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
            <li><a class="dropdown-item" href="#" onclick="handleEmpAccount()">Create Employee Account</a></li>
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
            <li><a class="dropdown-item" href="#" onclick="handleReportCreate()">Create Report</a></li>
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
            <li><a class="dropdown-item" href="#">Create an Event</a></li>
            <li><a class="dropdown-item" href="#">Edit an Event</a></li>
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
            Teams
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#" onclick = "handleClickForAdd()" >Create a Team</a></li>
            <li><a class="dropdown-item" href="#" onclick = "handleClickForPlayerAdd()" >Add Players to Team</a></li>
            <li><a class="dropdown-item" href="#" onclick = "handleClickForRemove()">Remove Players from Team</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div>
          <label for="teamRosterDropdown">Team Rosters</label>
          <select name="teamRosterDropdown" id="myDropdown" class="form-control">PLACEHOLDER</select>
    </div>

<div class="header2">
    <h1> Teams </h1>
</div>`

// <div id="teamPlayerContainer"></div>

//         fetch('fetch_data.php')
//             .then(response => response.json())
//             .then(data => {
              
//                 const container = document.getElementById('teamPlayerContainer');
//                 data.forEach(item => {
//                     container.innerHTML += `<p><strong>${item.team_name}</strong>: ${item.player_name}</p>`;
//                 });
//             })
//             .catch(error => console.error('Error fetching data:', error));
  


document.getElementById('app2').innerHTML=html;
//populateTable();
}

async function handleClickForAdd(){
  window.location.href = "./createTeam.html"
}

async function handleClickForPlayerAdd(){
  window.location.href ="./AddPlayer.html"
}

async function handleClickForRemove(){
  window.location.href = "./editTeam.html"
}

async function handleCustAccount(){
  window.location.href = "./createcustacc.html"
}

async function handleEmpAccount(){
  window.location.href = "./createempacc.html"
}

async function handleReportCreate(){
  window.location.href = "./createreport.html"
}
// async function clickForTeamRosters(){
  
//   const response = await fetch(teamurl,{
//   method: "GET",
//   headers: {
//     accepts: '*/*',
//     "Content-type" : "application/json",
//   }
// }) 
// const data = await response.json();
// console.log(data)

//   // Populate the dropdown with options
//   dataFromServer.forEach(function (item) {
//       var option = document.createElement('option');
//       option.value = item.value;
//       option.text = item.text;
//       dropdown.appendChild(option);
//   });
// });

// Function to populate the dropdown
async function populateDropdown(data) {
  const dropdown = document.getElementById('myDropdown');

  dropdown.addEventListener('change', function(event) {
    // The value of the selected option is available in event.target.value
    const selectedValue = event.target.value;
    //table stuff goes here 
    //api call here and then log it 
    //do a get then populate a table that has a header of Player's Names and then each row is a players name

    console.log('Selected value:', selectedValue);
  // You can add more functionality here based on the selected value
  });

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





// async function populateTable(){
//     let html = `
//     <table class ="table table-hover" id="table1">
//     <tr>
//     <th > Team 1 </th>
//     <th> Team 2 </th>
//     <th> Team 3 </th> 
//     </tr>`;
//     // myTeams.forEach(function(team){
//     //         html += `
//     //         <tr>
//     //                 <td> ${team.name}</td>

//     //         </tr>`
//     // })
//     html += `</table>`
//     document.getElementById('tableBody').innerHTML = html 
// }