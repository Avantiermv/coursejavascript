class ValidaForms{
    constructor(){
        this.formulario = document.querySelector('.forms');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const validar = this.validandoCampos();
    }

    validandoCampos(){
        let indicador = true;

        for(let textError of this.formulario.querySelectorAll('.text-error')){
            textError.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criarErro(campo, `Rapaz, esse campo aqui ó ${label} não tá preenchido não`);
                indicador=false;
            }
        }
    }

    criarErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('text-error');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validar = new ValidaForms();