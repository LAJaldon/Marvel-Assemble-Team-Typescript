import React from 'react'
import { useState, useEffect } from 'react'
import Heroes from '../Components/Heroes'
import { makeStyles } from '@material-ui/core'
import Introduction from '../Components/Introduction'
import SearchHero from '../Components/SearchHero'

const api = require('marvel-api');

const marvel = api.createClient({
    publicKey: 'f08029d3b9358a4ff93d2a94d973797a',
    privateKey: '493f3fb98dd1c49d3f746f79fa6d614536771fce'
});

const useStyles = makeStyles({
    root: {
        color: '#CC4425',
    }
})

const AssembleTeam = () => {
    const [heroes, setHeroes] = useState([]);
    const [screen, setScreen] = useState('INTRO');
    const [heroSearched, setHeroSearched] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const classes = useStyles();

    useEffect(() => {
        if (heroSearched === false) {
            const getJson = async () => {
                const dataJSON = await getData();
                setHeroes(dataJSON);
            }
            getJson();
        }
        else {
            const getJson = async () => {
                const searchedDataJSON = await searchData();
                setHeroes(searchedDataJSON);
            }
            getJson();
        }
    }, [searchQuery, heroSearched]);


    /* Get the inital 20 heroes */
    const getData = async () => {
        const apiData = await marvel.characters.findAll().then(function (body: any) {
            const json = body.data;
            return json;
        });

        return apiData;
    }

    /* Retrieves json objects of searched heroes */
    const searchData = async () => {
        const apiData = await marvel.characters.findNameStartsWith(searchQuery).then(function (body: any) {
            const json = body.data;

            return json;
        })

        return apiData;
    }

    /* Updates the screen from intro to hero selection*/
    const onUpdate = (query: string) => {
        setScreen(query)
    }

    const onSearch = (query: string) => {
        setSearchQuery(query);
        setHeroSearched(true);
    }

    return (
        <div>
            {screen === 'INTRO' && <Introduction onUpdate={onUpdate} />}
            {screen === 'HEROES' && <div>
                <h1 className={classes.root}>Select Your Heroes</h1>
                <SearchHero onSearch={onSearch} />
                <Heroes heroes={heroes} />
            </div>
            }
        </div>
    )
}

export default AssembleTeam
