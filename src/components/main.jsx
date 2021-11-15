import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Grocery from './grocery';
import FruitsVeggi from './fruitsveggi';
import KitchenAppliances from './kitchenAppliances';
import PageNotFound from './pageNotFound';

// configure routers here

const Main = ()=> (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/grocery" component={Grocery} />
        <Route path="/fruitsAndVegetables" component={FruitsVeggi} />
        <Route path="/kitchenAppliances" component={KitchenAppliances} />
        <Route path="*" component={PageNotFound} />
    </Switch>
)

export default Main;

