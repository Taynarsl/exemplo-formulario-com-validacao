document.getElementById ('formulario').addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value.trim();
    let valido = true;
    if(nome === ''){
        valido=false;

    }
    if(valido){
        alert('Formulario enviado com sucesso.')
        this.reset()
    }

});
