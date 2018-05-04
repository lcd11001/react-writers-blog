import React, { Component, Fragment } from 'react'

export default (props) => {
    // console.log('texts', props)
    let {
        title,
        published,
        description
    } = props

    return (
        <Fragment>
            <h1>{title}</h1>
            <h3>{published}</h3>
            <p>{description}</p>
        </Fragment>
    )
}