import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Persons from '../components/person/Persons'
import Person from '../components/person/Person'
import Players from '../components/player/Players';
import Player from '../components/player/Player';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/persons' component={Persons} />
        <Route path='/person' component={Person} />          
        <Route path='/person/:id' component={Person} />
        <Route path='/players' component={Players} />
        <Route path='/player' component={Player} />          
        <Route path='/player/:id' component={Player} />        
        <Redirect from='*' to='/' />
    </Switch>