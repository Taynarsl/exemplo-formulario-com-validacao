document.getElementById ('formulario').addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let email = document.getElementById('email').value.trim();
    let valido = true;
    let erros='';
    if(nome === ''){
        valido=false;
        erros+='nome vazio, ';
    }
    if(!email.includes('@')){
        valido=false;
        erros+='email sem o arroba, ';
    }
    if(senha.length<6){
        valido=false;
        erros+='senha deve ter 6 caracteres ou mais';
    }
    if(valido){
        alert('Formulario enviado com sucesso.')
        this.reset()
    }else{
        alert('Formulario esta com erros: '+erros)   
    }

});
