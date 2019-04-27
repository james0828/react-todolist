import React from 'react'

class BootStrapContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default BootStrapContainer