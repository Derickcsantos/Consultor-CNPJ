document.getElementById('pesquisar').addEventListener('click', async function(){
    const cnpj = document.getElementById('inputCEP').value;
    let url = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const data = await url.json();
    
    const cnpjN = data.cnpj;
    const nome = data.nome_fantasia;
    const cep = data.cep;
    const razao = data.razao_social;
    const telefone = data.ddd_telefone_1

    console.log(`UF: ${cnpjN}`);
    console.log(`Cidade: ${nome}`);
    console.log(`Logradouro: ${razao}`);
    console.log(`CEP: ${cep}`);

    document.getElementById('pNOME').innerHTML = `<strong>Nome:</strong> ${nome}`
    document.getElementById('pCNPJ').innerHTML = `<strong>CNPJ:</strong> ${cnpjN}`
    document.getElementById('pRZ').innerHTML = `<strong>Razão social:</strong> ${razao}`
    document.getElementById('pCEP').innerHTML = `<strong>CEP:</strong> ${cep}`
    document.getElementById('pTEL').innerHTML = `<strong>Telefone:</strong> ${telefone}`
    
})

let popup = document.getElementById('popup')

function iniciar() {
    

    if(popup){
        popup.style.display = "block"
    }else{
        popup.style.display = "none"
    }
};

function fecharPopup() { 
    if (popup) {
        popup.style.display = "none";
    }
};