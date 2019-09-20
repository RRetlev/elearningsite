import React from "react";
import {Modal, Button} from 'antd';
import RegisterForm from "./form/RegisterForm.js";
import {connect} from 'react-redux';


class RegisterModal extends React.Component {
    state = {
        visible: false
    };

    clearText = () => {
        if (this.props.isUserNameAlreadyInUse) {
            this.props.setIsUserNameAlreadyInUse(false);
        }
        if (this.props.isRegisterSuccessful) {

            this.props.setIsRegisterSuccessful(false);
        }
        if (this.props.isPasswordSame) {

            this.props.setIsPasswordSame(true);
        }
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
        this.clearText();
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
        this.clearText();
    };

    render() {
        return (
            <div>
                <Button className="authBTN" type="primary" onClick={this.showModal}>
                    Register
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <RegisterForm closeModal={this.handleOk}/>
                    {
                        this.props.isRegisterSuccessful ?
                            <div>
                                <p>Registration successful!</p>
                                <p>This modal will close in 3 seconds!</p>
                            </div>
                            :
                            null
                    }
                    {
                        this.props.isUserNameAlreadyInUse ?
                            <p>This username is already in use, please try another!</p>
                            :
                            null
                    }
                    {
                        this.props.isPasswordSame ?
                            null
                            :
                            <p>The passwords you entered are different. Please check again!</p>

                    }
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserNameAlreadyInUse: state.isUserNameAlreadyInUse,
        isRegisterSuccessful: state.isRegisterSuccessful,
        isPasswordSame: state.isPasswordSame,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);