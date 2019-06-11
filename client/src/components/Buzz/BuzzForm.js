import React from 'react';
import './Buzz.css';

class BuzzForm extends React.Component {
    render() {
        return (
            <form action="">
                <textarea name="buzz" id="buzz" cols="30" rows="10" placeholder='Share your thoughts'></textarea>
                <select name="category" id="category">
                    <option value="Activity">Activity</option>
                    <option value="Lost and Found">Lost and Found</option>
                </select>
                <input type="file" name="attachment" id="attachment" />
                <input type="submit" value="Post" />
            </form>
        )
    }
}

export default BuzzForm;