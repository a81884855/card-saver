import React, { Component } from 'react';
import CustomSlider from './Slider';
import { Row, Col } from 'react-bootstrap';
import { InputLabel, MenuItem, FormControl, Select, Button } from '@material-ui/core';
import DonutChart from './DonutChart';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 200,
      travel: 0,
      gas: 100,
      selected: '',
      chosen: ['restaurant', 'travel', 'gas'],
      other: ['online', 'phone', 'grocery', 'furnitures', 'streaming', 'utilities']
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handlerchange = this.handlerchange.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
  }

  handlerchange(e) {
    this.setState({
      selected: e.target.value
    });
  }

  handlerAdd = e => {
    let { chosen, other, selected } = this.state;
    chosen.push(selected);
    other = other.filter(x => x !== selected);
    this.setState({
      chosen,
      other,
      [selected]: 0
    });
  };

  handleSliderChange(category, newValue) {
    this.setState({
      [category]: newValue
    });
  }

  handleInputChange(category, value) {
    this.setState({
      [category]: value
    });
  }

  handleBlur(category) {
    if (this.state[category] > 100000) {
      this.setState({
        [category]: 100000
      });
    } else if (this.state[category] < 0) {
      this.setState({
        [category]: 0
      });
    }
  }

  render() {
    const { chosen, selected, other } = this.state;
    return (
      <Row style={{ marginTop: 50 }}>
        <Col sm={12} lg={7}>
          <DonutChart {...this.state} />
        </Col>

        <Col sm={12} lg={5} style={{ marginTop: 40 }}>
          <h3>Monthly Spending</h3>
          {chosen.map(category => (
            <CustomSlider
              key={category}
              category={category}
              value={this.state[category]}
              handleSliderChange={this.handleSliderChange}
              handleInputChange={this.handleInputChange}
              handleBlur={this.handleBlur}
            />
          ))}
          <Row style={{ marginLeft: 20 }}>
            <Col sm={7} lg={9}>
              <FormControl fullWidth style={{ marginTop: 20, maxWidth: 468 }}>
                <InputLabel>Add other category</InputLabel>
                <Select value={selected} onChange={this.handlerchange}>
                  {other.map(category => (
                    <MenuItem value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Col>
            <Col sm={2} lg={2} style={{ marginTop: 30 }}>
              <Button variant="contained" color="secondary" onClick={this.handlerAdd}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Calculator;
