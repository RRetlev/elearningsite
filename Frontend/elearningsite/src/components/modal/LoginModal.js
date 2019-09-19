import React from "react";
import {Modal, Button} from 'antd';
import LoginForm from "./form/LoginForm";

class LoginModal extends React.Component {
    state = {
        visible: false
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
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
                </Modal>
            </div>
        );
    }
}

export default LoginModal;