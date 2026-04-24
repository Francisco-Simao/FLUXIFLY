// Função para navegar entre as telas
function navigateTo(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Mostra a tela desejada
    document.getElementById(screenId).classList.add('active');
}

// Lógica de confirmação com volta automática para a Home
function confirmAction(type) {
    const text = type === 'entrada' ? 'Entrada confirmada' : 'Saída confirmada';
    document.getElementById('success-text').innerText = text;
    
    navigateTo('screen-success');

    // Após 2 segundos, volta para a Home sozinho
    setTimeout(() => {
        navigateTo('screen-home');
    }, 2000);
}

// Simulando a Splash Screen sumindo após 3 segundos
setTimeout(() => {
    navigateTo('screen-login');
}, 3000);