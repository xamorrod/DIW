document.addEventListener("DOMContentLoaded", function () {
  let indice = 0;
  mostrarImagen(indice);

  document.querySelector(".prev").addEventListener("click", function () {
    cambiarImagen(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    cambiarImagen(1);
  });

  function cambiarImagen(n) {
    mostrarImagen((indice += n));
  }

  function mostrarImagen(n) {
    const imagenes = document.getElementsByClassName("carrusel-img");
    if (n >= imagenes.length) {
      indice = 0;
    }
    if (n < 0) {
      indice = imagenes.length - 1;
    }
    for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].style.display = "none";
    }
    imagenes[indice].style.display = "block";
  }
});
