document.getElementById('pesquisar').addEventListener('click', async function(){
    const cnpj = document.getElementById('inputCEP').value;
    let url = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const data = await url.json();
    
    const cnpjN = data.cnpj;
    const nome = data.nome_fantasia;
    const cep = data.cep;
    const razao = data.razao_social;

    console.log(`UF: ${cnpjN}`);
    console.log(`Cidade: ${nome}`);
    console.log(`Logradouro: ${razao}`);
    console.log(`CEP: ${cep}`);

    document.getElementById('pUF').innerHTML = `<strong>UF:</strong> ${cnpjN}`
    document.getElementById('pLocal').innerHTML = `<strong>Cidade:</strong> ${nome}`
    document.getElementById('pRua').innerHTML = `<strong>Rua:</strong> ${razao}`
    document.getElementById('pCEP').innerHTML = `<strong>CEP:</strong> ${cep}`
    
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