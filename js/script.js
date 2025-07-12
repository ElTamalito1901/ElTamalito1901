document.addEventListener("DOMContentLoaded", function () {
  // 1. Ocultar botones si el usuario está logueado
  const logueado = localStorage.getItem("usuarioLogueado") === "true";

  const btnRegistrar = document.getElementById("btnRegistrar");
  const btnIngresar = document.getElementById("btnIngresar");
  const opcionPerfil = document.getElementById("opcionPerfil"); // <- ID del li de Perfil
  document.body.style.overflow = "auto";

  if (btnRegistrar && btnIngresar) {
    if (logueado) {
      btnRegistrar.style.display = "none";
      btnIngresar.textContent = "Cerrar sesión";
      btnIngresar.href = "#";
      btnIngresar.onclick = function () {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "../html/index.html";
      };

      if (opcionPerfil) opcionPerfil.style.display = "block"; // Mostrar perfil si está logueado

    } else {
      btnRegistrar.style.display = "inline";
      btnIngresar.textContent = "Ingresar";
      btnIngresar.onclick = function () {
        window.location.href = "../html/login.html";
      };

      if (opcionPerfil) opcionPerfil.style.display = "none"; // Ocultar perfil si NO está logueado
    }
  }
 
  document.addEventListener("DOMContentLoaded", function () {
  const logueado = localStorage.getItem("usuarioLogueado") === "true";
  const perfil = document.getElementById("opcionPerfil");

  if (perfil) {
    perfil.style.display = logueado ? "block" : "none";
  }

  // Aquí puedes poner otros controles, como el de ocultar los botones de ingresar/registrar
});

  // 4. Menú lateral
  document.getElementById("overlay").addEventListener("click", closeSidebar);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebar();
      closeCart();
    }
  });

  // 5. Ver más / Ver menos categorías
  const btnVerMas = document.querySelector('.boton-ver-mas');
  const extraCategorias = document.querySelector('.categorias-extra');
  if (btnVerMas && extraCategorias) {
    btnVerMas.onclick = () => {
      const visible = extraCategorias.style.display === 'block';
      extraCategorias.style.display = visible ? 'none' : 'block';
      btnVerMas.innerHTML = visible ? '⬇ Ver más' : '⬆ Ver menos';
    };
  }

  // 6. Botón cerrar sesión (si existe)
  const cerrarSesion = document.getElementById("cerrarSesionBtn");
  if (cerrarSesion) {
    cerrarSesion.addEventListener("click", function () {     
      localStorage.removeItem("usuarioLogueado");
      localStorage.removeItem("datosUbicacion"); // <-- Esto es lo nuevo
      window.location.href = "../html/index.html";
    });
  }

  // Mostrar ubicación en el carrito lateral (sidecart)
const spanSidecart = document.getElementById("ubicacion-sidecart");

if (spanSidecart) {
  let datosUbicacion = null;

  const correo = localStorage.getItem("correoUsuario");
  if (correo) {
    const guardado = localStorage.getItem(`ubicacion_${correo}`);
    if (guardado) {
      datosUbicacion = JSON.parse(guardado);
    }
  } else {
    const predeterminada = localStorage.getItem("ubicacionPredeterminada");
    if (predeterminada) {
      // Si solo hay distrito, muéstralo así
      datosUbicacion = { distrito: predeterminada };
    }
  }

  if (datosUbicacion) {
    const { urbanizacion = "", manzana = "", numeroCalle = "", distrito = "" } = datosUbicacion;
    let ubicacionTexto = "";

    if (urbanizacion) ubicacionTexto += `${urbanizacion}`;
    if (manzana) ubicacionTexto += `, ${manzana}`;
    if (numeroCalle) ubicacionTexto += `, ${numeroCalle}`;
    if (distrito) ubicacionTexto += `, ${distrito}`;

    spanSidecart.textContent = ubicacionTexto || "Ubicación";
  } else {
    spanSidecart.textContent = "Ubicación";
  }
}

});

// 7 Sidebar
function openMenu() {
  document.querySelector(".sidebar").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
  document.querySelector(".sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

// 8 Carrito

 let quantity = 1;
        const basePrice = 59.90;

        function toggleCart() {
        mostrarInfoRestauranteSidecart();
        renderizarSidecart();

          const sidebar = document.getElementById('cartSidebar');
          const overlay = document.getElementById('overlay');

          sidebar.classList.add('active');
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateQuantity(change) {
            quantity = Math.max(1, quantity + change);
            document.getElementById('quantity').textContent = quantity;
            
            const newTotal = (basePrice * quantity).toFixed(2);
            document.getElementById('totalText').textContent = `TOTAL S/${newTotal}`;
            document.querySelector('.checkout-btn').textContent = `IR A PAGAR - S/${newTotal}`;
        }

        // Cerrar con Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCart();
            }
        });

function cerrarSidecart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  
  // Guardar estado de carrito vacío si deseas mantenerlo
  localStorage.setItem("carritoVacio", "true");

  // Cerrar visualmente el sidecart sin redirigir
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 9. OPCIONES DE UBICACIONES //
 
// === MODAL DE UBICACIÓN ===

// Abrir el modal
function abrirModalUbicacion() {
  document.getElementById('modalUbicacion').style.display = 'block';
}

// Cerrar el modal
function cerrarModalUbicacion() {
  document.getElementById('modalUbicacion').style.display = 'none';
}

// Ejecutar cuando el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formUbicacion");
  const correo = localStorage.getItem("correoUsuario");

  // Función para mostrar ubicación guardada
  function mostrarUbicacionGuardada() {
    if (!correo) {
      const ubicacionPredeterminada = localStorage.getItem("ubicacionPredeterminada");
    if (ubicacionPredeterminada) {
    document.getElementById("ubicacion-actual").textContent = ubicacionPredeterminada;
  }
}

    const key = `ubicacion_${correo}`;
    const guardado = localStorage.getItem(key);

    if (guardado) {
      const ubicacion = JSON.parse(guardado);
      document.getElementById("ubicacion-actual").textContent =
        ubicacion.distrito || "Ubicación";
    } else {
      document.getElementById("ubicacion-actual").textContent = "Ubicación";
    }
  }

  mostrarUbicacionGuardada(); // Mostrar al cargar

  if (!form || !correo) return; // Si no hay usuario, no sigue

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = {
      distrito: document.getElementById("distrito").value,
      urbanizacion: document.getElementById("urbanizacion").value,
      manzana: document.getElementById("manzana").value,
      numeroCalle: document.getElementById("numeroCalle").value,
      referencia: document.getElementById("referencia").value,
    };

    const key = `ubicacion_${correo}`;
    localStorage.setItem(key, JSON.stringify(datos));

    actualizarUbicacionSidecart(datos);

    document.getElementById("ubicacion-actual").textContent =
      datos.distrito || "Ubicación";

    // Mensaje de éxito
    const mensaje = document.getElementById("mensajeExito");
    mensaje.style.display = "block";

    setTimeout(() => {
  mensaje.style.display = "none";
  cerrarModalUbicacion();

  // ✅ Actualizar el header
  if (ubicacionActual) ubicacionActual.textContent = datos.distrito;

  // ✅ Actualizar el carrito lateral (sidecart)
 actualizarUbicacionSidecart(datos);

}, 1500);
  });
});


//OPCIONES DE UBICACIONES - FIN//


//NOMBRE DE USUARIO PARA EL HEADER //
document.addEventListener("DOMContentLoaded", function () {
  const logueado = localStorage.getItem("usuarioLogueado") === "true";
  const nombre = localStorage.getItem("nombreUsuario");

  const usuarioNombre = document.getElementById("usuario-nombre");
  const usuarioMenu = document.getElementById("usuario-menu");
  const flechaUsuario = document.getElementById("flecha-usuario");
  const btnUsuario = document.getElementById("btnUsuario");

  if (logueado && nombre) {
    usuarioNombre.textContent = nombre;

    btnUsuario.addEventListener("click", function () {
      const visible = usuarioMenu.style.display === "block";
      usuarioMenu.style.display = visible ? "none" : "block";
      flechaUsuario.src = visible ? "../imagenes/flechaabajo.png" : "../imagenes/flechaarriba.png";
    });
  } else {
    btnUsuario.addEventListener("click", function () {
      window.location.href = "../html/login.html";
    });
  }

  // Cerrar el menú al hacer clic fuera
  window.addEventListener("click", function (event) {
    const container = document.getElementById("usuario-container");
    if (!container.contains(event.target)) {
      usuarioMenu.style.display = "none";
      if (flechaUsuario) flechaUsuario.src = "../imagenes/flechaabajo.png";
    }
  });

  // Cerrar sesión
 const cerrarSesion = document.getElementById("cerrarSesion");
if (cerrarSesion) {
  cerrarSesion.addEventListener("click", function () {
    const correo = localStorage.getItem("correoUsuario"); // ✅ necesario
    if (correo) {
      localStorage.removeItem(`ubicacion_${correo}`);
    }
    localStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("correoUsuario");
   localStorage.removeItem("ubicacionPredeterminada"); // 🔥 Limpieza aquí
    window.location.href = "../html/login.html";
    });
  }
});

//NOMBRE DE USUARIO PARA EL HEADER - FIN //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario

    // Captura los valores
    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();
    const fechaNacimiento = form.fecha_nacimiento.value;
    const genero = form.genero.value;
    const clave = form.clave.value;
    const confirmarClave = form.confirmar_clave.value;

    // Validación de contraseñas
    if (clave !== confirmarClave) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Guardar en localStorage
    const usuario = {
      nombre,
      apellido,
      correo,
      telefono,
      fechaNacimiento,
      genero,
      clave // ⚠️ No se recomienda guardar contraseñas en texto plano
    };

    localStorage.setItem("usuarioDatos", JSON.stringify(usuario));
    localStorage.setItem("usuarioLogueado", "true");
    localStorage.setItem("correoUsuario", correo);

    // Redirige a la página principal u otra deseada
    window.location.href = "../html/index.html";
  });
});


function actualizarUbicacionSidecart(datos) {
  const spanSidecart = document.getElementById("ubicacion-sidecart");
  if (!spanSidecart || !datos) return;

  const partes = [
    datos.urbanizacion,
    datos.manzana,
    datos.numeroCalle,
    datos.distrito,
  ].filter(Boolean);

  spanSidecart.textContent = partes.length ? partes.join(", ") : "Ubicación";
}

document.addEventListener("DOMContentLoaded", function () {
  // Verifica si estamos en la página principal
  const cartItem = document.querySelector(".cart-item");
  const restaurantInfo = document.querySelector(".restaurant-info");
  const totalText = document.getElementById("totalText");
  const btnPagar = document.getElementById("btnPagar");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const clearCartBtn = document.querySelector(".clear-cart-btn");

  // Ocultar contenido del carrito y mostrar solo "Ir a comprar"
  if (cartItem) cartItem.style.display = "none";
  if (restaurantInfo) restaurantInfo.style.display = "none";
  if (totalText) totalText.style.display = "none";
  if (btnPagar) btnPagar.style.display = "none";
  if (clearCartBtn) clearCartBtn.style.display = "none";
  if (emptyCartMessage) emptyCartMessage.style.display = "block";
});

function agregarAlCarrito() {
  toggleCart();
  mostrarInfoRestauranteSidecart();

  const cartItem = document.querySelector(".cart-item");
  const totalText = document.getElementById("totalText");
  const btnPagar = document.getElementById("btnPagar");
  const clearCartBtn = document.querySelector(".clear-cart-btn");
  const emptyCartMessage = document.getElementById("emptyCartMessage");

  if (cartItem) cartItem.style.display = "flex";
  if (totalText) {
    totalText.style.display = "block";
    totalText.textContent = `TOTAL S/${(basePrice * quantity).toFixed(2)}`;
  }
  if (btnPagar) {
    btnPagar.style.display = "inline-block";
    btnPagar.textContent = `IR A PAGAR - S/${(basePrice * quantity).toFixed(2)}`;
  }
  if (clearCartBtn) clearCartBtn.style.display = "inline-block";
  if (emptyCartMessage) emptyCartMessage.style.display = "none";

  localStorage.setItem("carritoVacio", "false");
}






document.addEventListener("DOMContentLoaded", () => {
  const inputBusqueda = document.getElementById("inputBusqueda");
  const dropdown = document.getElementById("dropdownBusqueda");
const sugerencias = [
"Sushi",
"pollería",
"carnes",
"sándwiches",
"bebidas",
"Pizzas",
"postres",
"tacos",
"ensaladas",
"helados",
"mariscos",
  // Nombres de restaurantes:
  "Rockys",
  "Chinatown",
  "Chifa El norteñito",
  "Chicken Company",
  "Chifa Central",
  "El Angelo",
  "Roll de Diego",
  "Pollería Don Pollo",
  "Pizzería Italia",
  "Postrería Borcelle",
  "Chili's",
  "La ensaladeria",
  "Sopas del Perú",
  "Catering",
  "Papilistas",
  "Tacu Tacu",
  "Costa y sierra",
  "El Cortijo",
  "La Muralla",
  "Somos Perú",
  "Cevichería Tentaciones",
  "El gusto criollito",
  "Sazon Peruano",
  "Restaurant",
  "Doña Lasagna",
  "La casita de los Anticuchos",
  "Barbeque",
  "Los criollos",
  "Cevichería don marino",
  "Oh Peruano",
  "Cevicheria Bahia",
  "Esquites"
];


  inputBusqueda.addEventListener("input", () => {
    const valor = inputBusqueda.value.trim().toLowerCase();

    if (valor === "") {
      dropdown.style.display = "none";
      return;
    }

    const filtradas = sugerencias.filter(item =>
      item.toLowerCase().includes(valor)
    );

    if (filtradas.length === 0) {
      dropdown.innerHTML = `<div>No se encontraron resultados</div>`;
    } else {
      dropdown.innerHTML = filtradas
        .map(item => `<div onclick="seleccionarSugerencia('${item}')">${item}</div>`)
        .join("");
    }

    dropdown.style.display = "block";
  });

  // Ocultar dropdown si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".busqueda-container").contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});

function seleccionarSugerencia(texto) {
  document.getElementById("inputBusqueda").value = texto;
  document.getElementById("dropdownBusqueda").style.display = "none";

  const textoNormalizado = texto.toLowerCase();

  // ✅ Primero, buscar categoría
  const botonesCategorias = document.querySelectorAll(".boton-categoria");
  for (let boton of botonesCategorias) {
    const nombreCategoria = boton.getAttribute("data-categoria").toLowerCase();
    const textoVisible = boton.querySelector("span")?.textContent?.toLowerCase() || "";

    if (nombreCategoria === textoNormalizado || textoVisible === textoNormalizado) {
      irAMenuTienda(boton);
      return;
    }
  }

  // ✅ Si no es categoría, buscar restaurante
  const botonesPlatillos = document.querySelectorAll(".card-platillo-boton");
  for (let boton of botonesPlatillos) {
    const nombreRestaurante = boton.getAttribute("data-nombre")?.toLowerCase() || "";

    if (nombreRestaurante === textoNormalizado) {
      irACarta(boton);
      return;
    }
  }

  alert("No se encontró: " + texto);
}




function renderizarSidecart() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const cartItemsContainer = document.querySelector(".cart-items");
  const totalText = document.getElementById("totalText");
  const btnPagar = document.getElementById("btnPagar");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const clearCartBtn = document.querySelector(".clear-cart-btn");
  const restaurantInfo = document.getElementById("sidecart-restaurant-info");

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  let total = 0;

  carrito.forEach(item => {
    const precioUnitario = parseFloat(item.precio.replace(/[^\d.]/g, ""));
    total += precioUnitario * item.cantidad;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%23ffa500'/%3E%3Ctext x='30' y='35' text-anchor='middle' fill='white' font-size='12' font-family='Arial'%3E${encodeURIComponent(item.emoji)}%3C/text%3E%3C/svg%3E" alt="${item.nombre}" class="item-image">
      <div class="item-details">
        <div class="item-name">${item.nombre}</div>
        <div class="item-price">${item.precio}</div>
        <div class="quantity-controls">
          <button class="quantity-btn minus">-</button>
          <span class="quantity-display">${item.cantidad}</span>
          <button class="quantity-btn plus">+</button>
        </div>
      </div>
    `;

    const plusBtn = cartItem.querySelector(".plus");
    const minusBtn = cartItem.querySelector(".minus");

    plusBtn.addEventListener("click", () => {
      item.cantidad++;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarSidecart();
    });

    minusBtn.addEventListener("click", () => {
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        const idx = carrito.findIndex(x => x.nombre === item.nombre);
        carrito.splice(idx, 1);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarSidecart();
    });

    cartItemsContainer.appendChild(cartItem);
  });

  if (total > 0) {
    totalText.textContent = `TOTAL S/${total.toFixed(2)}`;
    btnPagar.textContent = `IR A PAGAR - S/${total.toFixed(2)}`;
    btnPagar.style.display = "inline-block";
    clearCartBtn.style.display = "inline-block";
    emptyCartMessage.style.display = "none";
    if (restaurantInfo) restaurantInfo.style.display = "flex";
  } else {
    totalText.textContent = `TOTAL S/0.00`;
    btnPagar.style.display = "none";
    clearCartBtn.style.display = "none";
    emptyCartMessage.style.display = "block";
    if (restaurantInfo) restaurantInfo.style.display = "none";
  }
}



document.addEventListener("DOMContentLoaded", () => {
  renderizarSidecart();
});

document.addEventListener("DOMContentLoaded", function () {
    const clearCartBtn = document.querySelector(".clear-cart-btn");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            // Aquí se debe limpiar la estructura visual del carrito
            const cartItems = document.querySelector(".cart-items");
            if (cartItems) {
                cartItems.innerHTML = "";
            }

            // También podrías limpiar datos en localStorage si los usas para el carrito
            localStorage.removeItem("cartItems");

            // Mostrar mensaje de carrito vacío
            const emptyCartMessage = document.getElementById("emptyCartMessage");
            if (emptyCartMessage) {
                emptyCartMessage.style.display = "block";
            }
        });
    }
});



function mostrarInfoRestauranteSidecart() {
  const restaurantInfo = document.getElementById("sidecart-restaurant-info");
  if (!restaurantInfo) return;

  const nombre = localStorage.getItem("restauranteNombre");
  const categoria = localStorage.getItem("restauranteCategoria");
  const icono = localStorage.getItem("restauranteIcono");

  if (nombre || categoria || icono) {
    restaurantInfo.style.display = "flex";

    const nombreElem = document.getElementById("sidecart-restaurant-name");
    const categoriaElem = document.getElementById("sidecart-restaurant-type");
    const logoElem = document.getElementById("sidecart-restaurant-logo");

    if (nombreElem) nombreElem.textContent = nombre || "Restaurante";
    if (categoriaElem) categoriaElem.textContent = categoria || "";

    if (logoElem) {
      if (icono && !icono.includes(".png") && !icono.includes(".jpg")) {
        logoElem.textContent = icono;
      } else if (icono) {
        logoElem.innerHTML = `<img src="${icono}" alt="Logo" style="width:40px;height:40px;">`;
      } else {
        logoElem.innerHTML = "";
      }
    }
  } else {
    restaurantInfo.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const clearCartBtn = document.querySelector(".clear-cart-btn");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      console.log("✅ Vaciar carrito clickeado");

      // Borra datos del carrito del LocalStorage
      localStorage.removeItem("carrito");
      localStorage.setItem("carritoVacio", "true");

      // Vacía visualmente los items
      const cartItemsContainer = document.querySelector(".cart-items");
      if (cartItemsContainer) {
        cartItemsContainer.innerHTML = "";
      }

      // NO OCULTES LA INFO DEL RESTAURANTE

      // Oculta textos y botones
      const totalText = document.getElementById("totalText");
      const btnPagar = document.getElementById("btnPagar");
      const clearCartBtn = document.querySelector(".clear-cart-btn");

      if (totalText) totalText.style.display = "none";
      if (btnPagar) btnPagar.style.display = "none";
      if (clearCartBtn) clearCartBtn.style.display = "none";

      // Muestra mensaje de carrito vacío
      const emptyCartMessage = document.getElementById("emptyCartMessage");
      if (emptyCartMessage) {
        emptyCartMessage.style.display = "block";s
      }
    });
  }
});

function irAPago() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    alert("¡Carro vacío! Agrega productos antes de comprar.");
    return;
  }

  // Guardar datos de restaurante
  const nombre = localStorage.getItem("restauranteNombre") || "";
  const categoria = localStorage.getItem("restauranteCategoria") || "";
  const icono = localStorage.getItem("restauranteIcono") || "";

  localStorage.setItem("pago_restaurante", JSON.stringify({
    nombre,
    categoria,
    icono
  }));

  // Guardar carrito
  localStorage.setItem("pago_carrito", JSON.stringify(carrito));

  // Guardar dirección
  const correo = localStorage.getItem("correoUsuario");
  let direccion = "";

  if (correo) {
    const ubicacion = JSON.parse(localStorage.getItem(`ubicacion_${correo}`)) || {};
    const partes = [
      ubicacion.urbanizacion,
      ubicacion.manzana,
      ubicacion.numeroCalle,
      ubicacion.distrito
    ].filter(Boolean);

    direccion = partes.join(" - ");
  } else {
    direccion = localStorage.getItem("ubicacionPredeterminada") || "";
  }

  localStorage.setItem("pago_direccion", direccion);

  // Ir a página de pago
  window.location.href = "../html/pago.html";
}

