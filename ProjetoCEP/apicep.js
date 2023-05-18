//ESTRUTURA DA CHAMADA DA API
//FONTE: http://viacep.com.br/ws/${CEP}/json/

function preencheCampo(campos){
    document.getElementById("cep").value = campos.cep;
    document.getElementById("logradouro").value = campos.logradouro;
    document.getElementById("complemento").value = campos.complemento;
    document.getElementById("bairro").value = campos.bairro;
    document.getElementById("localidade").value = campos.localidade;
    document.getElementById("uf").value = campos.uf;
}

async function achaCEP(){
    let cep = document.getElementById("cep").value;
    console.log(cep);

    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const myInitGet = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const dados = await fetch(url, myInitGet);
    const elens = await dados.json();
    preencheCampo(elens);

}