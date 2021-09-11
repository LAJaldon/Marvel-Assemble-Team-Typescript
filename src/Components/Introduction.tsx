import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        color: '#CC4425',
        margin: 'auto',
        height: '200px',
    },
    button: {
        backgroundColor: 'red',
        padding: '10px',
        color: 'white',
        borderRadius: '50px',
    },
})

interface introProps {
    onUpdate: any,
}

const Introduction: React.FC<introProps> = ({ onUpdate }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>The Earth is under attack by Thanos. Choose 6 superheroes to defend the planet!</h1>
            <button className={classes.button} onClick={() => onUpdate('HEROES')}>Continue</button>
        </div>
    )
}

export default Introduction
