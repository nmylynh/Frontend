import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JournalList from './JournalList';
import { fetchDreamJournals } from '../../actions'

const JournalEntryDiv = styled.div`
	.JE-title {
		background-color: #012345;
		color: white;
		height: 42px;
		font-size: 22px;
		padding: 10px 24px;
		margin-bottom: 6px;
	}

	.JE-body {
		background-color: white;
		padding: 28px 30px;

		.JE-entry-title {
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 6px;
		}

		.JE-entry {
			font-size: 20px;
			line-height: 1.3;
		}

		.read-more {
			font-weight: bold;
			font-size: 20px;
			text-align: right;
			margin-left: 38px;
		}

		.coming-soon {
			display: flex; 
			justify-content: center;
			img {
				width: 40%;
	   	 	filter: opacity(70%) invert(100%) ;
			}
		}
	}
`

class JournalEntry extends Component {
	state = {
	}
  
	componentDidMount() {
	  this.props.fetchDreamJournals(this.props.currDream.id);

	}


render() {
	return (
		<JournalEntryDiv>
			<h2 className="JE-title">Journal Entry</h2>
			<div className="JE-body">
					{this.props.journals.map(journal =>
						<JournalList
						dream={this.props.dream}
						key={journal.id}
						id={journal.id}
						title={journal.title}
						body={journal.body}
						post_date={journal.created_at}
						edited_on={journal.updated_at}
						currentUser={this.props.user} />
					)}
				{/* <div className="coming-soon">
					<img src={comingSoon} alt='Coming Soon' />
				</div> */}
			</div>
		</JournalEntryDiv>
		)
	}
}	

function mapStateToProps(state) {
	return {
	  user: state.auth.user,
	  journals: state.journals.dreamJournals,
	  currDream: state.dreams.currDream
	}
  }
  
  
  export default connect(
	mapStateToProps,
	{
		fetchDreamJournals
	}
  )(JournalEntry);
  