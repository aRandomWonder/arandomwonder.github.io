class Player{
    name: string;
    hp: number;
    inventory : [];
    message_log : [];
    constructor(name){
        this.name = name;
        this.hp = 10;
        this.inventory = [];
        this.message_log = [];
    }
}