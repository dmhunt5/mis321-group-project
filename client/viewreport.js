let count = 0;
let myActivities = [];

function handleOnLoad() {
    myActivities = JSON.parse(localStorage.getItem('myActivities'));
    console.log(myActivities);
    let html=`
    <nav class="navbar">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
    </nav>
    <div class="banner">
        <h1>TideFit Fitness Tracker</h1>
        <img src="./images/bigal.png" id="small-big-al">
        <p>Take control of your fitness journey!</p>
    </div>
    <br>`;
    document.getElementById('viewreport1').innerHTML=html;
    populateTable();
}


function populateTable() {
    let html=`
    <table class="table table-striped" style="width:100%">
        <thead>
            <tr>
                <th>Date</th>
                <th>Activity Type</th>
                <th>Distance (Miles)</th>
                <th>Pinned Activities</th>
                <th>Delete Activity</th>
            </tr>
        </thead>`;
    // myActivities.forEach(function(activity) {
    //     if(activity.Distance==undefined) {
    //         activity.Distance = 0;
    //     }
    //     html += `
    //     <tr>
    //         <td>${activity.Date}</td>
    //         <td>${activity.ActivityType}</td>
    //         <td>${activity.Distance}</td>
    //         <td><button class="deleteBtn"><img src="./images/xbutton.png" id="table-button"></button></td>
    //     </tr>`;
    // })
    html += `</table>`;
    document.getElementById('tableBody').innerHTML = html;
}