import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../queries/queries.js';
import { Helmet } from 'react-helmet';
import { Col, Row, Image, Modal, Button } from 'react-bootstrap';
import CardDetail from './CardDetail';
import 'animate.css/animate.min.css';

const head = () => {
  return (
    <Helmet bodyAttributes={{ class: 'allCardsPage' }}>
      <title>All Cards</title>
    </Helmet>
  );
};

export class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: '',
      website: ''
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow = (name, website) => {
    this.setState({
      show: true,
      name,
      website
    });
  };

  displayCards = props => {
    let data = props.data;
    if (data.loading) {
      return <div>Loading card detail...</div>;
    } else {
      return data.Cards.map(card => {
        return <Card key={card.id} card={card} handleShow={this.handleShow} />;
      });
    }
  };

  render() {
    const { show, name, website } = this.state;
    return (
      <>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardDetail name={name} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ show: false })}>
              Close
            </Button>
            <Button variant="primary" href={website}>
              Learn More
            </Button>
          </Modal.Footer>
        </Modal>

        <h2>All Credit Cards</h2>
        <Row>
          {head()}
          {this.displayCards(this.props)}
        </Row>
      </>
    );
  }
}

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState({
      hovered: true
    });
    setTimeout(() => {
      this.setState({
        hovered: false
      });
    }, 1500);
  }
  render() {
    const { card } = this.props;
    const { hovered } = this.state;
    return (
      <Col
        xs={10}
        md={6}
        lg={4}
        key={card.id}
        style={{ marginBottom: '15px' }}
        onClick={() => this.props.handleShow(card.name, card.website)}
      >
        <Image
          src={`/images/${card.image}`}
          style={{
            width: '100%',
            border: 'none'
          }}
          onMouseEnter={this.toggleHover}
          className={hovered ? 'flipInX animated' : ''}
          thumbnail
        />
        <p style={{ textAlign: 'center' }}>{card.name}</p>
      </Col>
    );
  }
}

export default graphql(getCardsQuery)(CardList);
