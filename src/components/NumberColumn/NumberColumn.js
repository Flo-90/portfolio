import React, { Component } from 'react';
import './NumberColumn.css';

class NumberColumn extends Component {

    constructor() {
        super();
        this.state = { 
          height: window.innerHeight
        };
        this.updateDimensions = this.updateDimensions.bind(this);
      }
  
      componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
      }
      updateDimensions() {
        this.setState({
          height: window.innerHeight
        });
      }
  
      render() {
        let arrayItems = [];
        let wHeight = window.innerHeight / 20
        
        for (let i = 1; i < wHeight; i++) {
            arrayItems.push(i);
        }
  
        return (
          <div className="number-column">
            {arrayItems.map((numbers) => <div key={numbers}>{numbers}</div>)}
          </div>
        );
    }
  }

  export default NumberColumn;



