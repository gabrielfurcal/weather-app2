import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../../hooks/useVanta'
// import Birds from 'vanta/dist/vanta.net.min'
// import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useVanta()

    return (
        <div className="full back-full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen