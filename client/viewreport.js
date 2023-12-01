let count = 0;
let myReports = [];
const url = "http://localhost:5291/api/Report/"

async function handleOnLoad() {
    let response = await fetch(url)
    myReports = await response.json()
    let html =`
    <div id="pagebackground">
    <div class="banner2">
        <img src="./styles/LOGO TSP.png" class="bannerLogo">
    </div>
    <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
        </div>
    <div class="card" id ="card2">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Date</th>
                <th>Baseball Registration Count</th>
                <th>Softball Registration Count</th>
                <th>Extra Comments</th>
            
            </tr>
        </thead>
        <tbody>`;
    myReports.forEach(function(report) {
        html += `
        <tr>
            <td>${report.repdate}</td>
            <td>${report.bballreg}</td>
            <td>${report.sballreg}</td>
            <td>${report.repcomments}</td>
        </tr>`
    });
    html+= `</tbody></table>
    </div><
    </div>
    <div id="pagebackground"> <br><br><br><br><br><br><br><br><br><br></div>`;
   
    
    document.getElementById('viewreport1').innerHTML=html; 
} 

async function handleBackToHome(){
    window.location.href = "./Employeehomepage.html"
}
