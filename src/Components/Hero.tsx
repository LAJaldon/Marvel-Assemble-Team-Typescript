import React, { useState } from 'react'
import Heroes, { IState as Props } from './Heroes';
import { makeStyles } from '@material-ui/styles';
import { Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
    characterCard: {
        border: '1px solid black',
        padding: '20px',
        paddingBottom: '40px',
        display: 'inline-block',
        alignItems: 'center',
        width: '300px',
        margin: '30px',
        color: 'white',
        backgroundColor: 'red',
        position: 'relative',
        verticalAlign: 'top',
    },
    heroName: {
        color: 'yellow',
    },
    heroInformation: {
        marginTop: '20px',
    },
    button: {
        backgroundColor: 'yellow',
        padding: '10px',
        color: 'black',
        borderRadius: '50px',
        position: 'absolute',
        bottom: '10px',
        width: '120px',
        left: '50%',
        transform: 'translateX(-50%)',

    },
    selectedbutton: {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        position: 'absolute',
        bottom: '10px',
        width: '120px',
        borderRadius: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    dropdownBar: {
        color: 'white',
    },
    icon: {
        fill: 'white',
    },
});

const Hero: React.FC<Props> = ({ heroes }) => {
    const classes = useStyles();
    const [superhero, setSuperhero] = useState<any>({});
    const [heroChosen, setHeroChosen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        if (e.target.value !== 'default') {
            setSuperhero(heroes[e.target.value as number]);
            setHeroChosen(true);
        }
    }

    const onPress = () => {
        setButtonClicked(!buttonClicked);
    }

    const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

    return (
        <div className={classes.characterCard}>
            {buttonClicked === false &&
                <div>
                    <Select
                        className={classes.dropdownBar}
                        onChange={onChange}
                        value='default'
                        disableUnderline={true}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                    >
                        <MenuItem value='default'>Select a Hero</MenuItem>
                        {heroes.map((hero: any, index: number) => <MenuItem key={index} value={index}>
                            {hero.name}
                        </MenuItem>)}
                    </Select>
                </div>
            }
            {heroChosen !== false ?
                <div className={classes.heroInformation}>
                    <img
                        src={superhero.thumbnail.path !== noImage ? `${superhero.thumbnail.path}.${superhero.thumbnail.extension}` : './Images/Generic_Superhero.png'}
                        height='200'
                        width='200'
                    />
                    <h2 className={classes.heroName}>{superhero.name}</h2>
                    {superhero.description.length !== 0 ? <h4>{superhero.description}</h4> : <h4>No Description Provided</h4>}
                    {superhero.series.items[1] !== undefined ? <h4> {superhero.name} appears in: {superhero.series.items[0].name}</h4>
                        :
                        <h4>Not Specified which series {superhero.name} appears in</h4>}
                    {superhero.comics.items[1] !== undefined ? <h4> {superhero.name} is featured in: {superhero.comics.items[0].name}</h4>
                        : <h4>Not Specified which comic {superhero.name} appears in</h4>}
                    {buttonClicked ? <button className={classes.selectedbutton} onClick={onPress}>Hero Chosen</button>
                        : <button className={classes.button} onClick={onPress}>Select Hero</button>}
                </div>
                :
                <h1>Select A Hero</h1>
            }
        </div >
    )
}

export default Hero
