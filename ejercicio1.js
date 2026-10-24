class CuentaBancaria {
    #numero;
    titular;
    #saldo;
    constructor(numero, titular, saldo){
        this.#numero=numero;
        this.titular=titular;
        this.#saldo=saldo;
    }

    consultarSaldo(){
        return this.#saldo;
    }

    consignar(cantidad){
        if (cantidad <= 0){
            throw new Error("La consignación debe ser mayor a cero");
            
        }
        this.#saldo += cantidad;
    }

    retirar(cantidad){
        if (cantidad <= 0){
            throw new Error("El retiro debe ser mayor a cero"); 
        }
        if (cantidad > this.#saldo){
            throw new Error("Saldo insuficiente");
        }
        this.#saldo -= cantidad;
    }

}

class CuentaAhorros extends CuentaBancaria {
    constructor(numero, titular, saldo){
        super(numero, titular, saldo);
    }

    retirar(cantidad){
        super.retirar(cantidad);
    }
}

class CuentaNomina extends CuentaBancaria {
    constructor(numero, titular, saldo){
        super(numero, titular, saldo);
    }
}
