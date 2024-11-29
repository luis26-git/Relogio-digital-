
// Função para atualizar o relógio
function atualizarRelogio() {
    // Cria um objeto de data
    const agora = new Date();

    // Pega as horas, minutos e segundos
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero à esquerda se for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Atualiza os elementos do HTML com os valores calculados
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Chama a função atualizarRelogio a cada 1000ms (1 segundo)
setInterval(atualizarRelogio, 1000);

// Chama a função logo de início para que o relógio comece a funcionar imediatamente
atualizarRelogio();





