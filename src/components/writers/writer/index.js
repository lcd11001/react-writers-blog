import React, { Fragment } from 'react'

export default (props) => {
    // console.log(props)
    let {
        id,
        name,
        born,
        deceased,
        description,
        image
    } = props

    return (
        <Fragment>
            <img src={image} alt={name} style={{maxWidth: 300}} />
            <h1>{name}</h1>

            <h3>{born} &mdash; {deceased}</h3>

            <p>{description}</p>
        </Fragment>
    )
}
    