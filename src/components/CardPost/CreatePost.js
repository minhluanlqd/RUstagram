import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
 
export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
    render() {
        return (
            <div>
                <form className="create-post-form" noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Title" style={{width: '40%', marginBottom: '80px'}} />
                        <TextField id="standard-basic" label="Body"  style={{width: '80%', marginBottom: '80px'}}/>
                    <div style={{display: 'flex', justifyContent: 'center', width: '50%'}}>
                        <Button onClick={this.handleOpen.bind(this)} style={{width: '40%', border: '2px solid black',fontSize: '12px'}}>
                            Add Image
                        </Button>
                        <Button style={{width: '40%', border: '2px solid red', color: 'red', fontSize: '12px'}}>
                            Cancel
                        </Button>
                    </div>
                </form>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}