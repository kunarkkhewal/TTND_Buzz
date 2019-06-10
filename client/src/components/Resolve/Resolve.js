import React from 'react';
import SideNavBar from '../SideNavBar';

class Resolve extends React.Component{
    
    logout = ()=>{
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <header>
                    <nav>
                        <button onClick={this.logout}>Logout</button>
                    </nav>
                    <img src="" alt=""/>
                </header>
                <main>
                    <div>buzz Component</div>
                    <aside><SideNavBar/></aside>
                    <section>
                        <form action=""></form>
                        <article></article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Resolve;