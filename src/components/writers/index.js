import React, { Fragment } from 'react'
import { NavLink as Link, Route, Redirect } from 'react-router-dom'

import Writer from './writer'
import { NotFound } from '../errors'

export default (props) => {
    // console.log(props)
    let { 
        writers, 
        match: { 
            url 
        } 
    } = props

    let _renderWriter = (props) => {
        let { 
            match: { 
                params: {
                    writerId
                }
            }
        } = props

        // console.log(props)
        const writer = writers.find(value => value.id === writerId)
        if (writer) {
            return <Writer {...props} {...writer} />
        }
        
        // return <Redirect to='/404' />
        return <NotFound notFoundValue={writerId} />
    }

    let _renderSelectWriter = (props) => (
        <h1>Select writer in above list</h1>
    )

    return (
        <Fragment>
            <ul>
                {
                    writers.map((value, index) => (
                        <li key={value.id}>
                            <Link to={`${url}/${value.id}`}>{value.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <hr />
            <Route exact path={`${url}`} render={_renderSelectWriter} />
            <Route path={`${url}/:writerId`} render={_renderWriter} />
        </Fragment>
    )
}
