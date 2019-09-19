import React from "react";
import {Form, Icon, Input, Button} from 'antd';

class RegisterForm extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
    };


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password === values.confirmPassword) {

                }
                console.log('Received values of form: ', values);
                console.log("yeeee:   " + values.username);
                console.log("yeeee:   " + values.password);
                console.log("yeeee:   " + values.confirmPassword);
            } else {
                console.log("this log:" + values)
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

                <Form.Item style={formStyle}>
                    {getFieldDecorator('confirmPassword', {
                        rules: [{required: true, message: 'Please repeat your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Confirm Password"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const formStyle = {
    width: '450px'
};

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(RegisterForm);

export default WrappedNormalLoginForm;