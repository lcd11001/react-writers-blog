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
            <h2>{title} {published ? `(${published})` : ''}</h2>
            <p>{description ? description : 'No Description'}</p>
        </Fragment>
    )
}