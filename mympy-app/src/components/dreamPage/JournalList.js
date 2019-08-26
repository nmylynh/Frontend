import React, { Component } from "react";
import "./journaList.css";
import FormModal from "../dreamPage/JournalForm";


class JournalList extends Component {
  state = {
    showModal: false,
    body: '',
    title: '',
    journalId: ''
  };

  toggleUpdate = () => {
    this.setState({
      showModal: true
    });
    
  };

  componentDidMount = () => {
    this.setState({
      body: this.props.body,
      title:this.props.title,
      journalId: this.props.id
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
}

  render() {
    return (
      <div className="journal-element">
          <div>
            <h1>{this.props.body}</h1>
            <p>{this.props.posted_on}</p>
           <a> <i id='edit-icon' class="far fa-edit fa-2x"  onClick={this.toggleUpdate}>
             
            </i> </a>
            {this.state.showModal && (
              <FormModal
                button="Update"
                body={this.state.body}
                title={this.state.title}
                journalId={this.state.journalId}
                showModal={this.state.showModal} 
                closeModal={this.closeModal}
             
              />
            )}
           <a><i class="far fa-trash-alt fa-2x"
              
              onClick={() =>
                window.confirm("Are you sure you wish to delete this item?") &&
                this.props.deleteJournal(this.props.id)
              
              }
            >
             
            </i></a> 
           
          </div>
      </div>
    );
  }
}

export default JournalList;
