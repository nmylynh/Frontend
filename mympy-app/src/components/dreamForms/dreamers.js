import React from 'react';
import './dreamCard.css';


class Dreamer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        // dreamName: '',
        // amount: '',
        // firstDream: '',
        // inspiration: '',
        // aboutDream: '',
        // dreamImpact: '',
        location: '',
        aboutYou: '',
        goals: '',
        extraInfo: '',


};
}

handleChanges = e => {
    console.log(this.state)
const {name , value} = e.target
this.setState({ [name]: value})
}

saveInfo = e => { 
    e.preventDefault()
    console.log(this.state)
}

render() {
return (
    <div className='dream-Home-Page'> 
        <div className='dreamer-card-app'>

                <div className='form-title'>
                    <h1>Make your dream in reality!</h1>
                    <h2>Tell me about yourself!</h2>
                </div>

        <div className='card-section'>
          <form onSubmit={this.props.saveInfo} className='dreamer-card'>
            <div className='inputs'>
                <div>
                    <p>Tell me about where are you from?</p>
                    <input className='input-style' placeholder='+' name='location' value={this.state.location} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <p>What do you want people to know about you?</p>
                    <input className='input-style' placeholder='+' name='aboutYou' value={this.state.aboutYou} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <p>What are your goals now?</p>
                    <input id='dream-box' className='input-style' placeholder='+' name='goals' value={this.state.goals} onChange={this.handleChanges}></input>   
                </div>
                <div>
                    <p>What other things you want people to now about you?</p>
                    <input className='input-style' placeholder='+' name='extraInfo' value={this.state.extraInfo} onChange={this.handleChanges}></input>   
                </div>
            </div> {/* inputs end */}

                <button /* onClick={this.saveInfo} */ type='submit' className='submit-button'>Next</button>

          </form> {/* dreamer-card end  */}
        </div> {/* card-section end */}
    </div>  {/* dreamer-card-app end  */}


    </div> /* dream-Home-Page end */

)
}
}

{/* <div></div> */}
export default Dreamer