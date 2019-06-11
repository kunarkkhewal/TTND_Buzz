import React from 'react';
import './Buzz.css';
import BuzzForm from './BuzzForm';

class Buzz extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <section>
                        <BuzzForm/>
                        <article></article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Buzz;