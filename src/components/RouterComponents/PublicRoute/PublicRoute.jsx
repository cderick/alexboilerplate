import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            restricted ?
                <Redirect to="/404" />
            : <Component {...rest} {...props} />
        )} />
    )
}

export default PublicRoute