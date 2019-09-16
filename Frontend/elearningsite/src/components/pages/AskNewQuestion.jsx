import React, {Component} from 'react'

export class AddQuestion extends Component {
    state = {
        question: ' ',
        trueAnswer: ' ',
        false1: ' ',
        false2: ' ',
        false3: ' ',
    };

    onSubmit = (e) => {
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
            ]
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
        this.setState({question: ' ', trueAnswer: ' ', false1: ' ', false2: ' ', false3: ' ',})
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} /*style={{display:'flex'}}*/>

                <div className="input-field-wrapper">
                    <input required
                        type='text'
                        name='question'
                        onChange={this.onChange}
                        // style={{flex:'10', padding:'5px'}}
                        placeholder='Question'

                    />
                    <input required
                        type='text'
                        name='trueAnswer'
                        onChange={this.onChange}
                        // style={{flex:'10', padding:'5px'}}
                        placeholder='True answer'

                    />
                    <input required
                        type='text'
                        name='false1'
                        onChange={this.onChange}
                        // style={{flex:'10', padding:'5px'}}
                        placeholder='First false answer'

                    />
                    <input required
                        type='text'
                        name='false2'
                        onChange={this.onChange}
                        // style={{flex: '10', padding: '5px'}}
                        placeholder='Second false answer'

                    />
                    <input required
                        type='text'
                        name='false3'
                        onChange={this.onChange}
                        // style={{flex:'10', padding:'5px'}}
                        placeholder='Third false answer'
                    />
                </div>
                <input
                    type='submit'
                    value='Submit'
                    className='submit-btn'
                    // style={{flex:1}}
                />
            </form>


        )
    }
}

export default AddQuestion