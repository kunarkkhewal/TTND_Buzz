import React from 'react';
import './BuzzForm.css';
import { connect } from 'react-redux';
import { addBuzz } from '../../../action/buzz.Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faImage, faFilter } from '@fortawesome/free-solid-svg-icons'
import {warningAlert} from '../../../utils/alerts'

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

        if (event.target[0].value.replace(/^\s+|\s+$/gm, '') === "") {
            warningAlert("Text area left Empty")
        } else {
            const formData = new FormData()
            formData.append("buzz", event.target[0].value);
            formData.append("category", event.target[1].value);
            formData.append("attachment", event.target[2].files[0]);

            this.props.addBuzz(formData)
        }



        event.target.reset();

    }

    render() {
        console.log('in buzz form cheking state:=>  ', this.props.state)
        return (
            <div className='buzzForm rounded-lg' >
                <div className='formTitle'>Create buzz</div>
                <form onSubmit={this.onSubmit} encType='multipart/form-data' >
                    <textarea name="buzz" id="buzz" required cols="30" rows="10" placeholder='Share your thoughts'></textarea>
                    <div className="lowerBar">
                        <div className="category">
                            <select name="category" id="category">
                                <option value="Activity">Activity</option>
                                <option value="Lost and Found">Lost and Found</option>
                            </select>
                            <div className="font-awesome">
                                <label htmlFor="attachment">
                                    {image}
                                </label>
                                <input type="file" name="attachment" accept='image/*' id="attachment" />
                            </div>
                        </div>
                        <div className="font-awesome">
                            <label htmlFor="post-buzz">
                                {rightArrow}
                            </label>
                            <input id='post-buzz' type="submit" value="Post" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />
const image = <FontAwesomeIcon icon={faImage} />



const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm);