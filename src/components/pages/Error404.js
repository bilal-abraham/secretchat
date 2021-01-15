import React, { Fragment } from 'react'
import Button from '../Button'
import Navbar from '../Navbar'


const Error404 = () => {
    return (
        <Fragment>
            <Navbar />
            <Fragment>
                <div className="hero-container">
                    <video src="/images/img.png" />
                    <h1>Error 404                                        <i class="fas fa-exclamation" /></h1>
                    <Button title="Go Home" link="/" />
                </div>
            </Fragment >
        </Fragment>
    )
}

export default Error404
