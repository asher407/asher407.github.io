// 彩蛋函数
function showEgg() {
  const eggContainer = document.getElementById('easter-egg-container');
  if (eggContainer) {
    eggContainer.style.display = 'block';
  }
}
function hideEgg() {
    const eggContainer = document.getElementById('easter-egg-container');
    if (eggContainer) {
        eggContainer.style.display = 'none'; // 隐藏图片
    }
    
    // 重置用户序列，这样他们可以再次触发 (可选)
    userSequence = [];
}

const my_p = document.querySelector("p");
my_p.textContent = "波波波波波门！!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/波门.jpeg") {
    myImage.setAttribute("src", "images/波奇1.webp");
  } else {
    myImage.setAttribute("src", "images/波门.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } 
  else if (myName === "asher407") {
    showEgg();
  }
  else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};