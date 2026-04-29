// Função para navegar entre as telas
function showScreen(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    // Mostra a tela desejada
    document.getElementById(screenId).classList.add('active');

    // Se for a tela de estoque, carrega o gráfico
    if(screenId === 'screen-estoque') {
        renderizarGrafico();
    }
}

// Simulação de confirmação
function confirmAction(message) {
    document.getElementById('confirm-msg').innerText = message;
    document.getElementById('overlay-confirm').style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('overlay-confirm').style.display = 'none';
    showScreen('screen-home');
}

// Configuração do Gráfico (Chart.js)
function renderizarGrafico() {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar'],
            datasets: [
                {
                    label: 'Itens',
                    data: [4000, 3200, 2200],
                    backgroundColor: '#448aff'
                },
                {
                    label: 'A vencer',
                    data: [2500, 1700, 1200],
                    backgroundColor: '#b39ddb'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, ticks: { color: 'white' } },
                x: { ticks: { color: 'white' } }
            },
            plugins: { legend: { labels: { color: 'white' } } }
        }
    });
}