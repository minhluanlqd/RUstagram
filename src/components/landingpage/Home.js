import React, {useState, useEffect} from 'react';
import CardPost from '../CardPost/CardPost';

// styling in App.css

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allpost', {
            headers: {
                "Authorization": localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            setData(result.posts);
        })
    }, [])
    return(
        <div className="homeID">
            {
                data.length ? (
                    data.map(item => (
                        <div className="home" key={item._id}>
                            <CardPost img={item.photo} title={item.title} body={item.body} postedBy={item.postedBy.name}/>
                        </div>
                    ))
                ) : 
                <div>
                     Loading....
                </div>
            }
            {/* <div className="home">
                <CardPost/>
            </div>
            <div className="home">
                <CardPost/>
            </div> */}
        </div>
    );
}

export default Home;