function cambiarNumero(valor) {
  const numeroSpan = document.getElementById("numero-rating");
  let actual = parseFloat(numeroSpan.textContent);

  // Sumar o restar
  let nuevo = actual + valor;

  // Limitar entre 0 y 5
  if (nuevo < 0) nuevo = 0;
  if (nuevo > 5) nuevo = 5;

  // Redondear a 0.5 exactos para evitar decimales extraños
  nuevo = Math.round(nuevo * 2) / 2;

  numeroSpan.textContent = nuevo.toFixed(1);
}

function abrirFiltro() {
  const valorFiltro = parseFloat(document.getElementById("numero-rating").textContent);
  const platillos = document.querySelectorAll(".card-platillo-boton");

  platillos.forEach((card) => {
    const rating = parseFloat(card.querySelector(".promedio").textContent);
    if (rating === valorFiltro) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  

  // Mostrar el botón "Ver todos" después de filtrar
  const btnVerTodos = document.getElementById("btnVerTodos");
  if (btnVerTodos) btnVerTodos.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const platillos = document.querySelectorAll(".card-platillo-boton");
  const btnVerTodos = document.getElementById("btnVerTodos");

  // Mostrar todos desde el inicio
  platillos.forEach((p) => {
    p.style.display = "block";
  });

  if (btnVerTodos) {
    btnVerTodos.addEventListener("click", () => {
      platillos.forEach(p => (p.style.display = "block")); // ✅ Mostrar todos sin importar filtro previo
      btnVerTodos.style.display = "none"; // Ocultar el botón tras usarse
    });
  }
});
/**
 * Banner rotator
 */
document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll('.banner-link');
  let index = 0;

  if (banners.length > 1) {
    setInterval(() => {
      banners[index].classList.remove('active');
      index = (index + 1) % banners.length;
      banners[index].classList.add('active');
    }, 3000);
  }
});

  const imagenes = [
    "../imagenes/imagen1.jpg",
    "../imagenes/imagen2.jpg",
    "../imagenes/imagen3.jpg"
  ];
  let indiceActual = 0;
  function cambiarImagen(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    document.getElementById("imagen-dinamica").src = imagenes[indiceActual];
  }
  setInterval(() => cambiarImagen(1), 5000);



document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("categoriaScroll");
  const flechaIzquierda = document.querySelectorAll(".flecha-scroll")[0];
  const flechaDerecha = document.querySelectorAll(".flecha-scroll")[1];

  function actualizarFlechas() {
    // ¿Estamos al inicio?
    flechaIzquierda.style.display = scrollContainer.scrollLeft <= 0 ? "none" : "inline-block";
    // ¿Estamos al final?
    const scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    flechaDerecha.style.display = scrollContainer.scrollLeft >= scrollMax - 1 ? "none" : "inline-block";
  }

  // Función para hacer scroll
  window.scrollCategorias = function (direccion) {
    const scrollPaso = 200; // píxeles por clic
    scrollContainer.scrollBy({
      left: direccion * scrollPaso,
      behavior: "smooth"
    });
    // Esperar a que termine el scroll animado para evaluar
    setTimeout(actualizarFlechas, 400);
  };

  // Inicialmente evaluamos
  actualizarFlechas();

  // También actualizamos al hacer scroll manual
  scrollContainer.addEventListener("scroll", actualizarFlechas);
});

function irAMenuTienda(elemento) {
  const categoria = elemento.getAttribute('data-categoria');
  window.location.href = `../html/menutiendas.html?categoria=${encodeURIComponent(categoria)}`;
}


  document.addEventListener("DOMContentLoaded", function () {
    const logoLink = document.getElementById("logoRockysLink");

    if (logoLink) {
      logoLink.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        localStorage.setItem("restauranteSeleccionado", "rockys");
        window.location.href = "../html/cartarestaurante.html";
      });
    }
  });

  document.getElementById('btnPolloFamiliar').addEventListener('click', function() {
  document.getElementById('modalRockys').classList.remove('hidden');
});
  
  // 2. Cambio de imagen automático


  // 3. Modal de Pollo
  const btnPollo = document.getElementById('btnPolloFamiliar');
  const modalPollo = document.getElementById('modalPollo');
  const cerrarPollo = document.querySelector('#modalPollo .cerrar');

  if (btnPollo && modalPollo && cerrarPollo) {
    btnPollo.onclick = () => modalPollo.style.display = "block";
    cerrarPollo.onclick = () => modalPollo.style.display = "none";
    window.onclick = (e) => {
      if (e.target === modalPollo) modalPollo.style.display = "none";
    };
  }

//MODAL PARA IR CARTA RESTURANTE
document.addEventListener("DOMContentLoaded", () => {
  const logosLinks = document.querySelectorAll(".modal a .logo-restaurante");

  logosLinks.forEach(logoImg => {
    logoImg.parentElement.addEventListener("click", function(e) {
      e.preventDefault();

      let modal = logoImg.closest(".modal");
      if (!modal) return;

      const nombre = modal.querySelector(".dish-name")?.textContent?.trim() || "Restaurante";

      // Buscar la categoría:
      let categoria = "Categoría desconocida";
      const modalId = modal.parentElement?.id;
      if (modalId) {
        const btn = document.querySelector(`button.card-platillo-boton[onclick*="${modalId}"]`);
        if (btn) {
          categoria = btn.getAttribute("data-categoria") || categoria;
        }
      }

      const icono = logoImg.getAttribute("src");

      localStorage.setItem("restauranteNombre", nombre);
      localStorage.setItem("restauranteCategoria", categoria);
      localStorage.setItem("restauranteIcono", icono);

      window.location.href = "../html/cartarestaurante.html";
    });
  });
});

function irACarta(elemento) {
  // Intenta leer atributos data-... desde el elemento
  const nombre = elemento.getAttribute("data-nombre") || 
                 elemento.querySelector(".restaurant-name")?.textContent || 
                 elemento.querySelector(".nombre-platillo")?.textContent || 
                 "Restaurante";

  const categoria = elemento.getAttribute("data-categoria") || 
                    elemento.querySelector(".restaurant-category")?.textContent || 
                    "Categoría";

  const icono = elemento.getAttribute("data-icono") || 
                elemento.querySelector(".logo-restaurante")?.getAttribute("src") || 
                "";

  localStorage.setItem("restauranteNombre", nombre);
  localStorage.setItem("restauranteCategoria", categoria);
  localStorage.setItem("restauranteIcono", icono);

  window.location.href = "../html/cartarestaurante.html";
}


