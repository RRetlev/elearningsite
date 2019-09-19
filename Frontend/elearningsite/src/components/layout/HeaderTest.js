import React from "react";
import {PageHeader} from 'antd';
import RegisterModal from "../modal/RegisterModal";
import LoginModal from "../modal/LoginModal";

const HeaderTest = () => {
    return (
        <div style={headerStyle}>
            <PageHeader
                onBack={() => window.history.back()}
                title="Let's be a MILLIONAIRE,"
                subTitle="User Name"
                extra={[
                    <div style={buttonDivStyle}>
                        <LoginModal />
                        <br/>
                        <RegisterModal/>
                    </div>
                ]}>
            </PageHeader>
        </div>
    );
};

const buttonDivStyle={
    float:'left',
    // textAlign:'center',
    // inline:'block'
};

const headerStyle = {
    background: '#333 ',
};
export default HeaderTest;