import React from "react";
import {Modal, Button} from 'antd';
import LoginForm from "./form/LoginForm";
import {connect} from 'react-redux';

class LoginModal extends React.Component {
    state = {
        visible: false
    };

    clearText = () => {
        if (this.props.wrongLogInCredentials) {
            this.props.setIsWrongCredentials(false);
        }
    };

    closeModal = () => {
        this.setState({
            visible: false,
        })
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
                    Log in
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <LoginForm
                        closeModal={this.closeModal}/>
                    {
                        this.props.wrongLogInCredentials
                            ?
                            <div><p>Incorrect Username or Password! </p>
                                <p>Please try again!</p>
                            </div> : null
                    }
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        wrongLogInCredentials: state.wrongLogInCredentials,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsWrongCredentials: function (logInBooleanType) {
            const action = {type: "SETWRONGLOGINCRED", logInBooleanType};
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(LoginModal);