import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        //this.setState({hasError: true})
        return { hasError: true }
    } 

    componentDidCatch(error, info) {
        console.log("Error info", info)
    }
    

    render() {
        return (
            this.state.hasError ?
            (<h1>An error has been occurred</h1>) :
            this.props.children
        )
    }
}

export default ErrorBoundary