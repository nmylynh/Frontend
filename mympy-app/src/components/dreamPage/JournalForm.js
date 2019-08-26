import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./journaList.css";
import { connect } from "react-redux";
import { addJournal, updateJournal } from "../../actions/journals";

const bodyStyle = {
  fontSize: "25px",
  height: "440px",
  marginTop: "40px"
};

const headStyle = {
  fontSize: "30px",
  color: "#1B5485",
  paddingLeft: "145px"
};

const journalForm = {
  fontSize: "25px",
  width: "120%",
  paddingLeft: "70px",
  color: "#1B5485"
};

const h1 = {
  marginBottom: "15px",
  paddingLeft: "100px"
};

const h2 = {
  marginBottom: "15px",
  paddingLeft: "60px"
};

const inputStyle1 = {
  height: "70px",
  width: "325px",
  marginBottom: "30px",
  borderRadius: "5px"
};

const inputStyle2 = {
  height: "150px",
  width: "325px",
  marginBottom: "30px",
  borderRadius: "5px"
};

const journalSubmitButton = {
  height: "40px",
  width: "120px",
  borderRadius: "5rem",
  fontSize: "20px",
  marginLeft: "100px",
  backgroundColor: "#A1F85C",
  marginBottom: "20px"
};

const journalFormStyle = {
  width: "120%"
};

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      journal: {
        title: "",
        body: "",
        user_id: null,
        dream_id: null,
        id: null
      },
      showModal: false
    };
  }

  componentDidMount = () => {
    this.setState({
      journal: {
        user_id: this.props.user,
        dream_id: this.props.dreams,
        title: this.props.title,
        body: this.props.body,
        id: this.props.journalId
      },
      showModal: true
    });
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      journal: {
        ...this.state.journal,
        [e.target.name]: e.target.value
      },
      showModal: true
    });
  };

  handleFinalSubmit = e => {
    const newJournal = { ...this.state.journal };
    // e.preventDefault()
    if (newJournal.id) {
      this.props.updateJournal(newJournal)
    } else {
      this.props.addJournal(newJournal);
    }
  };

  



  render() {
    return (
      <div style={journalFormStyle}>
        <Modal isOpen={this.state.modal}>
          <ModalHeader style={headStyle}> Journal Form
          <i class="far fa-window-close" onClick={() => this.props.closeModal()}></i>
          </ModalHeader>
          <ModalBody style={bodyStyle}>
            <div>
              <form style={journalForm}>
                <h1 style={h1}>Journal Title</h1>
                <input
                  style={inputStyle1}
                  name="title"
                  id="title"
                  onChange={this.handleChanges}
                  value={this.state.journal.title}
                />
                <h1 style={h2}>Share Your Thoughts</h1>
                <input
                  style={inputStyle2}
                  name="body"
                  id="body"
                  onChange={this.handleChanges}
                  value={this.state.journal.body}
                />
                <button
                  style={journalSubmitButton}
                  onClick={this.handleFinalSubmit}
                 
                >
                 {this.props.button}
                </button>
              </form>
            </div>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ users, dreams }) => {
  return {
    authZeroUser: users.authZeroUser,
    user: dreams.currDream.user_id,
    dreams: dreams.currDream.id
  };
};

export default connect(
  mapStateToProps,
  { addJournal, updateJournal }
)(FormModal);
