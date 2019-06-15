import React from 'react';
import './BuzzManager.css';
import BuzzForm from './BuzzForm/BuzzForm';
import BuzzFeed from './BuzzFeed/BuzzFeed';

class Buzz extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <section>
                        <BuzzForm />
                        <article>
                            <BuzzFeed />
                        </article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Buzz;