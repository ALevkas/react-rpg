import { Route, Switch } from 'react-router-dom';

import { Menu } from '../Menu/Menu';
import { Settings } from '../Hero/Settings';
import { Game } from '../Game/Game';

export const Main = () => {
    return (
        <>
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/game' component={Game} />
                </Switch>
            </main>
        </>
    );
};
