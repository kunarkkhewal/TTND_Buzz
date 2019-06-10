import React from 'react';
import SideNavBar from '../utils/SideNavBar/SideNavBar';
import './Buzz.css'
import Header from '../utils/Header/Header';

class Buzz extends React.Component {

    

    render() {
        return (
            <div>
                <main>
                    <section>
                        <form action="" method="POST">
                            <textarea name="buzz" id="buzz" cols="30" rows="10" placeholder='Share your thoughts'></textarea>
                            <select name="category" id="category">
                                <option value="Activity">Activity</option>
                                <option value="Lost and Found">Lost and Found</option>
                            </select>
                            <input type="file" name="attachment" id="attachment" />
                            <input type="submit" value="Post" />
                        </form>
                        <article></article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Buzz;