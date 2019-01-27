import React, { Component } from 'react';
import '../App.css';

class Findpet extends Component {
    state = {
        species: "",
        name: "",
        age: ""
    }
    render() {
        return (
            <div className="new"><br /><br /><br />
                <form method='post' action='\findpet'>
                    <h4>Find a pet in the database</h4><br />
                    <input type='text' placeholder='Enter Species' name='species' value={this.state.species} onChange={this.handleChange.bind(this)}></input><br /><br />
                    {/* <input type='text' placeholder='Enter pet name' name='name' value={this.state.name} onChange={this.handleChange.bind(this)}></input><br/>
        <input type='text' placeholder='Enter pet age' name='age' value={this.state.age} onChange={this.handleChange.bind(this)}></input><br/><br/> */}
                    <input type="submit" value="Submit pet"></input>
                </form>
            </div>
        );
    }
    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    async fetcher() {
        var res = await fetch('http://localhost:3000/findpet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
        const content = await res.json();
    }
}

export default Findpet;
