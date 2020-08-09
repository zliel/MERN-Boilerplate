import React from 'react'
import { hot } from 'react-hot-loader'

//basic HelloWorld React Component
const HelloWorld = () => {
    return(
        <div>
            <h1>Hello handsome!</h1> 
        </div>
    )
}
//the HelloWorld is hot-exported to enable hot reloading with react-hot-loader during dev
export default hot(module)(HelloWorld)