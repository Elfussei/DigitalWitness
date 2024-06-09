// Script para adicionar símbolo de grau após a temperatura, formato de hora nos campos de hora e o símbolo de porcentagem após a umidade
document.addEventListener('DOMContentLoaded', function() {
    // Campo de temperatura
    document.getElementById('temperatura').addEventListener('input', function() {
        let valor = this.value.trim();
        valor = valor.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
        if (valor !== '') {
            valor += '°';
        }
        this.value = valor;
    });

    // Campos de hora de início e fim do processo
    const horaInicioProcesso = document.getElementById('horaInicioProcesso');
    const horaFimProcesso = document.getElementById('horaFimProcesso');
    
    horaInicioProcesso.addEventListener('input', function() {
        // Remove caracteres não numéricos
        this.value = this.value.replace(/[^\d:]/g, '');
        // Formata para o formato HH:MM
        this.value = this.value.replace(/^(\d{2})(\d{1,2})$/, '$1:$2');
    });
    
    horaFimProcesso.addEventListener('input', function() {
        // Remove caracteres não numéricos
        this.value = this.value.replace(/[^\d:]/g, '');
        // Formata para o formato HH:MM
        this.value = this.value.replace(/^(\d{2})(\d{1,2})$/, '$1:$2');
    });

    // Campo de umidade
    document.getElementById('humidade').addEventListener('input', function() {
        let valor = this.value.trim();
        valor = valor.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
        if (valor !== '') {
            valor += '%';
        }
        this.value = valor;
    });
});