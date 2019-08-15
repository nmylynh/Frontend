import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Carousel from './Carousel.js';
import Sidebar from './Sidebar.js';
import DreamPageBody from './DreamPageBody.js';
import { fetchDreamById, fetchImage } from '../../actions';

const DreamPageDiv = styled.div`
  background: linear-gradient(0deg, #7647b6 0%, #194980 100%);
  font-family: Open Sans, sans-serif;
  .dream-page {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1124px;
    padding-bottom: 100px;

    .sidebar-body {
      display:flex;
    }
  }
`;

class DreamPage extends React.Component {

  componentDidMount() {
    this.props.fetchDreamById(this.props.match.params.id);
    this.props.fetchImage(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currDream !== prevProps.currDream) {
      const thisDream = this.props.currDream;
      console.log(thisDream)
      console.log(this.props.dreams)
      this.setState({
        dream: thisDream,
        user: { username: thisDream.username }
        // allUserDreams: thisDream.user.dreams
      });
    }
  }


  render() {
    console.log(this.props.currDream)
    return (
      <DreamPageDiv>
        <div className="dream-page">
          <Carousel />
          <div className="sidebar-body">
            <Sidebar />
            <DreamPageBody />
          </div>
        </div>
      </DreamPageDiv>
    );
  }
}

const mapStateToProps = ({ dreams }) => {
  return {
    currDream: dreams.currDream,
    dreamImg: dreams.imageById
  }
}

export default connect(mapStateToProps, { fetchDreamById, fetchImage })(DreamPage);
