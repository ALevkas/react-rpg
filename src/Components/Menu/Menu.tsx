import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeroContext } from '../../HeroContext';

import './menu.scss';

export const Menu = () => {
    const { hero, loadHero } = useContext(HeroContext);

    return (
        <div className='menu'>
            {hero.name.length === 0 ? (
                <>
                    <Link to={`/settings`} className='btn green darken-1'>
                        Создать персонажа
                    </Link>
                    <br />
                    <button
                        className='btn green darken-1'
                        onClick={() => {
                            loadHero();
                        }}
                    >
                        Импортировать персонажа
                    </button>
                </>
            ) : (
                <>
                    <Link to={`/game`} className='btn green darken-1'>
                        Продолжить игру
                    </Link>
                    <br />
                    <Link to={`/settings`} className='btn green darken-1'>
                        Редактировать персонажа
                    </Link>
                </>
            )}
        </div>
    );
};
