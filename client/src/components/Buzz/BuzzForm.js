import React from 'react';
import './Buzz.css';
import {connect} from 'react-redux';
import {addBuzz} from '../../action/buzz.Action'

class BuzzForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            buzz:'',
            category:'',
            attachment:''
        }
    }

    onSubmit = event =>{
        event.preventDefault();

        this.setState({
            buzz: event.target[0].value,
            category: event.target[1].value,
            attachment: event.target[2].files[0]
        });
        const newBuzz = this.state;

        const formData = new FormData()
        formData.append("buzz", newBuzz.buzz);
        formData.append("category", newBuzz.category);
        formData.append("attachment", newBuzz.attachment);


        this.props.addBuzz(formData)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} action="http://localhost:5000/dashboard/buzz" method='POST' encType='multipart/form-data' >
                <textarea name="buzz" id="buzz"  cols="30" rows="10" placeholder='Share your thoughts'></textarea>
                <select name="category" id="category">
                    <option value="Activity">Activity</option>
                    <option value="Lost and Found">Lost and Found</option>
                </select>
                <input type="file" name="attachment" accept='image/*' id="attachment" />
                <input type="submit" value="Post" />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return{ state }
}

const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm);