const url = "http://localhost:5291/api/User/"
let myUsers = []

async function handleOnLoad(){

let html = `
<div id="pagebackground">
<div class= "banner1"> 
<h1>Tuscaloosa Sports Association</h1>
</div>

<div class= "scroll-container">
    <img src="./styles/baseball.jpg" id="scrollpic" alt="BB">
    <img src="./styles/LOGO TSP.png" id="scrollpic" alt="Logo">
    <img src="./styles/softball.jpeg" id="scrollpic" alt="SB">
</div>

<div class= "header1"> 
    <h1>Log In!</h1>
</div>

<form onsubmit="return false">
<div id="login">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div>
  <label for="accountType">Choose Account Type</label>
  <select id="accountType" name="accountType">
    <option value="Customer">Customer</option>
    <option value="Employee">Employee</option>
    <option value="Admin">Admin</option>
  </select>
  </div><br>

  <button type="submit" class="btn btn-secondary" onclick="handleLogin()">Log In</button>
</div>
</form>


<div class="header1">
    <h1>Registration for both softball and baseball costs $5</h1>
</div>
</div>
`
document.getElementById('app').innerHTML=html; 

}

async function handleLogin(){
    
      const username = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value
      const accountType = document.getElementById('accountType').value
      console.log(username);
      console.log(password);
//try{
   const response = await fetch(url + username + "/" + password,{
        method: "GET",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json",
        }
   }) 

   const data = await response.json();
   console.log(data)

    if(data == 0){
      console.log("invalid login") 
      handleOnLoad();
      document.getElementById('exampleInputEmail1').value='';
      document.getElementById('exampleInputPassword1').value='';
    }
    else{
      if (accountType == "Employee"){
        window.location.href = './EmployeeHomepage.html'
      }
      else if(accountType == "Customer"){
        window.location.href = './CustomerHomepage.html'
      }
      else if (accountType == "Admin"){
        window.location.href = './Adminhomepage.html'
      }
    }
    
  // } catch (error){
  //   console.error('An error ocurred:', error);
  // }
}