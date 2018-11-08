import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

class CreateEvent extends Component {
    render() {
        return (
            <Paper>
                <form onSubmit={this.handleSubmit}>
                    <label>Event title:</label>
                    <input type="text" name="title"/><br/>
                    <label>Date:</label>
                    <input type="text" name="date"/><br/>
                    <label>Location:</label>
                    <input type="pac-input" name="location" id="location-input"/><br/>
                    <label height="50px">Description:</label>
                    <textarea rows="4" cols="50" name="desc"></textarea><br/>
                    <Button variant="contained" color="secondary" >Submit</Button>
                </form>

            </Paper>
        );
    }
}

export default CreateEvent;