 // Modelo da entidade = classe
class ContaBancaria{
    //agencia
    //numConta
    //saldo
    //limite
    constructor(){
        //caracteristicas ou atributos
        this.agencia = 1075;
        this.numeroConta = 8351125;
        this.saldo  = 50;
        this.limite = 450;
    }

    //métodos ou ações 
    depositar(valorDeposito){
        this.saldo += valorDeposito;
    }
    sacar(valorSaque){
        this.saldo -+ valorSaque;
    }
    consultarSaldo(){
        return this.saldo
    }
}

// Instancia da Classe ou criação de um objeto
let pedro = new ContaBancaria()

console.log(pedro.consultarSaldo());

let joao = new ContaBancaria()
let maria = new ContaBancaria()