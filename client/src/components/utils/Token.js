import React from 'react';

class Token extends React.Component {

        componentDidMount() {
                const token = (this.props.location.search).split('=')[1];
                localStorage.setItem("token", token);
                this.props.history.push('/dashboard/buzz');
        }

        render() {      
                return (
                        <div></div>
                )
        }
}

export default Token;