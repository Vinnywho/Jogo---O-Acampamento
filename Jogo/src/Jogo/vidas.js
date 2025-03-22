// Sistema de vidas
let vidas = 3;

export function getVidas() {
    return vidas;
}

export function perderVida() {
    vidas--;
    atualizarVidasUI();
    if (vidas <= 0) {
        return true; // Indica game over
    }
    return false;
}

export function resetarVidas() {
    vidas = 3;
    atualizarVidasUI();
}

function atualizarVidasUI() {
    const vidasContainer = document.getElementById('vidas-container');
    if (vidasContainer) {
        vidasContainer.innerHTML = `${'❤️'.repeat(vidas)}${'🖤'.repeat(3 - vidas)}`;
    }
}