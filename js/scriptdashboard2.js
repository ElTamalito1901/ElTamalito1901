        document.addEventListener('DOMContentLoaded', () => {
            // Gráfico de Barras - Tipos de comida
            new Chart(document.getElementById('bar-chart'), {
                type: 'bar',
                data: {
                    labels: ['9 - 12 am', '12 - 3 pm', '3 - 6 pm', '6 - 9 pm', '9 pm - 12 am', '12 am - 9 am'],
                    datasets: [{
                        label: 'Compras por hora',
                        data: [80, 230, 90, 300, 150, 40],
                        backgroundColor: 'rgba(0, 47, 255, 0.6)',
                        borderColor: 'rgb(21, 2, 73)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });

            // Gráfico de Líneas - Gastos por mes
            new Chart(document.getElementById('line-chart'), {
                type: 'line',
                data: {
                    labels: ['Miraflores', 'San Isidro', 'Surco', 'San Borja', 'La Molina', 'Barranco'],
                    datasets: [{
                        label: 'Distritos con mas pedidos en el dias',
                        data: [120, 95, 140, 80, 110, 75],
                        borderColor: 'rgb(156, 158, 11)',
                        fill: false,
                        tension: 0.1
                    }]
                }
            });

            // Gráfico de Pastel - Proporción de gastos
            new Chart(document.getElementById('pie-chart'), {
                type: 'pie',
                data: {
                    labels: ['Pizza', 'Sushi', 'Pollo a la brasa', 'Hamburguesas', 'Tacos', 'Postres'],
                    datasets: [{
                        data: [35, 50, 40, 30, 25, 20],
                        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f40'],
                        hoverOffset: 4
                    }]
                }
            });

            // Gráfico de Radar - Preferencias
            new Chart(document.getElementById('radar-chart'), {
                type: 'radar',
                data: {
                    labels: ['Pizza', 'Sushi', 'Pollo a la brasa', 'Hamburguesas', 'Tacos', 'Postres'],
                    datasets: [{
                        label: 'Satisfacción del Cliente',
                        data: [85, 75, 90, 80, 58, 95],
                        fill: true,
                        backgroundColor: 'rgba(230, 25, 25, 0.2)',
                        borderColor: 'rgb(255, 0, 0)',
                        pointBackgroundColor: 'rgb(255, 0, 0)'
                    }]
                },
                options: {
                    elements: {
                        line: { borderWidth: 2 }
                    }
                }
            });
        });
