import React from 'react';
import './Buzz.css';
import { connect } from 'react-redux';
import { addBuzz } from '../../action/buzz.Action'

class BuzzForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buzz: '',
            category: 'Activity',
            attachment: ''
        }
    }

    onSubmit = event => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("buzz", event.target[0].value);
        formData.append("category", event.target[1].value);
        formData.append("attachment", event.target[2].files[0]);

        this.props.addBuzz(formData)

        event.target.reset();

        //! Jugad Wala code, ask sir about this
        //? search solution for reloading
        setInterval(()=>{window.location.reload()},5000)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} encType='multipart/form-data' >
                <textarea name="buzz" id="buzz" required cols="30" rows="10" placeholder='Share your thoughts'></textarea>
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
    return { state }
}

const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm);