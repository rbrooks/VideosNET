import React from 'react';
import { Typography, Button, TextField } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', description: '', year: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescChange(e) {
        this.setState({ description: e.target.value });
    }

    handleYearChange(e) {
        this.setState({ year: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: this.state.name.trim(),
            description: this.state.description.trim(),
            year: this.state.year.trim()
        };

        this.props.onVideoSubmit(data);
    }

    render() {
        return (
            <div>
                <Typography
                    variant="h5"
                    color="inherit"
                    noWrap
                >Add Video</Typography>

                <form className="videoForm" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Title"
                        placeholder="Title"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                        fullWidth
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        type="number"
                        label="Year"
                        placeholder="Year"
                        value={this.state.year}
                        onChange={this.handleYearChange}
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
                        placeholder="Description"
                        fullWidth
                        rows="4"
                        value={this.state.description}
                        onChange={this.handleDescChange}
                    />
                    <br />
                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
                        style={{ marginTop: 15 }}
                    >
                        <SaveIcon />
                        Save
                    </Button>
                </form>
            </div>
        );
    }
}

export default VideoForm;