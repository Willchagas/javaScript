class Animal{
    constructor(nome){
        this.nome = nome;
    }

    printNome(){
        return this.nome;
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
        this.raca = "bulldog";
    }

    printRaca(){
        return this.raca;
    }
}

cachorro = new Cachorro("Logan");

alert(cachorro.printNome());
