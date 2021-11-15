import React from 'react';
import { Switch, Route } from 'react-router';
import AllGrocery from './AllGrocery';
import Item from './items';

const Grocery = ()=>(
    <div>
        <Switch>
            <Route exact path="/grocery" component={AllGrocery} />
            <Route path="/grocery/:number" component={Item} />
        </Switch>
    </div>
)

export default Grocery;