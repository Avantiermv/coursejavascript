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
        const validarSenhas = this.validandoSenhas()

        if(validar && validarSenhas){
            alert("Formulário foi enviado!")
            this.formulario.submit();
        }
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

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) indicador = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) indicador = false;
            }
        }

        return indicador;
    }

    validandoSenhas(){
        let indicador = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');

        if(senha.value !== repetirSenha.value){
            this.criarErro(senha, "Campos senha e repetir senha não são iguais");
            this.criarErro(repetirSenha, "Campos senha e repetir senha não são iguais");
        }

        if(senha.value.length < 8){
            this.criarErro(senha, "Precisa ter mais de 8 caracteres");
            indicador = false;
        }else if(senha.value.legnth > 50){
            this.criarErro(senha, "CALMA MANO!");
        }


        return indicador;
    }

    validaCPF(campo){
        const cpf = new ValidandoCpf(campo.value);
        if(!cpf.valida(campo)) {
            this.criarErro(campo, "CPF Inválido");
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const user = campo.value;
        let indicador = true;
        if(user.length > 12 || user.length < 3){
            this.criarErro(campo, "Usuário tem que ter entre 3 a 12 caracteres");
            indicador = false;
        }


        if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.criarErro(campo, "Usuário deve ter letras e números");
            indicador = false;
        }


        return true;
    }

    criarErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('text-error');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validar = new ValidaForms();