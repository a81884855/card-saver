import React, { Component } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Spend from './Spend';
import ChooseCategories from './ChooseCategories';
import Summary from './Summary';
import Result from './Result';

export class VerticalLinearStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      selected: new Set(),
      steps: ['Select Categories', 'Summary']
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleCategoryDetail = this.handleCategoryDetail.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleRewardBlur = this.handleRewardBlur.bind(this);
  }

  handleNext = () => {
    const { activeStep, selected } = this.state;
    if (activeStep === 0) {
      let categories = [];
      Array.from(selected).forEach(category =>
        categories.push({
          [category]: 0,
          [`${category}Reward`]: 1,
          [`${category}Annual`]: 0
        })
      );
      this.setState({
        activeStep: activeStep + 1,
        ...categories
      });
    } else {
      this.setState({
        activeStep: activeStep + 1
      });
    }
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleAddCategory = categories => {
    const { steps } = this.state;
    steps.splice(1, steps.length - 2, ...categories);
    this.setState({
      steps
    });
  };

  handleCategoryDetail = (detail, value) => {
    const { activeStep } = this.state;
    let info = this.state[activeStep - 1];
    info[detail] = value;
    this.setState({ info });
  };

  handleBlur(category, step) {
    let item = this.state[step];
    if (item[category] > 5000) {
      item[category] = 5000;
    } else if (item[category] < 0) {
      item[category] = 0;
    }
    this.setState({ item });
  }

  handleRewardBlur(category, step) {
    let item = this.state[step];
    if (item[`${category}Reward`] > 100) {
      item[`${category}Reward`] = 100;
    } else if (item[category] < 0 || item[category] === '') {
      item[`${category}Reward`] = 0;
    }
    this.setState({ item });
  }

  getStepContent(step) {
    const { steps, selected } = this.state;
    if (step === steps.length - 1) {
      return <Summary {...this.state} />;
    } else if (step === 0) {
      return <ChooseCategories selected={selected} handleAddCategory={this.handleAddCategory} />;
    } else {
      return (
        <Spend
          category={steps[step]}
          handleCategoryDetail={this.handleCategoryDetail}
          handleBlur={this.handleBlur}
          handleRewardBlur={this.handleRewardBlur}
          {...this.state}
          step={step}
        />
      );
    }
  }

  render() {
    const { activeStep, steps } = this.state;
    return (
      <Container>
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel onClick={this.handleStep(index)}>
                  <span style={{ textTransform: 'capitalize' }}>{label}</span>
                </StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <div>
                    <div>
                      <Button disabled={activeStep === 0} onClick={this.handleBack}>
                        Back
                      </Button>
                      <Button variant="contained" color="primary" onClick={this.handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && <Result {...this.state} />}
        </div>
      </Container>
    );
  }
}

export default VerticalLinearStepper;
