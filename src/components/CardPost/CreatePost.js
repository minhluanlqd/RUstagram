import React, {useState} from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const history = useHistory();

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    // Save image 
    const handleSave = (file) => {
        // setFile(file);
        setOpen(false);
        console.log(file[0]);

        const data = new FormData();
        data.append("file", file[0]);
        data.append("upload_preset", "RUstagram");
        data.append("cloud_name", "luantran");

        // POST image to Cloudinary
        fetch("https://api.cloudinary.com/v1_1/luantran/image/upload",{
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUrl(data.url);
        })
        .catch(err => console.log(err));
    }

    const createPost = () => {
        // Create a post
        fetch("http://localhost:5000/createpost", {
            method: "post",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                title,
                body,
                pic: url
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                console.log(data.error);
                toast.error(data.error);
            }else{
                // localStorage.setItem("jwt", data.token);
                // localStorage.setItem("user", JSON.stringify(data.user));
                toast.success("Created Post Successfully");
                history.push('/');
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <form className="create-post-form" noValidate autoComplete="off">
                    <TextField 
                        id="standard-basic" 
                        label="Title" 
                        style={{width: '40%', marginBottom: '80px'}}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Body"  
                        style={{width: '80%', marginBottom: '80px'}}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    {/* <Input type="file" onChange={}/> */}
                <div style={{display: 'flex', justifyContent: 'center', width: '50%'}}>
                    <Button onClick={createPost} style={{width: '40%', border: '2px solid black',fontSize: '12px'}}>
                        Create Post
                    </Button>
                    <Button onClick={handleOpen} style={{width: '40%', border: '2px solid black',fontSize: '12px'}}>
                        Add Image
                    </Button>
                    <Button style={{width: '40%', border: '2px solid red', color: 'red', fontSize: '12px'}}>
                        Cancel
                    </Button>
                </div>
            </form>
            <DropzoneDialog
                open={open}
                onSave={handleSave}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />
        </div>
    );
}

export default CreatePost;