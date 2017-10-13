import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Toggle from "material-ui/Toggle";
import "./Anger.css";
import Slider from "material-ui/Slider";
import firebase from "./AngerFB";

const styles = {
  toggle: {
    marginBottom: 16
  },
  trackOff: {
    backgroundColor: "#ff9d9d"
  },
  thumbSwitched: {
    backgroundColor: "red"
  },
  trackSwitched: {
    backgroundColor: "#ff9d9d"
  }
};

const min = 0;
const max = Math.pow(10, 2);

class Anger extends Component {
  state = {
    flag: false
  };
  handleToggle = (event, value) => {
    this.setState({ flag: value, value: 0 });
  };
  handleSlider = (event, value) => {
    this.setState({ value: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("anger");
    const item = {
      flag: this.state.flag,
      value: this.state.value,
      date: new Date().toLocaleString()
    };
    itemsRef.push(item);
    this.setState({
      flag: false,
      value: 0
    });
  };
  render() {
    return [
      <section className="add-item">
        <form onSubmit={this.handleSubmit}>
          <Toggle
            label="Are you Angry Today ?"
            style={styles.toggle}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            onToggle={this.handleToggle}
            toggled={this.state.flag}
          />

          {this.state.flag &&
            <div className="sliderWrapper">
              <p>
                <span>Anger Percentage:</span>
                <span>{this.state.value}%</span>
              </p>
              <Slider
                min={min}
                max={max}
                step={max / 100}
                value={this.state.value}
                onChange={this.handleSlider}
              />
            </div>}

          <RaisedButton
            disabled={!(this.state.flag && this.state.value > 0)}
            type="submit"
            label="Submit"
            fullWidth={true}
            primary={true}
          />
        </form>
      </section>,
      <section className="display-item">
        <div className="wrapper">
          <ul />
        </div>
      </section>
    ];
  }
}

export default Anger;
