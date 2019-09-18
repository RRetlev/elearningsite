import React from "react";
import {PageHeader, Tag, Button, Statistic, Descriptions, Row} from 'antd';
import RegisterModal from "../modal/RegisterModal";

const HeaderTest = () => {
    return (
        <div style={headerStyle}>
            <PageHeader
                onBack={() => window.history.back()}
                title="Let's be a MILLIONAIRE,"
                subTitle="User Name"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">Primary</Button>,
                ]}>
                <Row type="flex">
                    <Statistic title="Status" value="Pending"/>
                    <Statistic
                        title="Price"
                        prefix="$"
                        value={568.08}
                        style={{
                            margin: '0 32px',
                        }}/>
                    <Statistic title="Balance" prefix="$" value={3345.08}/>
                </Row>
            </PageHeader>
        </div>
    );
};

const headerStyle = {
    background: '#333 ',
};
export default HeaderTest;