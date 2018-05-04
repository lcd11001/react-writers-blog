import React, { Component, Fragment } from 'react'
import './writer.css'
import Avatar from '../../avatar'

export default class Writer extends Component {
    render() {
        // console.log(props)
        let {
            id,
            name,
            born,
            deceased,
            description,
            image
        } = this.props
    
        return (
            <div className='writer'>
                <Avatar imageUrl={image} imageAlt={name} className='writerImage' />
                <div className='writerInfo'>
                    <h1>{name}</h1>
                    <h3>{born} &mdash; {deceased}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
 
    