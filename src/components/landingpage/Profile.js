import React from 'react';

const Profile = () => {
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
                    <h4 style={{padding: '1px', fontSize: '30px'}}>John Curtis</h4>
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
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
                <img src="https://images.unsplash.com/photo-1595349393900-d34580c180af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="invalid"
                    className="pics"
                />
            </div>
        </div>
    );
}

export default Profile;