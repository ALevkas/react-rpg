import React, { createContext, useState } from 'react';
import { Hero } from './Models/Hero';

interface IHero {
    name: string;

    force: number;
    agility: number;
    intellect: number;
    charisma: number;

    vitality: number;
    evasion: number;
    energy: number;

    attack: number;
    stealth: number;
    archery: number;
    learnability: number;
    survival: number;
    medicine: number;
    bullying: number;
    insight: number;
    appearance: number;
    manipulation: number;
}

interface IContextProps {
    hero: IHero;
    createHero: (
        name: string,
        force: number,
        agility: number,
        intellect: number,
        charisma: number
    ) => void;
    updateHero: (hero: Hero) => void;
    upAttack: () => void;
    upStealth: () => void;
    upArchery: () => void;
    upLearnability: () => void;
    upSurvival: () => void;
    upMedicine: () => void;
    upBullying: () => void;
    upInsight: () => void;
    upAppearance: () => void;
    upManipulation: () => void;
    getDescriptionSkill: (level: number) => string;
    getDamage: () => void;
    saveHero: () => void;
    loadHero: () => void;
}

export const HeroContext = createContext({} as IContextProps);

export const HeroProvider = (props: any) => {
    const [hero, setHero] = useState<IHero>({
        name: '',

        force: 0,
        agility: 0,
        intellect: 0,
        charisma: 0,

        vitality: 0,
        evasion: 0,
        energy: 0,

        attack: 0,
        stealth: 0,
        archery: 0,
        learnability: 0,
        survival: 0,
        medicine: 0,
        bullying: 0,
        insight: 0,
        appearance: 0,
        manipulation: 0,
    });

    const createHero = (
        name: string,
        force: number,
        agility: number,
        intellect: number,
        charisma: number
    ) => {
        setHero(new Hero(name, force, agility, intellect, charisma));
    };

    const updateHero = (hero: Hero) => {
        setHero(hero);
    };

    const upAttack = () => {
        if (hero.attack + 1 <= hero.force && hero.attack + 1 <= 5) {
            setHero({ ...hero, attack: hero.attack + 1 });
        }
    };

    const upStealth = () => {
        if (hero.stealth + 1 <= hero.agility && hero.stealth + 1 <= 5) {
            setHero({ ...hero, stealth: hero.stealth + 1 });
        }
    };

    const upArchery = () => {
        if (hero.archery + 1 <= hero.agility && hero.archery + 1 <= 5) {
            setHero({ ...hero, archery: hero.archery + 1 });
        }
    };

    const upLearnability = () => {
        if (
            hero.learnability + 1 <= hero.intellect &&
            hero.learnability + 1 <= 5
        ) {
            setHero({ ...hero, learnability: hero.learnability + 1 });
        }
    };

    const upSurvival = () => {
        if (hero.survival + 1 <= hero.intellect && hero.survival + 1 <= 5) {
            setHero({ ...hero, survival: hero.survival + 1 });
        }
    };

    const upMedicine = () => {
        if (hero.medicine + 1 <= hero.intellect && hero.medicine + 1 <= 5) {
            setHero({ ...hero, medicine: hero.medicine + 1 });
        }
    };

    const upBullying = () => {
        if (hero.bullying + 1 <= hero.charisma && hero.bullying + 1 <= 5) {
            setHero({ ...hero, bullying: hero.bullying + 1 });
        }
    };

    const upInsight = () => {
        if (hero.insight + 1 <= hero.charisma && hero.insight + 1 <= 5) {
            setHero({ ...hero, insight: hero.insight + 1 });
        }
    };

    const upAppearance = () => {
        if (hero.appearance + 1 <= hero.charisma && hero.appearance + 1 <= 5) {
            setHero({ ...hero, appearance: hero.appearance + 1 });
        }
    };

    const upManipulation = () => {
        if (
            hero.manipulation + 1 <= hero.charisma &&
            hero.manipulation + 1 <= 5
        ) {
            setHero({ ...hero, manipulation: hero.manipulation + 1 });
        }
    };

    const getDescriptionSkill = (level: number) => {
        switch (level) {
            case 5:
                return 'Мастер';
            case 4:
                return 'Эксперт';
            case 3:
                return 'Адепт';
            case 2:
                return 'Ученик';
            case 1:
                return 'Новичок';
            default:
                return 'Нетренированный';
        }
    };

    const getDamage = () => {
        if (hero.vitality > 0) {
            setHero({ ...hero, vitality: hero.vitality - 1 });
            return;
        }
        return death();
    };

    const death = () => {
        return null;
    };

    const saveHero = () => {
        window.localStorage.setItem('Hero', JSON.stringify(hero));
    };

    const loadHero = async () => {
        const loadedHero = window.localStorage.getItem('Hero');
        if (loadedHero) {
            const parseHero = JSON.parse(loadedHero);

            setHero({
                ...hero,
                name: parseHero.name,
                force: parseHero.force,
                agility: parseHero.agility,
                intellect: parseHero.intellect,
                charisma: parseHero.charisma,
                vitality: parseHero.vitality,
                evasion: parseHero.evasion,
                energy: parseHero.energy,
                attack: parseHero.attack,
                stealth: parseHero.stealth,
                archery: parseHero.archery,
                learnability: parseHero.learnability,
                survival: parseHero.survival,
                medicine: parseHero.medicine,
                bullying: parseHero.bullying,
                insight: parseHero.insight,
                appearance: parseHero.appearance,
                manipulation: parseHero.manipulation,
            });
        }
    };

    return (
        <HeroContext.Provider
            value={{
                hero,
                createHero,
                updateHero,
                upAttack,
                upStealth,
                upArchery,
                upLearnability,
                upSurvival,
                upMedicine,
                upBullying,
                upInsight,
                upAppearance,
                upManipulation,
                getDescriptionSkill,
                getDamage,
                saveHero,
                loadHero,
            }}
        >
            {props.children}
        </HeroContext.Provider>
    );
};
