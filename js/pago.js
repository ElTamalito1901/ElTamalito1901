  function goBack() {
          window.history.back();
        }

 // Función para abrir el modal
        function openModal() {
            document.getElementById('paymentModal').classList.add('active');
            document.body.style.overflow = 'hidden'; // Evitar scroll del body
        }

        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('paymentModal').classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaurar scroll del body
        }

        // Función para procesar el pago
function processPayment() {
    const cardNum = document.getElementById('modalCardNum').value;
    const cardName = document.getElementById('modalCardName').value;
    const expiry = document.getElementById('modalExpiry').value;
    const cvv = document.getElementById('modalCvv').value;
    const email = document.getElementById('modalEmail').value;

    if (!cardNum || !cardName || !expiry || !cvv || !email) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // ✅ BORRAR TODO DEL SIDECART
    localStorage.removeItem("carrito");
    localStorage.removeItem("restauranteNombre");s
    localStorage.removeItem("restauranteCategoria");
    localStorage.removeItem("restauranteIcono");
    localStorage.setItem("carritoVacio", "true");

    // ✅ Borra también datos de pago (opcional)
    localStorage.removeItem("pago_carrito");
    localStorage.removeItem("pago_restaurante");
    localStorage.removeItem("pago_direccion");

    closeModal();
    showSuccessModal();
}


        // Cerrar modal al hacer clic fuera de él
        document.getElementById('paymentModal').onclick = function(e) {
            if (e.target === this) {
                closeModal();
            }
        }

        // Alternar métodos de pago
        document.getElementById('creditCardOption').onclick = function() {
            document.querySelectorAll('.payment').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
            openModal(); // Abrir modal al seleccionar tarjeta
        };

        document.getElementById('cashOption').onclick = function() {
            document.querySelectorAll('.payment').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
        };

        // Formatear número de tarjeta (modal)
        document.getElementById('modalCardNum').oninput = (e) => {
            let val = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            e.target.value = val.replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
        };

        // Formatear fecha (modal)
        document.getElementById('modalExpiry').oninput = (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
            e.target.value = val;
        };

        // Solo números en CVV (modal)
        document.getElementById('modalCvv').oninput = (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
        };

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

         //PAGO 


        document.addEventListener("DOMContentLoaded", () => {
  // Dirección
  const direccion = localStorage.getItem("pago_direccion") || "";
  const direccionInput = document.querySelector(".left input.input");
  if (direccionInput && direccion) {
    direccionInput.value = direccion;
  }

  // Restaurante (opcional: podrías mostrarlo en el logo o encabezado)
  const restauranteData = JSON.parse(localStorage.getItem("pago_restaurante")) || {};
  console.log("Restaurante:", restauranteData);

  // Productos
  const carrito = JSON.parse(localStorage.getItem("pago_carrito")) || [];
  const productsContainer = document.querySelector(".left .product");
  const panelLeft = document.querySelector(".left");

  if (carrito.length > 0) {
    // Limpiar el producto dummy que está fijo en tu HTML
    if (productsContainer) productsContainer.remove();

    carrito.forEach(item => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <div class="product-img">${item.emoji || "🍽️"}</div>
        <div class="product-info">
          <h3>${item.nombre}</h3>
          <p>Entrega inmediata</p>
          <p>⏱️ 15 - 20 min</p>
          <p>${item.precio}</p>
        </div>
      `;
      panelLeft.appendChild(div);
    });
  }

  // Resumen
  let subtotal = 0;
  carrito.forEach(item => {
    const price = parseFloat(item.precio.replace(/[^\d.]/g, ""));
    subtotal += price * item.cantidad;
  });

  const envio = 1.10;
  const total = subtotal + envio;

  document.querySelector(".summary .row:nth-child(1) span:last-child").textContent =
    `S/${subtotal.toFixed(2)}`;
  document.querySelector(".summary .row:nth-child(2) span:last-child").textContent =
    `S/${envio.toFixed(2)}`;
  document.querySelector(".summary .row.total span:last-child").textContent =
    `S/${total.toFixed(2)}`;

  // Actualizar texto del botón de procesar pago
  const pagarBtn = document.querySelector(".modal .btn");
  if (pagarBtn) {
    pagarBtn.textContent = `Procesar Pago - S/${total.toFixed(2)}`;
  }
});


function showSuccessModal() {
  document.getElementById('successModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function limpiarSidecartCompleto() {
  localStorage.removeItem("carrito");
  localStorage.removeItem("restauranteNombre");
  localStorage.removeItem("restauranteCategoria");
  localStorage.removeItem("restauranteIcono");
  localStorage.removeItem("pago_carrito");
  localStorage.removeItem("pago_restaurante");
  localStorage.removeItem("pago_direccion");
  localStorage.setItem("carritoVacio", "true");
}


function goToIndex() {
    limpiarSidecartCompleto();
  window.location.href = "../html/index.html";
}
