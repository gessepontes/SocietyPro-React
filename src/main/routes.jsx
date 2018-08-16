import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Persons from '../components/person/Persons'
import Person from '../components/person/Person'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/persons' component={Persons} />
        <Route path='/person' component={Person}>
            <Route path='/person/:id' component={Person} />
        </Route>
        <Redirect from='*' to='/' />
    </Switch>