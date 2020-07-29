import React from 'react';
import CardPost from '../CardPost/CardPost';

// styling in App.css

const Home = () => {
    return(
        <div className="homeID">
            <div className="home">
                <CardPost/>
            </div>
            <div className="home">
                <CardPost/>
            </div>
            <div className="home">
                <CardPost/>
            </div>
        </div>
    );
}

export default Home;