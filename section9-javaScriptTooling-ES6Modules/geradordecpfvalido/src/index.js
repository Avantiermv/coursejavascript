import GeraCPF from './modules/GERACPF';

import './assets/css/style.css';


(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerText = gera.geraNovoCPF();
})();