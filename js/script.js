// sidebar menu and burger animation
const burger = document.querySelector(".ham");
const navLinks = document.querySelector(".localnav-menu-items");
const links = document.querySelectorAll(".localnav-menu-items li ");

burger.addEventListener('click', ()=> {
  // animate links
  navLinks.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });


  burger.classList.toggle("toggle");

});



// select option for shoe size 

let options = document.getElementById("options");
let optionList = ["US M 12", "US M 11", "US M 10","US M 9", "US M 8", "US M 7", "US M 6", "US M 5", "US M 4"];
let isOpen = false;

options.addEventListener("click", addToUIOptions);

function addToUIOptions(e) {
  if (e.target.classList.contains("hide-option")) {
     controlOptions(e);
  }
  else {
    const pickedOption = e.target;

    if (options.firstElementChild.classList.contains("hide-option")) {
      options.removeChild(options.firstElementChild);
    }
    options.insertAdjacentElement("afterbegin", pickedOption);

    deleteOptions();
    controlOptions(e);

  }
}

function controlOptions(e) {
  if (isOpen === false) {
    createOptions();
    options.classList.add("open");
    isOpen = true;
  }
  else {
    deleteOptions();
    options.classList.remove("open");
    isOpen = false;
  }
}


function deleteOptions() {
  while (options.childElementCount > 1) {
    options.removeChild(options.lastElementChild);
  }
}

function createOptions() {
  optionList.forEach(el => {
    if (options.firstChild.textContent !== el) {
      let option = document.createElement("div");
      option.className = "option";
      option.textContent = el;


      options.firstElementChild.insertAdjacentElement("afterend", option)
    };
  });
};


// read more script product description

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn")

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
    
  }
}




