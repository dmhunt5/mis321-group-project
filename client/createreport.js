let count = 0;
let myReports = [];
const url = "http://localhost:5291/api/Report/"

function handleOnLoad() {
    let html=`
    <nav class="navbar">
        <ul>
                <a href="">
                    <img src="./styles/home.png" height="50">
                </a>
        </ul>
    </nav>
    <div class="banner">
        <img src="./styles/Tuscaloosa_Sports_Association_Transparent.png" id="tsa-logo">
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
    
        <button class="button" onclick="handleReportCreate()">Create Report</button>
    
      </div>
    </form>
    <br>`;
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