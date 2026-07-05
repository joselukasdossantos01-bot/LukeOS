export class Shell {
    constructor() {
        this.commands = new Map();
        this.init();
    }

    init() {
        this.register('help', () => 'Comandos disponíveis: help, clear, echo');
        this.register('clear', () => {
            document.getElementById('output').innerHTML = '';
            return '';
        });
        this.register('echo', (args) => args.join(' '));
    }

    register(name, callback) {
        this.commands.set(name, callback);
    }

    exec(input) {
        const parts = input.trim().split(/\s+/);
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (this.commands.has(command)) {
            return this.commands.get(command)(args);
        }
        return `Comando não encontrado: ${command}. Digite "help" para ver a lista.`;
    }
}
