import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Slider,
  Input,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Image } from 'react-bootstrap';
import displayIcon from '../../assets/helper/displayIcon';
import ClearIcon from '@material-ui/icons/Clear';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../../queries/queries.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '8px 0px 8px 0'
    // padding: '3px 6px 0px 6px'
  },
  input: {
    marginLeft: 5,
    width: 30
  }
});

const PrettoSlider = withStyles({
  root: {
    // color: '#52af77',
    // height: 10
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -10,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export function CustomSlider(props) {
  const [card, setCard] = useState('');

  const displayCards = category => {
    let data = props.data;
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      return data.Cards.sort((a, b) => b[category] - a[category])
        .slice(0, 6)
        .map(card => {
          return (
            <MenuItem
              key={card.name}
              value={
                card.name +
                '/' +
                card[category] +
                '/' +
                card[`${category}Limit`] +
                '/' +
                card.annual
              }
            >
              <Image
                src={`/images/${card.image}`}
                style={{
                  border: 'none',
                  background: 'none',
                  width: 40,
                  marginRight: 5
                }}
              />
              {' ' + card[category]}%{' ' + card.name}
            </MenuItem>
          );
        });
    }
  };

  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    props.handleSliderChange(props.category, newValue);
  };

  const handleInputChange = event => {
    props.handleInputChange(
      props.category,
      event.target.value === '' ? '' : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    props.handleBlur(props.category);
  };

  const handleCardChange = e => {
    props.handleCardChange(props.category, e.target.value);
    setCard(e.target.value);
  };

  return (
    <div className={classes.root}>
      <span style={{ textTransform: 'capitalize' }}>
        {props.category} reward:
        <span style={{ color: '#388e3c', fontWeight: 'bold' }}>
          {props.saving && `$${Math.round(props.saving / 3)}/month  `}
        </span>
        {props.annual && `($${props.annual} Annual Fee)`}
      </span>
      <Grid container spacing={2} alignItems="center">
        <Grid item style={{ fontSize: '1.6rem', marginTop: -2 }}>
          {displayIcon(props.category)}
        </Grid>
        <Grid item xs id={props.category}>
          <PrettoSlider
            id={props.category}
            value={props.value}
            onChange={handleSliderChange}
            aria-label="pretto slider"
            max={5000}
            step={100}
          />
        </Grid>
        <Grid item style={{ marginTop: -5 }}>
          <Input
            className={classes.input}
            value={props.value}
            style={{ width: '100%' }}
            margin="dense"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <ClearIcon />
              </InputAdornment>
            }
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 0,
              max: 5000,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl style={{ width: '100%' }} variant="outlined" className={classes.formControl}>
            <InputLabel>{props.reward * 100}% Card</InputLabel>
            <Select value={card} onChange={handleCardChange}>
              {displayCards(props.category)}
              <MenuItem value="/2//">2% Credit Card</MenuItem>
              <MenuItem value="/1//">1% Credit Card</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default graphql(getCardsQuery)(CustomSlider);
