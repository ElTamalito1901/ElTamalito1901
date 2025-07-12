        function goBack() {
            window.history.back();
            console.log('Navegando hacia atrás...');
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            const submitBtn = event.target.querySelector('.submit-btn');
            const loading = submitBtn.querySelector('.loading');
            const text = submitBtn.querySelector('span:last-child');
            const successMessage = document.getElementById('successMessage');
            
            // Mostrar estado de carga
            loading.style.display = 'inline';
            text.textContent = 'PROCESANDO...';
            submitBtn.disabled = true;
            
            // Simular envío del formulario
            setTimeout(() => {
                // Mostrar mensaje de éxito
                successMessage.style.display = 'block';
                
                // Resetear formulario
                event.target.reset();
                
                // Restaurar botón
                loading.style.display = 'none';
                text.textContent = '🚀 COMENZAR COMO PARTNER';
                submitBtn.disabled = false;
                
                // Scroll hacia arriba para mostrar el mensaje
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 2000);
        }

        // Animaciones suaves al cargar
        window.addEventListener('load', () => {
            const elements = document.querySelectorAll('.content-left > *, .registration-form');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.6s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });