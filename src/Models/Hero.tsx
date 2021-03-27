export class Hero {
    name: string;

    force: number;
    agility: number;
    intellect: number;
    charisma: number;

    vitality: number;
    evasion: number;
    energy: number;

    attack: number = 0;
    stealth: number = 0;
    archery: number = 0;
    learnability: number = 0;
    survival: number = 0;
    medicine: number = 0;
    bullying: number = 0;
    insight: number = 0;
    appearance: number = 0;
    manipulation: number = 0;

    constructor(
        name: string,
        force: number,
        agility: number,
        intellect: number,
        charisma: number
    ) {
        this.name = name;

        this.force = force;
        this.agility = agility;
        this.intellect = intellect;
        this.charisma = charisma;

        this.vitality = 3 + this.force;
        this.evasion = 10 + this.agility;
        this.energy = this.agility + this.intellect;
    }
}
