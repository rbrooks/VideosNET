import React from 'react';
import { Typography, Button, TextField } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.edit) {
            this.props.onVideoUpdate();
        } else {
            this.props.onVideoAdd();
        }
    }

    render() {
        return (
            <div>
                <Typography
                    variant="h5"
                    color="inherit"
                    noWrap
                >{(this.props.edit) ? 'Edit' : 'Add'} Video</Typography>

                <form className="videoForm" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Title"
                        placeholder="Title"
                        value={this.props.name}
                        onChange={this.props.onNameChange}
                        required
                        fullWidth
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        type="number"
                        label="Year"
                        placeholder="Year"
                        value={this.props.year}
                        onChange={this.props.onYearChange}
                        required
                        margin="normal"
                        variant="filled"
                    />
                    <br />
                    <TextField
                        multiline
                        variant="filled"
                        rowsMax="4"
                        margin="normal"
                        label="Description"
                        placeholder="Description"
                        fullWidth
                        rows="4"
                        value={this.props.description}
                        onChange={this.props.onDescChange}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        style={{ marginTop: 15 }}
                        >
                        <SaveIcon />
                        Save
                    </Button>
                    {this.props.edit &&
                        <Button
                            variant="contained"
                            size="small"
                            onClick={this.props.onCancel}
                            style={{ marginTop: 15, marginLeft: 15 }}
                        >
                            <CancelIcon />
                            Cancel
                        </Button>
                     }
                </form>
            </div>
        );
    }
}

export default VideoForm;