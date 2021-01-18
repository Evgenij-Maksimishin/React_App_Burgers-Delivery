import React from 'react';
import Landing from './Landing';
import App from './App';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/restaurant/:restaurantId' component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter >
    )
}

export default Router;



{/* Swiwch будерт cмотреть на то, что мы вводим в адресной строке браузера и будет проверять этот адрес на соответствие адреса, которые мы укажем в наших маршрутах. И если он увидит соответсвие, то он будет Рендерить, тот компонент, который мы укажем в соответсвующем маршруте  */ }
