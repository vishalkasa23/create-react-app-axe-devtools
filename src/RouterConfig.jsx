import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

export default function RouterConfigComp(){
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Service">Service </Link></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/Home" component={HomeComponent} />
            <Route path="/Cricketers" component={AboutComponent} />
            <Route path="/Service" component={ServiceComponent} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </div>
}


export function HomeComponent(){
    return <h1>Hi you have rendered HomeComponent</h1>
}

export function AboutComponent(){
    return <h1>Hi you have rendered AboutComponent</h1>
}

export function ServiceComponent(){
    return <h1>Hi you have rendered ServiceComponent</h1>
}

export function PageNotFound(){
    return <h1 style={{color:'red'}}>Error 404!!</h1>
}