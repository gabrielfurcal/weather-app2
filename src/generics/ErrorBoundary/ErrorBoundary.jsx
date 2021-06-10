import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent { //PureComponenent es lo relativo a usar React.memo en los functional componenets. Anteriormente heredaba de la clase Component
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