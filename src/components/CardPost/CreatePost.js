import React, {useState} from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState([]);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleSave = (file) => {
        setFile(file);
        setOpen(false);
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