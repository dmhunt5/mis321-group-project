const url = "http://localhost:5291/api/Child/"
let myChildren=[]


async function handleRegisterOnLoad(){
    let html=`
    <div id="pagebackground">
    <div>
    <button onclick = "handleBackToHome()" class = "homebutton">
        <img src="./styles/home.png" class ="checkoutButton">
        </button>
    </div>
    <div class="card" id ="card">
        <h5 class="card-header">Tuscaloosa Sports Association</h5>
        <div class="card-body">
        <h5 class="card-title">Register Your Child</h5>
        <p class="card-text">To register enter the information below</p>
        
        </div>
    </div>
    <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p>
  
                  <form class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">First Name</label>
                        <input type="text" id="firstname" class="form-control" />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">Last Name</label>
                        <input type="text" id="lastname" class="form-control" />
                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Date of Birth (0000-00-00)</label>
                        <input type="text" id="dateofbirth" class="form-control" />
                      </div>
                    </div>
  
                    <div class="dropdown" id="sportDropdown">
                    <div>
                    <label for="sportType">Choose Sport Type</label><br>
                    <select id="sportType" name="sportType">
                    <option value="Softball">Softball</option>
                    <option value="Baseball">Baseball</option>
                    </select>
                    </div><br>
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" onclick="handleChildAdd()">Submit</button>
                    </div>
                    </div>
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="./styles/LOGO TSP.png"
                    class="img-fluid" alt="Sample image">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div> <br><br><br>
    <img src="./styles/LOGO TSP.png" class="smallLogo"> 
    </div>

    `
    document.getElementById('app').innerHTML=html
}

async function handleChildAdd(){
    console.log(sportType.value)
    console.log("here")
    if (sportType.value == "Softball"){
        sportId = 1;
    }
    else sportId = 2;
    console.log(sportId)
    let child = {
        childid: 0,
        dateofbirth: document.getElementById('dateofbirth').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        sportid: sportId,
        teamid:0
        };
    myChildren.push(child);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(child),
    })
   
    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
    document.getElementById('dateofbirth').value='';
}
async function handleBackToHome(){
    window.location.href = "./CustomerHomepage.html"
}