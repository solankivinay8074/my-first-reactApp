import React, { Component } from 'react'

class Form extends Component {
    
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;
  
    return (
      <div className="container-fluid">
        <hr/>
        <form className="form-inline row">
          <div className="input-group col-sm-5">
            <div className="input-group-prepend">
              <span className="input-group-text" id="">Name</span>
            </div>
            <input type="text" className="form-control" name="name" id="name" value={name} onChange={this.handleChange} />
          </div>
          <div className="input-group col-sm-5">
          <div className="input-group-prepend">
              <span className="input-group-text" id="">Job</span>
            </div>
            <input type="text" className="form-control" name="job" id="job" value={job} onChange={this.handleChange} />
          </div>
          <div className="input-group col-sm-2">
            <input type="button" className="btn btn-primary" value="Save" onClick={this.submitForm} />
          </div>
        </form>
      </div>
      
    );
  }
}
export default Form;