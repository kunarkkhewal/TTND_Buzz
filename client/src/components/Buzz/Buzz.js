import React from 'react';
import './Buzz.css';
import BuzzForm from './BuzzForm';
import BuzzFeed from './BuzzFeed';

class Buzz extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <section>
                        <BuzzForm/>
                        <article>
                            <BuzzFeed/>
                        </article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Buzz;