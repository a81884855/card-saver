import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import {
  MdLocalGasStation,
  MdRestaurant,
  MdCardTravel,
  MdComputer,
  MdPhoneIphone,
  MdLocalGroceryStore
} from 'react-icons/md';
import { TiHomeOutline } from 'react-icons/ti';
import { GiCeilingLight } from 'react-icons/gi';
import { IoIosDesktop } from 'react-icons/io';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 10
  },
  input: {
    width: 42
  }
});

const PrettoSlider = withStyles({
  root: {
    // color: '#52af77',
    height: 10
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

export default function CustomSlider(props) {
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

  const displayCategoryIcon = () => {
    let { category } = props;
    if (category === 'gas') return <MdLocalGasStation />;
    if (category === 'restaurant') return <MdRestaurant />;
    if (category === 'travel') return <MdCardTravel />;
    if (category === 'online') return <MdComputer />;
    if (category === 'phone') return <MdPhoneIphone />;
    if (category === 'grocery') return <MdLocalGroceryStore />;
    if (category === 'furnitures') return <TiHomeOutline />;
    if (category === 'streaming') return <IoIosDesktop />;
    if (category === 'utilities') return <GiCeilingLight />;
  };

  return (
    <div className={classes.root}>
      <span style={{ textTransform: 'capitalize' }}>{props.category}</span>
      <Grid container spacing={2} alignItems="center">
        <Grid item style={{ fontSize: '1.6rem', marginTop: -10 }}>
          {displayCategoryIcon()}
        </Grid>
        <Grid item xs id={props.category}>
          <PrettoSlider
            id={props.category}
            value={props.value}
            onChange={handleSliderChange}
            aria-label="pretto slider"
            max={10000}
            step={5}
          />
        </Grid>
        <Grid item style={{ marginTop: -5 }}>
          <Input
            className={classes.input}
            value={props.value}
            style={{ width: '100%' }}
            margin="dense"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 0,
              max: 100000,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
