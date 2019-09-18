import React from "react";
import { Modal, Button } from 'antd';
import RegisterForm from "./form/RegisterForm.js";

class RegisterModal extends React.Component {
    state = { visible: false };

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
                    Register
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <RegisterForm/>
                </Modal>
            </div>
        );
    }
}

export default RegisterModal;