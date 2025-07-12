        // Slideshow functionality
        const imagenes = [
            "data:image/svg+xml;charset=UTF-8,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23FF6B35'/%3E%3Ctext x='300' y='200' text-anchor='middle' dy='0.3em' fill='white' font-size='40'%3E🍕 Pizza Deliciosa%3C/text%3E%3C/svg%3E",
            "data:image/svg+xml;charset=UTF-8,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23FF8A5B'/%3E%3Ctext x='300' y='200' text-anchor='middle' dy='0.3em' fill='white' font-size='40'%3E🍔 Hamburguesas%3C/text%3E%3C/svg%3E",
            "data:image/svg+xml;charset=UTF-8,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23FFA882'/%3E%3Ctext x='300' y='200' text-anchor='middle' dy='0.3em' fill='white' font-size='40'%3E🍜 Ramen Especial%3C/text%3E%3C/svg%3E"
        ];
        
        let indiceActual = 0;
        
        function cambiarImagen(direccion) {
            const imagenElement = document.getElementById('imagen-dinamica');
            imagenElement.style.opacity = '0.5';
            
            setTimeout(() => {
                indiceActual += direccion;
                if (indiceActual >= imagenes.length) indiceActual = 0;
                if (indiceActual < 0) indiceActual = imagenes.length - 1;
                
                imagenElement.src = imagenes[indiceActual];
                imagenElement.style.opacity = '1';
            }, 250);
        }

        // Auto-slide every 5 seconds
        setInterval(() => {
            cambiarImagen(1);
        }, 5000);

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255,255,255,0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'white';
                header.style.backdropFilter = 'none';
            }
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Bienvenido a SazónApp! Te contactaremos pronto con ofertas exclusivas.');
        });

        // Category filter functionality
        document.querySelectorAll('.boton-categoria').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.boton-categoria').forEach(btn => {
                    btn.style.backgroundColor = 'white';
                    btn.style.color = '#FF6B35';
                });
                
                // Add active class to clicked button
                this.style.backgroundColor = '#FF6B35';
                this.style.color = 'white';
            });
        });

        // Add to cart functionality
        document.querySelectorAll('.agregar-carrito-falso').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                this.style.backgroundColor = '#4CAF50';
                this.textContent = '✓ Agregado';
                
                setTimeout(() => {
                    this.style.backgroundColor = '#FF6B35';
                    this.textContent = 'Agregar al Carrito';
                }, 2000);
            });
        });
