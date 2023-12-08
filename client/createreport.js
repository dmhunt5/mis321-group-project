let count = 0;
let myReports = [];
const url = "http://localhost:5291/api/Report/"

function handleOnLoad() {
    let html=`
    <div id="pagebackground">
    <button onclick = "handleBackToHome()" class = "homebutton">
    <img src="./styles/home.png" class ="checkoutButton">
  </button>
  <br><br><br><br>
  </div>
    <br>
    <form onsubmit="return false" style="border:1px solid #ccc">
      <div class="container">
        <h1>Create Report</h1>
        <p>Please fill in this form to create a report.</p>
        <hr>

        <label for="repdate"><b>Report Date:</b></label><br>
        <input type="text" placeholder="Enter the report date as 'YYYY-MM-DD'" id="repdate" name="repdate" required ><br>

        <label for="bballreg"><b>Baseball Registrations:</b></label><br>
        <input type="text" placeholder="Enter the number of baseball player registrations" id="bballreg" name="bballreg" required><br>

        <label for="sballreg"><b>Softball Registrations:</b></label><br>
        <input type="text" placeholder="Enter the number of softball volunteer registrations" id="sballreg" name="sballreg" required><br>

        <label for="repcomments"><b>Additional Comments:</b></label><br>
        <input type="text" placeholder="Enter any additional comments here (volunteers per event, added/cancelled events, etc.)" id="repcomments" name="repcomments" required><br>
    
        <button class="btn btn-primary btn-lg" onclick="handleReportCreate()">Create Report</button>
    
      </div>
    </form>
    <br>
    </div>
    `;
    document.getElementById('app').innerHTML=html;
}



async function handleReportCreate() {
    let report = {
        repdate: document.getElementById('repdate').value,
        bballreg: document.getElementById('bballreg').value,
        sballreg: document.getElementById('sballreg').value,
        repcomments: document.getElementById('repcomments').value
        };
    myReports.push(report);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(report),
    })
    document.getElementById('repdate').value='';
    document.getElementById('bballreg').value='';
    document.getElementById('sballreg').value='';
    document.getElementById('repcomments').value='';
}

async function handleBackToHome(){
    window.location.href = "./Adminhomepage.html"
  }