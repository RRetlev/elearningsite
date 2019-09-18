import React, {Component} from 'react'

export class AddQuestion extends Component {
    state = {
        question: ' ',
        trueAnswer: ' ',
        false1: ' ',
        false2: ' ',
        false3: ' ',
        topic: ' '
    };

    onSubmit = (e) => {
        e.preventDefault();
        const result = {
            question: this.state.question,
            answers: [
                {
                    right: true,
                    text: this.state.trueAnswer,
                },
                {
                    right: false,
                    text: this.state.false1,
                },
                {
                    right: true,
                    text: this.state.false2,
                },
                {
                    right: true,
                    text: this.state.false3,
                }
            ],
            topic: this.state.topic
        };

        fetch('http://localhost:8080/new-question', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result)

        })
            .then(res => console.log(res));
        this.setState({question: ' ', trueAnswer: ' ', false1: ' ', false2: ' ', false3: ' ', topic: ' '})
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} className="background-color">

                <div className="background-color">
                    <input required
                           className="askInput"
                           type='text'
                           name='question'
                           onChange={this.onChange}
                           placeholder='Question'

                    />
                    <input required
                           className="askInput"
                           type='text'
                           name='trueAnswer'
                           onChange={this.onChange}
                           placeholder='True answer'

                    />
                    <input required
                           className="askInput"
                           type='text'
                           name='false1'
                           onChange={this.onChange}
                           placeholder='First false answer'

                    />
                    <input required
                           className="askInput"
                           type='text'
                           name='false2'
                           onChange={this.onChange}
                           placeholder='Second false answer'

                    />
                    <input required
                           className="askInput"
                           type='text'
                           name='false3'
                           onChange={this.onChange}
                           placeholder='Third false answer'
                    />
                </div>
                <select name="topic" onChange={this.onChange} required>
                    <option value="" selected disabled hidden>Choose a topic</option>
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
                    type='submit'
                    value='Submit'
                    className='submit-btn'
                />
            </form>


        )
    }
}

export default AddQuestion