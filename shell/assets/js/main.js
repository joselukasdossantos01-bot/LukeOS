import { Shell } from '../../Shell.js';

document.addEventListener('DOMContentLoaded', () => {
    const shell = new Shell();
    const output = document.getElementById('output');
    const input = document.getElementById('command-input');

    // Função para adicionar texto ao terminal
    function print(text) {
        const line = document.createElement('div');
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    // Escuta a tecla Enter no input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commandLine = input.value;
            input.value = '';

            // Mostra o comando digitado no histórico
            print(`luke-os:$ ${commandLine}`);

            if (commandLine.trim() !== '') {
                // Executa o comando através do interpretador do Shell
                const result = shell.exec(commandLine);
                if (result) print(result);
            }
        }
    });
});
