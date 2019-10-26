import React, { Component } from 'react';
import CustomSlider from './Slider';
import { Row, Col } from 'react-bootstrap';
import { MenuItem, Button, Menu, Paper, Divider } from '@material-ui/core';
import DonutChart from './DonutChart';
import displayIcon from '../../assets/helper/displayIcon';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 500,
      restaurantReward: 0.01,
      restaurantSaving: 15,
      grocery: 300,
      groceryReward: 0.01,
      grocerySaving: 9,
      gas: 200,
      gasReward: 0.01,
      gasSaving: 6,
      chosen: ['restaurant', 'grocery', 'gas'],
      other: ['online', 'phone', 'travel', 'furnitures', 'streaming', 'utilities'],
      anchorEl: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
  }

  handlerAdd = category => {
    let { chosen, other } = this.state;
    chosen.push(category);
    other = other.filter(x => x !== category);
    this.setState({
      chosen,
      other,
      [category]: 0,
      [`${category}Reward`]: 0.01
    });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSliderChange(category, newValue) {
    this.setState({
      [category]: newValue,
      [`${category}Saving`]: this.state[`${category}Reward`] * newValue * 3
    });
  }

  handleInputChange(category, value) {
    this.setState({
      [category]: value
    });
  }

  handleCardChange(category, card) {
    const spend = this.state[category];
    let [name, rate, limit, annual] = card.split('/');
    rate = rate / 100;
    let saving = 0;
    if (limit > 0) {
      if (spend < limit) {
        saving = spend * rate * 3;
      } else {
        saving = (limit * rate + (spend - limit) / 100) * 3;
      }
    } else {
      saving = spend * rate * 3;
    }
    this.setState({
      [`${category}Card`]: name,
      [`${category}Reward`]: rate,
      [`${category}Saving`]: saving,
      [`${category}Annual`]: annual
    });
  }

  handleBlur(category) {
    if (this.state[category] > 5000) {
      this.setState({
        [category]: 5000
      });
    } else if (this.state[category] < 0) {
      this.setState({
        [category]: 0
      });
    }
  }

  render() {
    const { chosen, other, anchorEl } = this.state;
    return (
      <Row style={{ marginTop: 50 }}>
        <Col sm={12} lg={5} style={{ marginBottom: 40 }}>
          <DonutChart {...this.state} />
        </Col>
        <Col sm={12} lg={7} style={{ margin: '5px auto' }}>
          <Paper style={{ padding: '1.5rem 2.5rem 2.5rem 1.5rem' }}>
            <Row>
              <Col sm={7} md={7}>
                <h3>Monthly Spending</h3>
              </Col>
              <Col sm={5} md={5} style={{ textAlign: 'right' }}>
                <Button
                  style={{ margin: 0 }}
                  variant="contained"
                  color="primary"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  Add Category
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  {other.map(category => (
                    <MenuItem
                      key={category}
                      value={category}
                      onClick={() => this.handlerAdd(category)}
                    >
                      {displayIcon(category)}
                      <span className="ml-2" style={{ textTransform: 'capitalize' }}>
                        {category}
                      </span>
                    </MenuItem>
                  ))}
                </Menu>
              </Col>
            </Row>
            {chosen.map(category => (
              <div key={category}>
                <CustomSlider
                  category={category}
                  reward={this.state[`${category}Reward`]}
                  saving={this.state[`${category}Saving`]}
                  annual={this.state[`${category}Annual`]}
                  value={this.state[category]}
                  handleCardChange={this.handleCardChange}
                  handleSliderChange={this.handleSliderChange}
                  handleInputChange={this.handleInputChange}
                  handleBlur={this.handleBlur}
                />
                <Divider />
              </div>
            ))}
          </Paper>
        </Col>
      </Row>
    );
  }
}

export default Calculator;