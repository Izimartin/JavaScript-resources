class Account {
    private amount: number;
    private commission: number;

    constructor(amount: number, commission: number) {
        this.amount = amount;
        this.commission = commission;
    }

    // Accesors set, get
    set setAmount(amount: number) {
        if (amount < 0)
            amount = 0;
        this.amount = amount;
    }

    get total(){
        return this.amount + this.commission;
    }

}

const account = new Account(10, 1);
account.setAmount = -8;

// class extends Account {}
console.log(account.total);