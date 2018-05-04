import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import './writer.css'
import Avatar from '../../avatar'
import Texts from './texts'
import { NotFound } from '../../errors'

export default class Writer extends Component {
    _renderBook = (props) => {
        // console.log('_renderBook', props)
        let {
            match: {
                params: {
                    textId
                }
            }
        } = props

        const book = this.props.texts.find(value => (value.id === textId))
        // console.log('_renderBook', book)

        if (book) {
            return <Texts {...book} />
        }

        return <NotFound notFoundValue={textId} />
    }

    render() {
        // console.log(props)
        let {
            match: {
                url
            },
            name,
            born,
            deceased,
            description,
            image,
            texts
        } = this.props
    
        return (
            <div className='writerBook'>
                <div className='writer'>
                    <Avatar imageUrl={image} imageAlt={name} className='writerImage' />
                    <div className='writerInfo'>
                        <h1>{name}</h1>
                        <h3>{born} &mdash; {deceased}</h3>
                        <p>{description}</p>

                        <h3>Books</h3>
                        <ul>
                            {
                                texts.map((value, index) => (
                                    <li key={value.id}>
                                        <Link to={`${url}/texts/${value.id}`}>{value.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
                <div className='book'>
                    <Route path={`${url}/texts/:textId`} render={this._renderBook} />
                </div>
            </div>
        )
    }
}
 
    