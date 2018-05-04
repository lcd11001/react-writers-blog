import React, { Component } from 'react'
import './avatar.css'

export default class Avatar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            cacheUrl: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.imageUrl !== prevState.cacheUrl) {
            return {
                isLoading: true,
                cacheUrl: nextProps.imageUrl
            }
        }

        return null
    }

    _handleImageChange = () => {
        this.setState((prevState, props) => {
            return {
                isLoading: !this.imageLoaded(this.imageElement)
            }
        })

        
    }

    imageLoaded = (parentNode) => {
        const imgElements = [...parentNode.querySelectorAll('img')]
        
        for (let i=0; i<imgElements.length; i++) {
            const img = imgElements[i]
            if (!img.complete) {
                return false
            }
        }
    
        return true
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

    render () {
        let { imageUrl, imageAlt, className } = this.props
        return (
            <div 
                className={`${className} avatar`}
                ref={element => { 
                    this.imageElement = element 
                }}
            >
                {
                    this.renderSpinner()
                }
                {
                    this.renderImage(imageUrl, imageAlt)
                }
            </div>
        )
    }
}