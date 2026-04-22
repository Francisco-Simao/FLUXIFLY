// Função para trocar de tela
function showScreen(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Mostra apenas a tela escolhida
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Quando a página carregar
window.onload = function() {
    // Espera 3 segundos e vai para a tela de login
    setTimeout(() => {
        showScreen('login');
    }, 3000);

    // Botão Entrar vai para a Home
    const btnEntrar = document.getElementById('btnEntrar');
    if (btnEntrar) {
        btnEntrar.addEventListener('click', function() {
            showScreen('home');
        });
    }

    // Adiciona a animação da linha do scanner
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scan {
            0% { transform: translateY(-100px); opacity: 0.8; }
            50% { transform: translateY(100px); opacity: 0.5; }
            100% { transform: translateY(-100px); opacity: 0.8; }
        }
        .scan-line {
            animation: scan 2s linear infinite;
        }
    `;
    document.head.appendChild(style);
};