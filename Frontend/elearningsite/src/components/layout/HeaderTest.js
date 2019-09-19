import React from "react";
import {PageHeader} from 'antd';
import RegisterModal from "../modal/RegisterModal";
import LoginModal from "../modal/LoginModal";
import {connect} from 'react-redux';

const HeaderTest = () => {
    return (
        <div style={headerStyle}>
            <PageHeader
                onBack={() => window.history.back()}
                title="Let's be a MILLIONAIRE,"
                subTitle="User Name"
                extra={[
                    // { ::this.props.isLoggedIn ?
                    <div style={buttonDivStyle}>
                        <LoginModal/>
                        <br/>
                        <RegisterModal/>
                    </div>
                    // :null}
                ]}>
            </PageHeader>
        </div>
    );
};

const buttonDivStyle = {
    float: 'left',
    // textAlign:'center',
    // inline:'block'
};

const headerStyle = {
    background: '#333 ',
};


function mapStateToProps(state) {
    return {
        username: state.username,
        isLoggedIn: state.isLoggedIn,
    }
}

export default connect(mapStateToProps, null)(HeaderTest);