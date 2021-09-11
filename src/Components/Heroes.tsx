import React from 'react'
import Hero from './Hero'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export interface IState {
    heroes: any,
}

const Heroes: React.FC<IState> = ({ heroes }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hero heroes={heroes} />
            <Hero heroes={heroes} />
            <Hero heroes={heroes} />
            <Hero heroes={heroes} />
            <Hero heroes={heroes} />
            <Hero heroes={heroes} />
        </div>
    )
}

export default Heroes
