const url = ""
let myTeams = []

async function handleOnLoadTwo(){
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
            <li><a class="dropdown-item" href="#">Create Account</a></li>
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
            <li><a class="dropdown-item" href="#">Create Report</a></li>
            <li><a class="dropdown-item" href="#">Edit Report</a></li>
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
            <li><a class="dropdown-item" href="#">Remove Players from Team</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="header2">
    <h1> Teams </h1>
</div>
`

document.getElementById('app2').innerHTML=html;
//populateTable();
}

async function handleClickForAdd(){
  window.location.href = "./createTeam.html"
}

async function handleClickForPlayerAdd(){
  window.location.href ="./AddPlayer.html"
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