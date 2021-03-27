import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HeroContext } from '../../HeroContext';

import './hero.scss';

export const Settings = () => {
    const history = useHistory();

    const { hero, createHero } = useContext(HeroContext);

    const [attributePoints, setAttributePoints] = useState(10);
    const [errorMessage, setErrorMessage] = useState('');

    const [name, setName] = useState(hero?.name || '');
    const [force, setForce] = useState(hero?.force || 0);
    const [agility, setAgility] = useState(hero?.agility || 0);
    const [intellect, setIntellect] = useState(hero?.intellect || 0);
    const [charisma, setCharisma] = useState(hero?.charisma || 0);

    const setAttribute = (nameAttribute: string, value: number) => {
        let usedPointsAttributes: number =
            force + agility + intellect + charisma;

        switch (nameAttribute) {
            case 'force':
                const prevForceValue = force;
                setForce(value);
                usedPointsAttributes = value + agility + intellect + charisma;
                if (10 - usedPointsAttributes < 0) {
                    setForce(prevForceValue);
                    return;
                }
                break;

            case 'agility':
                const prevAgilityValue = agility;
                setAgility(value);
                usedPointsAttributes = force + value + intellect + charisma;
                if (10 - usedPointsAttributes < 0) {
                    setAgility(prevAgilityValue);
                    return;
                }
                break;

            case 'intellect':
                const prevIntellectValue = intellect;
                setIntellect(value);
                usedPointsAttributes = force + agility + value + charisma;
                if (10 - usedPointsAttributes < 0) {
                    setIntellect(prevIntellectValue);
                    return;
                }
                break;

            case 'charisma':
                const prevCharismaValue = charisma;
                setCharisma(value);
                usedPointsAttributes = force + agility + intellect + value;
                if (10 - usedPointsAttributes < 0) {
                    setCharisma(prevCharismaValue);
                    return;
                }
                break;
        }

        setAttributePoints(10 - usedPointsAttributes);
    };

    const savehero = () => {
        if (attributePoints === 0 && name.length !== 0) {
            createHero(name, force, agility, intellect, charisma);

            history.push('/game');
        }

        setErrorMessage(
            'Необходимо потратить все очки аттрибутов и указать имя персонажа!'
        );

        setTimeout(() => {
            setErrorMessage('');
        }, 10000);
    };

    useEffect(() => {
        if (hero) {
            setAttributePoints(
                10 -
                    (hero.force + hero.agility + hero.intellect + hero.charisma)
            );
        }
    }, [hero]);

    return (
        <div className='hero__create'>
            <div className='hero__settings'>
                <h6>Свободных очков аттрибутов: {attributePoints}</h6>
                <p className='range-field '>
                    Сила <span className='right'>{force}</span>
                    <input
                        type='range'
                        id='force'
                        min='0'
                        max='10'
                        value={force}
                        step='1'
                        onChange={(e) => {
                            setAttribute('force', +e.target.value);
                        }}
                    />
                </p>
                <p className='range-field'>
                    Ловкость <span className='right'>{agility}</span>
                    <input
                        type='range'
                        id='agility'
                        min='0'
                        max='10'
                        value={agility}
                        step='1'
                        onChange={(e) => {
                            setAttribute('agility', +e.target.value);
                        }}
                    />
                </p>
                <p className='range-field'>
                    Интелект <span className='right'>{intellect}</span>
                    <input
                        type='range'
                        id='intellect'
                        min='0'
                        max='10'
                        value={intellect}
                        step='1'
                        onChange={(e) => {
                            setAttribute('intellect', +e.target.value);
                        }}
                    />
                </p>
                <p className='range-field'>
                    Харизма <span className='right'>{charisma}</span>
                    <input
                        type='range'
                        id='charisma'
                        min='0'
                        max='10'
                        value={charisma}
                        step='1'
                        onChange={(e) => {
                            setAttribute('charisma', +e.target.value);
                        }}
                    />
                </p>
                <input
                    placeholder='Имя персонажа'
                    id='first_name'
                    type='text'
                    className='validate'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor='first_name'>Имя персонажа</label>

                <br />
                <button
                    className='btn green darken-1'
                    onClick={() => savehero()}
                >
                    Сохранить
                </button>

                <p className='error'>{errorMessage}</p>
            </div>
        </div>
    );
};
