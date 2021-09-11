import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles({
    searchInput: {
        backgroundColor: 'white',
        marginBottom: '10px',
    },
    label: {
        color: 'black',
        marginBottom: '10px',
    },
    searchButton: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
            backgroundColor: 'red',
        },
    },
});

interface searchProps {
    onSearch: any,
}

const SearchHero: React.FC<searchProps> = ({ onSearch }) => {
    const [text, setText] = useState('');
    const classes = useStyles();

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!text) {
            alert('Please add query');
            return;
        }

        onSearch(text);
        setText('');
    }

    return (
        <div>
            <form className='add-hero' onSubmit={onSubmit}>
                <div className='form-control'>
                    <InputLabel className={classes.label}>Search for Heroes</InputLabel>
                    <Input
                        type='text'
                        placeholder='Search Hero'
                        value={text}
                        disableUnderline={true}
                        onChange={(e) => setText(e.target.value)}
                        className={classes.searchInput}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        className={classes.searchButton}
                    >Search</Button>
                </div>
            </form>
        </div>
    )
}

export default SearchHero
