import React, { Component } from "react";
import { connect } from "react-redux";
import { add_reminder, remove_reminder, clear_reminder } from "../actions";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_Reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <div
                className="closeIcon btn btn-danger"
                onClick={() => this.props.remove_reminder(reminder.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="App">
        <img src="Reminders.png" alt="reminder" />
        <div className="reminder-title">
          <h2>Wath should you do?</h2>
        </div>
        <input
          value={this.state.text}
          className="form-control"
          type="text"
          placeholder="Enter What you think..."
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <DatePicker
          className="form-control"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => this.setState({ date: date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button
          className="btn btn-primary  w-100"
          onClick={() => {
            this.props.add_reminder(this.state.text, this.state.date);
            console.log(this.state);
            this.setState = { text: "", date: "" };
            console.log(this.state);
          }}
        >
          Add Remainder
        </button>
        <div>{this.render_Reminders()}</div>
        <button
          className="btn btn-danger w-100"
          onClick={() => this.props.clear_reminder()}
        >
          Clear Remainders
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { reminders: state };
  },
  { add_reminder, remove_reminder, clear_reminder }
)(App);
