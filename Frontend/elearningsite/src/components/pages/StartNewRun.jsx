import React, { Component } from 'react'
class StartNewRun extends Component {
    state = {
        topic: "",
        numOfQuesitions: 0
    }

    onSubmit = (e) => {
        e.preventDefault()
        const result = {
            topic: this.state.topic,
            numOfQuesitions: this.state.numOfQuesitions
        }
        fetch(`http://localhost:8080/${this.state.topic}/${this.state.numOfQuesitions}`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result)
            })
        this.setState({
            topic: "",
            numOfQuesitions: 0
        })

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (<div>
            <form>

                <select name="topic" onChange={this.onChange} required >
                    <option value="" selected disabled hidden >Choose a topic</option>
                    <option value="Programming">Programming</option>
                    <option value="History">History</option>
                    <option value="Biology">Biology</option>
                    <option value="Maths">Maths</option>
                    <option value="Literature">Literature</option>
                    <option value="Religion">Religion</option>
                    <option value="Tech">Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Humor">Humor</option>
                    <option value="Movies">Movies</option>
                </select>


                <input
                    required
                    type="text"
                    name="numOfQuestions"
                    value={this.onChange}
                    placeholder="How many questions do you want?">
                </input>


                <input
                    type="submit"
                    value="Submit">
                </input>
            </form>
        </div>);
    }
}

export default StartNewRun;