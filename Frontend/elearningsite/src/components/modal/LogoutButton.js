import React from "react";
import {Button} from 'antd';
import {connect} from 'react-redux';
import {postUserLogout} from "../../services/ApiCallService";

class LogoutButton extends React.Component {

    logOut = () => {
        this.props.setIsLoggedIn(false);
        postUserLogout();
    };


    render() {
        return (
            <div>
                <Button className="authBTN" type="primary" onClick={this.logOut}>
                    Log out
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoggedIn: function (booleanType) {
            const action = {type: "CHANGEISLOGGEDIN", booleanType};
            dispatch(action);
        }
    }
};
export default connect(null, mapDispatchToProps)(LogoutButton);