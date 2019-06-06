import React from 'react';

class Token extends React.Component {

        componentDidMount() {
                console.log("Query+++++++++++", (this.props.location.search).split('=')[1]);
                const token = (this.props.location.search).split('=')[1];
                localStorage.setItem("token", token);
                const value = localStorage.getItem("token");
                console.log("Toekn is here =>>>>", value);
                this.props.history.push('/buzz');
        }

        render() {      
                return (
                        <div></div>
                )
        }
}

export default Token;