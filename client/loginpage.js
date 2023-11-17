const url = ""
let myUser = []

async function handleOnLoad(){

let html = `
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

<form>
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
  <button type="submit" class="btn btn-secondary" onclick="handleLogin()">Submit</button>
</div>
</form>


<div class="header1">
    <h1>Registration for both softball and baseball costs $5</h1>
</div>


`
document.getElementById('app').innerHTML=html;

}

async function handleLogin(){
    let user= {
        username: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value};
    myUser.push(user);
    await fetch(url,{
        method: "POST",
        headers: {
            accepts: '*/*',
            "Content-type" : "application/json"
        },
        body: JSON.stringify(user),
    })
    handleOnLoad();
    document.getElementById('exampleInputEmail1').value='';
    document.getElementById('exampleInputPassword1').value='';
    
}