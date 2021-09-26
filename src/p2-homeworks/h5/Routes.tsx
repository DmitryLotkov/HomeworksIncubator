import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import Error404 from './pages/Error404'
import {Junior} from './pages/Junior'
import {PreJunior} from './pages/PreJunior'
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/PreJunior',
    Junior: "/junior",
    JuniorPlus: "/juniorPlus",
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/* в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

               {/* <Route path={PATH.PRE_JUNIOR} component={PreJunior}/>*/}
                <Route path={PATH.Junior} component={Junior}/>
                <Route path={PATH.JuniorPlus} component={JuniorPlus}/>
                {/*     у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
