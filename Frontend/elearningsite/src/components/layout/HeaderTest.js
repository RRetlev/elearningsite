import React, {Component} from "react";
import {PageHeader} from 'antd';
import RegisterModal from "../modal/RegisterModal";
import LoginModal from "../modal/LoginModal";
import {connect} from 'react-redux';
import LogoutButton from "../modal/LogoutButton";
import { jsxFragment } from "@babel/types";
import { withRouter} from 'react-router-dom';
import NewQuestionButton from '../modal/NewQuestionButton'

class HeaderTest extends Component {

    render() {

        return (
            <div style={headerStyle}>

                <PageHeader
                    onBack={() => window.history.back()}
                    title="Asker"


                    subTitle="A place where knowledge is born"
                    extra={[
                        <div>
                    {this.props.isLoggedIn ? 
                    <div>
                        <NewQuestionButton />
                    </div>   :
                    <div>
                    </div> 
                    }
                    </div>,
                        <div style={buttonDivStyle}>
                            {this.props.isLoggedIn ?
                                <div>
                                    <LogoutButton/>
                                </div> :
                                <div>
                                    <LoginModal/>
                                    <RegisterModal/>
                                </div>
                            }
                    {/*{*/}
                    {/*    this.props.isRun*/}
                    {/*        ?<p> {this.props.score}</p>*/}
                    {/*        : null*/}
                    {/*}*/}
                        </div>
                    ]}>
                </PageHeader>
            </div>
        );
    };
}


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
        isRun: state.isRun,
        score: state.score,
    }
}

export default connect(mapStateToProps, null)(withRouter(HeaderTest));