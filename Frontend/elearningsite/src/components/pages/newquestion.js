import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class AddQuestion extends Component{
    state={
        question:' ',
        trueanswer:' ',
        false1:' ',
        false2:' ',
        false3:' ',
    };

    onSubmit=(e) =>{
        const result={
            question:this.state.question,
            answers:[
                {
                    right:true,
                    text:this.state.trueanswer,
                },
                {
                    right:false,
                    text:this.state.false1,
                },
                {
                    right:true,
                    text:this.state.false2,
                },
                {
                    right:true,
                    text:this.state.false3,
                }
            ]
        }
        fetch('http://localhost:8080/new-question', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result)
        });
        this.setState({question:' ', trueanswer:' ',false1:' ',false2:' ',false3:' ',})
    };

    onChange =(e) => this.setState({[e.target.name]:e.target.value});

    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input
                type='text'
                name='question'
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}}
                placeholder='Question'

            />
            <input
                type='text'
                name='trueanswer'
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}}
                placeholder='True answer'

            />
            <input
                type='text'
                name='false1'
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}}
                placeholder='First false answer'

            />
            <input
                type='text'
                name='false2'
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}}
                placeholder='Second false answer'

            />
            <input
                type='text'
                name='false3'
                onChange={this.onChange}
                style={{flex:'10', padding:'5px'}}
                placeholder='Third false answer'

            />
            <input
                type='submit'
                value='Submit'
                className='btn'
                style={{flex:1}}
            />
        </form>


        )
    }
}

export default AddQuestion