import React from "react";
import {Form, Icon, Input, Button} from 'antd';
import {postUserLogin} from '../../../services/ApiCallService.jsx'
import {connect} from 'react-redux';

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                postUserLogin(values.username, values.password).then(response => {
                    if (response.status === 200) {
                        this.props.setIsLoggedIn(true);
                        response.json().then(resp =>this.props.setUsername(resp.username));
                        console.log(this.props.username);
                        console.log(this.props.isLoggedIn);
                        this.props.closeModal();
                    } else {
                        console.log("fail")
                    }
                })

            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item style={formStyle}>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item style={formStyle}>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const formStyle = {
    width: '450px'
};

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(LoginForm);

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedIn,
        username: state.username,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoggedIn: function (booleanType) {
            const action = {type: "CHANGEISLOGGEDIN", booleanType};
            dispatch(action);
        },
        setUsername: function (username) {
            const action = {type: "SETUSERNAME", username};
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);