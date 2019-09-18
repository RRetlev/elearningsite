import React, {Component} from 'react';
import ServerNotFoundIMG from '../../images/ServerNotFound.png';

class ServerNotFound extends Component {
    render() {
        return (
                <div style={serverNotFoundImg}></div>
        );
    }

}

const serverNotFoundImg = {
    background: `url(${ServerNotFoundIMG})` ,
    backgroundColor:'#06aefd',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '800px 600px',
};

export default ServerNotFound;