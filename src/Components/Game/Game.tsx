import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeroContext } from '../../HeroContext';

import witcher from '../../Assets/witcher.png';
import './game.scss';

export const Game = () => {
    const {
        hero,
        updateHero,
        getDescriptionSkill,
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
        getDamage,
        saveHero,
    } = useContext(HeroContext);

    const [status, setStatus] = useState('Жив');

    useEffect(() => {}, [hero, updateHero]);

    return (
        <>
            {!hero.name ? (
                <div className='error'>
                    <h3>Сперва создайте персонажа</h3>

                    <Link to={`/settings`} className='btn green darken-1'>
                        Перейти к созданию
                    </Link>
                </div>
            ) : (
                <div className='game__wrapper'>
                    <div className='card game__info'>
                        <div className='card-image'>
                            <img
                                src={witcher}
                                className='game-image'
                                alt='Тут должна была быть фото персонажа'
                            />
                            <p className='game__status'>{status}</p>
                        </div>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <p>Имя: {hero.name}</p>
                                <hr />
                                <div className='game__attribute'>
                                    <p>Сила: {hero.force}</p>
                                    <p>Ловкость: {hero.agility}</p>
                                    <p>Интеллект: {hero.intellect}</p>
                                    <p>Харизма: {hero.charisma}</p>
                                </div>
                                <hr />
                                <div className='game__parameters'>
                                    <p>Жизненная сила: {hero.vitality}</p>
                                    <p>Уклонение: {hero.evasion}</p>
                                    <p>Энергия: {hero.energy}</p>
                                </div>
                                <hr />
                                <div className='game__skills'>
                                    <div className='game__skill'>
                                        <div className='skill-name'>Атака:</div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.attack)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>Стелс:</div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.stealth)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Стрельба из лука:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.archery)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Обучаемость:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(
                                                hero.learnability
                                            )}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Выжание:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.survival)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Медицина:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.medicine)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Запугивание:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.bullying)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Проницанельность:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(hero.insight)}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Внешний вид:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(
                                                hero.appearance
                                            )}
                                        </div>
                                    </div>
                                    <div className='game__skill'>
                                        <div className='skill-name'>
                                            Манипулирование:
                                        </div>
                                        <div className='skill-level'>
                                            {getDescriptionSkill(
                                                hero.manipulation
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-action game__footer'>
                                <button
                                    className='btn'
                                    onClick={() => {
                                        saveHero();
                                    }}
                                >
                                    Сохранить персонажа
                                </button>
                                <Link to='/settings' className='btn'>
                                    Редактировать персонажа
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='card game__actions'>
                        <div className='card-stacked'>
                            <div className='card-content'>
                                <p>Тренировать</p>
                                <hr />
                                <div className='game__training'>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upAttack();
                                        }}
                                    >
                                        Атаку
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upStealth();
                                        }}
                                    >
                                        Стелс
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upArchery();
                                        }}
                                    >
                                        Лук
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upLearnability();
                                        }}
                                    >
                                        Обучаемость
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upSurvival();
                                        }}
                                    >
                                        Выжание
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upMedicine();
                                        }}
                                    >
                                        Медицина
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upBullying();
                                        }}
                                    >
                                        Запугивание
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upInsight();
                                        }}
                                    >
                                        Проницанельность
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upAppearance();
                                        }}
                                    >
                                        Внешний вид
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            upManipulation();
                                        }}
                                    >
                                        Манипулирование
                                    </button>
                                </div>
                                <hr />
                                <div className='game__world'>
                                    <button
                                        className='btn'
                                        onClick={() => {
                                            if (getDamage() === null) {
                                                setStatus('Погиб в сражении..');
                                            }
                                        }}
                                    >
                                        Получение урона
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
