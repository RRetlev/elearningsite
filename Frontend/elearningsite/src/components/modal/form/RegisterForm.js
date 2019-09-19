import React from "react";
import {Form, Icon, Input, Button} from 'antd';
import {postUserRegistration} from "../../../services/ApiCallService";
import {connect} from 'react-redux';

class RegisterForm extends React.Component {


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password === values.confirmPassword) {
                    postUserRegistration(values.username, values.password).then(response => {
                        response.json().then(resp => {
                                if (resp === true) {
                                    this.props.setIsRegisterSuccessful(true);
                                    this.props.setIsUserNameAlreadyInUse(false);
                                    this.props.setIsPasswordSame(true);
                                    setTimeout(() => this.props.closeModal(), 3000)
                                } else {
                                    this.props.setIsUserNameAlreadyInUse(true);
                                }
                            }
                        );
                    })
                }else{
                    this.props.setIsPasswordSame(false);
                }
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

function mapStateToProps(state) {
    return {
        isUserNameAlreadyInUse: state.isUserNameAlreadyInUse,
        isRegisterSuccessful: state.isRegisterSuccessful,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsUserNameAlreadyInUse: function (registerBooleanType) {
            const action = {type: "SETUSERNAMEINUSE", registerBooleanType};
            dispatch(action);
        },
        setIsRegisterSuccessful: function (registerSuccessBoolean) {
            const action = {type: "SETREGISTERSUCCESSFUL", registerSuccessBoolean};
            dispatch(action);
        },
        setIsPasswordSame: function (passSameBoolean) {
            const action = {type: "SETISPASSSAME", passSameBoolean};
            dispatch(action);
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);