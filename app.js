

const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')
const userName = document.getElementById('username')

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var ap = today.getHours() < 12? 'AM' : 'PM';
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s  + ' ' + ap;
    t = setTimeout(function() {
      startTime()
    }, 500);

    
  }

  function setGreeting(){
    var today = new Date();
    var hours = today.getHours();    

    if(hours<12){
        document.body.style.backgroundImage = "url('windows-background.jpg')";
        document.body.style.color = "black";
        greeting.textContent = "Good Morning";
    }else if(hours<18){
        document.body.style.backgroundImage = "url('mountain3.jpg')";
        document.body.style.color = "white";
        greeting.textContent = "Good Afternoon";
    } 
    else{
        document.body.style.backgroundImage = "url('mountain.jpg')";
        document.body.style.color = "white";
        greeting.textContent = "Good Evening";
    }
  }


  function getName(){
      if(localStorage.getItem('name')===null){
          name.textContent = '[Enter Name]';
      }else{
          name.textContent = localStorage.getItem('name');
      }

  }

  function setName(e){
    if(e.type ==='keypress'){
        if(e.which ==13 || e.keyCode ==13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
  }

  function setFocus(e){
    if(e.type ==='keypress'){
        if(e.which ==13 || e.keyCode ==13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
  }

  function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function getUserName(){
  var username = document.getElementById('name').value
  var userName = document.getElementById('username').innerText = username;
  
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)


  
  startTime();
  setGreeting(); 
  getName();
  getFocus();
  setName();
  setFocus();
  getUserName();



  