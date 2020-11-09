console.log('Its working');

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Option clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  localStorage.setItem('theme', mode);
}

var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var btn1 = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');

var span1 = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];
var span3 = document.getElementsByClassName('close')[2];

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = 'block';
};
btn2.onclick = function () {
  modal2.style.display = 'block';
};
btn3.onclick = function () {
  modal3.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = 'none';
};
span2.onclick = function () {
  modal2.style.display = 'none';
};
span3.onclick = function () {
  modal3.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = 'none';
  }
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
  if (event.target == modal3) {
    modal3.style.display = 'none';
  }
};
