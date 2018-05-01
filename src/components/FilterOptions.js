import React from 'react';


export default class FilterOptions extends React.Component {

  handleChange(e) {
    const val = e.target.value;
    this.props.changeOption(val);
  }
  render() {
    return (
      <div className="styled-select">
        <select className="userLive" id="selectValue" onChange={this.handleChange.bind(this)}>
          {this.props.options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </div>
    );
  }
}