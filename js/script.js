const teste = document.getElementById("parte1");
console.log (teste);

const gridSectionCSS = document.getElementsByTagName("grid-Section");
console.log (gridSectionCSS);

const gridSection1= document.getElementById ("grid-section-js");
console.log (gridSection1);

const selecionaPriImg = document.querySelector ("img");
console.log(selecionaPriImg);

const selecionaPriimg= document.querySelectorAll ("img");
console.log(selecionaPriimg);
const selecionaImg = document.querySelectorAll ("fotoimg");

const titulos = document.getElementsByClassName ("titulo");
const titulosArray = Array.from (titulos);
console.log (titulos);
console.log (titulosArray);

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
