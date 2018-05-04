import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom'

import Writers from './writers'
import NotFound from './errors/404'

class App extends Component {
    state = {
        writers: []
    }

    async componentDidMount() {
        const writers = await(
            await(
                fetch('http://localhost:3004/writers')        
            )
        ).json()
        
        this.setState({
            writers 
        })
    }

    _rnderHome = () => {
        return (
            <div>Home</div>
        )
    }

    _rnderWriter = (props) => {
        return (
            <Writers {...props} writers={this.state.writers} />
        )
    }

    render() {
        
        return (
            <Router>
                <Fragment>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/writers'>Writers</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path='/' render={this._rnderHome} />
                        <Route path='/writers' render={this._rnderWriter} />

                        <Route component={NotFound} />
                    </Switch>
                    
                </Fragment>
            </Router>
        )
    }
}

export default App
