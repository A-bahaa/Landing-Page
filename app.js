// the navBar will be the parent of the dynamically generated sections
const navBar = document.getElementById("navbar__list");
//holds a dynamically-generated nodeList of all html <section> tags
const navSecs = document.querySelectorAll("section");

/*
 * Start Helper Functions
 */
function navBuild() {
  //to prevent performance issues and to prevent adding unnecessary elements to the DOM.
  const fragment = document.createDocumentFragment();

  for (let navsec of navSecs) {
    //the parent of the anchor
    const liE = document.createElement("li");
    liE.setAttribute("class", navsec.getAttribute("id"));
    //the anchor itself
    const aE = document.createElement("a");
    //getting the anchor text from the data-nav att.
    aE.innerText = navsec.getAttribute("data-nav");
    //styling
    aE.setAttribute("class", "menu__link");
    //scrolling to the section whenever the anchor is "clicked"
    //for a smooth scrolling , setting the behavior property to "smooth"
    aE.addEventListener("click", function () {
      navsec.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
    liE.appendChild(aE);
    fragment.appendChild(liE);
  }
  navBar.appendChild(fragment);
}

//building the nav;
navBuild();

//list contain all the list-items from the nav
navLi = document.querySelectorAll("nav ul li");

document.addEventListener("scroll", function () {
  let current = "";
  for (let section of navSecs) {
    const sectionTop = section.offsetTop;
    const sectioHeight = section.clientHeight;
    //if the user scrolls apprpiate amount to be in a specific section , that section will be assigned to the current var
    if (pageYOffset >= sectionTop - sectioHeight / 3) {
      current = section.getAttribute("id");
    } else {
      break;
    }
  }
  //first remove the active class from all the li(s)
  //then when you find which li has a class equal to the current var , add the class active to it
  for (let li of navLi) {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  }
});
