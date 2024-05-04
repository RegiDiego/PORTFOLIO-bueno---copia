//Header

window.addEventListener("scroll", function(){ // Añadir clase "sticky" al header cuando se hace scroll
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



//Portfolio CARDS Botón de abrir y cerrar las cards del portfolio cuando haga click.

const portfolioModals =document.querySelectorAll(".portfolio-model");
const imgCards =document.querySelectorAll(".img-card");
const portfolioCloseBtns =document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){ // Función para mostrar el modal
    portfolioModals[modalClick].classList.add("active");
}

// Agregar evento click a cada imagen del portfolio
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

// Agregar evento click a cada botón de cierre del modal
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
          // Remover la clase "active" de todos los modals del portfolio
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


// Menú de navegación desplegable con las categorías en dispositivos móviles

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");  
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a")

// Abrir el menú al hacer clic en el botón del menú
menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

// Cerrar el menú al hacer clic en el botón de cierre
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

// Cerrar el menú al hacer clic en un enlace del menú
navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
