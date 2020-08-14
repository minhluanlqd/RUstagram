import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App';

const Profile = () => {

    const [myPost, setMyPost] = useState([]);
    const {state, dispatch} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/mypost', {
            headers: {
                "Authorization" : localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            setMyPost(result.myPost);
        })
    }, [])

    return(
        <div style={{maxWidth: "550px", margin: "0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "15px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1595421392184-8503607f8d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                        alt="No Avatar"
                        style={{width: "120px", height: "120px", borderRadius: "50%"}}/>
                </div>
                <div>
                    <h4 style={{padding: '1px', fontSize: '30px'}}>{state?state.name:"Loading..."}</h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        width: '100%',
                    }}>
                        <h5 style={{padding: '1px', fontSize: '15px'}}>20 posts</h5>
                        <h5 style={{padding: '1px', fontSize: '15px'}}>100 followers</h5>
                        <h5 style={{padding: '1px', fontSize: '15px'}}>100 following</h5>
                    </div>
                </div>
            </div>
            
            <div className="gallery">
                {
                    myPost.map(item => {
                        return(
                            <img src={item.photo}
                                alt="invalid"
                                className="pics"
                                key={item._id}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Profile;