import React, { Component, Fragment } from 'react'
import './writer.css'

function imageLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll('img')]
    
    for (let i=0; i<imgElements.length; i++) {
        const img = imgElements[i]
        if (!img.complete) {
            return false
        }
    }

    return true
}

export default class Writer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }

        console.log('constructor', this.state, this.props)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            isLoading: true
        }
    }

    _handleImageChange = () => {
        this.setState((prevState, props) => {
            console.log('_handleImageChange', prevState)
            return {
                isLoading: !imageLoaded(this.imageElement)
            }
        })

        
    }

    renderSpinner() {
        if (this.state.isLoading) {
            return (
                <div className='spinner-center'>
                    <div className='spinner' />
                </div>
            )
        }
        return null
    }

    renderImage(imageUrl, name) {
        return (
            <img 
                src={imageUrl} 
                alt={name} 
                style={{
                    width: '100%',
                    display: this.state.isLoading ? 'none' : 'inherit'
                }} 
                onLoad={this._handleImageChange}
                onError={this._handleImageChange}
            />
        )
    }

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
                <div 
                    className='writerImage' 
                    ref={element => { 
                        this.imageElement = element 
                    }}
                >
                    {
                        this.renderSpinner()
                    }
                    {
                        this.renderImage(image, name)
                    }
                </div>
                <div className='writerInfo'>
                    <h1>{name}</h1>
                    <h3>{born} &mdash; {deceased}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
 
    