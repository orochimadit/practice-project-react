import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <Card className={classes.modal} onClick={props.onConfirm}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

export default ErrorModal
