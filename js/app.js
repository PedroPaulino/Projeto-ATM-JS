 // Modelo da entidade = classe
class ContaBancaria{

    constructor(nome , agencia, numeroConta, saldo, limite){
        //caracteristicas ou atributos
        this.titular = nome;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo  = saldo;
        this.limite = limite;
    }

    //métodos de exibição
    consultarTitular(){
        return this.titular;
    }
    consultarAgencia(){
        return this.agencia;
    } 
    consultarConta(){
        return this.numeroConta;
    }
    consultarSaldo(){
        return this.saldo
    }
    consultarLimite(){
        return this.limite;
    }

    //métodos de modificação
    deposita(valorDeposito){
        this.saldo += valorDeposito;
    }
    saca(valorSaque){
        this.saldo -= valorSaque;
    }
    
}

// Instancia da Classe ou criação de um objeto
let pedro = new ContaBancaria('pedro',1111,01010111,0,800)
let joao = new ContaBancaria('joao',2222,01001111,0,800)
let maria = new ContaBancaria('maria',3333,01010111,0,800)

console.log(pedro.consultarAgencia());

// Função anonima para pegar o nome da conta
//Função para informações da conta
function infoConta(nome){

    if(nome){

    var titular = nome.consultarTitular();

    document.getElementById("infoConta").innerHTML = `

    <p>Agência: <span id="agenciaBanco"> </span>.</p>
    <p>Conta: <span id="contaBanco"> </span>.</p>
    <p>Saldo: R$<span id="saldoBanco"> </span>.</p>
    <p>Limite: R$<span id="limiteBanco"> </span>.</p>
        <ul>
            <li><button onclick="depositaValor(50,${titular})">Depositar R$50,00.</button></li>
            <li><button onclick="sacaValor(50,${titular})">Sacar R$50,00.</button></li>
            <li><button onclick="sairDaConta()">SAIR</button></li>
        </ul>
    <p id="avisoCheque"></p>
    <p id="avisoLimite"></p>
    
    `;

    document.getElementById("agenciaBanco").innerText = nome.consultarAgencia();
    document.getElementById("contaBanco").innerText = nome.consultarConta();
    document.getElementById("saldoBanco").innerText = nome.consultarSaldo();
    document.getElementById("limiteBanco").innerText = nome.consultarLimite();
    
    }
       
}
//Função para depositar
function depositaValor(valor, titular){

    let saldoConta = titular.consultarSaldo();
    let limiteConta = titular.consultarLimite();

    if(saldoConta != limiteConta){
        titular.deposita(valor);
        document.getElementById("saldoBanco").innerText = titular.consultarSaldo();
    }else{

        document.getElementById("avisoLimite").innerHTML = `
        
        <p> Limite atingido. Contate o seu Gerente </p>
        
        `;
    }
   
}
//Função para sacar
function sacaValor(valor, titular, cheque = 'negado'){
    let saldoConta = titular.consultarSaldo();
    let nomeTitular = titular.consultarTitular();

    if(saldoConta != 0){
        titular.saca(valor);
        document.getElementById("saldoBanco").innerText = titular.consultarSaldo();
    }else{
        document.getElementById("saldoBanco").innerText = titular.consultarSaldo();
        document.getElementById("avisoCheque").innerHTML = `
        
        <p> O seu saldo está em R$0,00. Deseja utilizar cheque especial ? </p>
        <button onclick="sacaValor(${valor},${nomeTitular},'aceito')">SIM</button> 
        `;
    }

    if((cheque == 'aceito')){   
        titular.saca(valor);
        document.getElementById("saldoBanco").innerText = titular.consultarSaldo();
          
       
    }
  
}

function sairDaConta(){
    document.getElementById("infoConta").innerHTML = '';
}
