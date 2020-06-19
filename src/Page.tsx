import * as React from 'react'
// import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './views/Login'
import NoFind from './views/NoFind'
import Page403 from './views/403'

const Page = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to='/app' />} />
                <Route path="/app" component={App} />
                <Route exact path="/404" component={NoFind} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/403" component={Page403} />
                <Route render={() => <Redirect to='/404' /> } />
            </Switch>
        </Router>
    )
}

export default Page