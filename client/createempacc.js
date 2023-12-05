let count = 0;
let myUsers = [];
const url = "http://localhost:5291/api/User/"
const employeeUrl = "http://localhost:5291/api/Employee/"


function handleOnLoad() {
    
    let html=`
    <button onclick = "handleBackToHome()" class = "homebutton">
      <img src="./styles/home.png" class ="checkoutButton">
    </button>

    <div class="banner">
        <img src="./styles/Tuscaloosa_Sports_Association_Transparent.png" id="tsa-logo">
    </div>
    <br>
    <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Employee Account</p>
  
                  <form class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">First Name</label>
                        <input type="text" id="form3Example1c" class="form-control" />
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">Last Name</label>
                        <input type="text" id="form3Example1c" class="form-control" />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Email</label>
                        <input type="text" id="username" class="form-control" />
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">Password</label>
                        <input type="text" id="password" class="form-control" />
                      </div>
                    </div>
                    <label for="accountType">Choose Account Type</label>
                      <select id="accountType" name="accountType">
                      <option value="Employee">Employee</option>
                      <option value="Admin">Admin</option>
                      </select>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onclick="handleAccountAdd()">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <br>
    <p></p>
    <br>
    <p></p>
    <br>
    <p></p>
    <br>`;
    document.getElementById('app').innerHTML=html;
}



async function handleAccountAdd() {
  let user = {
    userid: 0,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
    };
  myUsers.push(user);
  await fetch(url,{
    method: "POST",
    headers: {
        accepts: '*/*',
        "Content-type" : "application/json"
    },
    body: JSON.stringify(user),
  }).then(async function() {

    if(accountType == "Employee"){
      administratorBool = false;
    }
    else administratorBool = true 

    console.log(accountType)

    let employee = {
      employeeid: 0,
      administrator: administratorBool,
      gameid: 0,
      teamid: 0,
      userid: 0,

    }
    console.log(employee)
    await fetch(employeeUrl,{
      method: "POST",
      headers: {
        accepts: '*/*',
        "Content-type" : "application/json"
    },
    body: JSON.stringify(employee),
    })
  })

}

async function handleBackToHome(){
  window.location.href = "./Adminhomepage.html"
}