// Função para executar loops
function gerarLoop() {
    var valor = document.getElementById('valor').value;
    var resultado = '';

    // Laço while
    var x = 0;
    resultado += 'Loop <span style="color: orange;">While</span>:<br>';
    while (x <= valor) {
        resultado += x + ' ';
        x++;
    }

    // Laço for
    resultado += '<br><p>Loop <span style="color: green;">For</span>:<br>';
    for (var y = 0; y <= valor; y++) {
        resultado += y + ' ';
    }

    // Exibe os resultados
    document.getElementById('loop').innerHTML = resultado;
}

// Função para escolher item do cardápio
function Item(elemento) {
    var resposta = '';

    switch (elemento) {
        case 1:
            resposta = 'Você pediu Cini framboesa';
            break;
        case 2:
            resposta = 'Você pediu Água de coco';
            break;
        case 3:
            resposta = 'Você pediu Coca-Cola';
            break;
        case 4:
            resposta = 'Você chamou o Garçom';
            break;
        default:
            resposta = 'Digite <strong>apenas</strong> números do 1 ao 4';
    }

    // Exibe a resposta
    document.getElementById('resposta').innerHTML = resposta;
}