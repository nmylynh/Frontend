import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../search_bar/DreamSearchbar'
import Card from '../Card.js';
import styled from 'styled-components';

const DreamMarketDiv = styled.div`
	
	.cards-container {
		display: flex;
		flex-wrap: wrap;
    padding: 0 1%;

		.card-wrapper {
			width: 33.33%;

      .card{
        margin: 1% 2%;
      }
		}
	}
`

class DreamMarket extends React.Component {
  constructor() {
  	super();
  }
  render() {
	  console.log(this.props)
	let filteredDreams = this.props.dreams.filter(dream => dream.title.includes(this.props.searchDreams))
	let dreams = this.props.searchDreams ? filteredDreams : this.props.dreams
	
    return (

      <DreamMarketDiv>
        <div className="cards-container">
        	{ dreams.map( dream => {
        		return <div className="card-wrapper" key={dream.id}>
        			<Card dream={dream} />
        		</div>
        	})}
        </div>
      </DreamMarketDiv>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
	dreams: dreams.featured,
	searchDreams: dreams.searchDreams
});

export default connect(mapStateToProps)(DreamMarket);