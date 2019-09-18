import React from 'react';

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
                <h3>Add Video</h3>

                <form className="videoForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" value={this.state.name} required onChange={this.handleNameChange} />
                    <input type="number" placeholder="Year" value={this.state.year} required onChange={this.handleYearChange} /><br/>
                    <textarea type="text" placeholder="Description" cols="50" rows="2" value={this.state.description} onChange={this.handleDescChange} /><br/>
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default VideoForm;