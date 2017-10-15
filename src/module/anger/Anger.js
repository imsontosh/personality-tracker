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
    flag: false,
    items :[]
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
  componentDidMount(){
    const itemsRef = firebase.database().ref("anger");
    itemsRef.on('value',(snapshot)=>{
      let items = snapshot.val();
      let newState = [];
      for(let item in items){
        newState.push({
          id:item,
          flag : items[item].flag,
          value : items[item].value,
          date : items[item].date
        });
      }
      this.setState({
        items : newState
      },()=>{
        console.log('items',this.state.items);
      });

    });
  }
  render() {
    return <div className="container">
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
          <ul>
            {
              this.state.items.length > 0 ? 
              this.state.items.map((item)=>{
                return(
                  <li key={item.id}>
                    <h3>{item.flag}</h3>
                    <p>{item.value}</p>
                    <p>{item.date}</p>
                  </li>
                  )
              }) : <li>No Data Found</li>
            }
          </ul>
        </div>
      </section>
    </div>;
  }
}

export default Anger;
