import React from 'react'

class AdvancedResults extends React.Component {
  getResults() {
    console.log(this.props)
    const name = this.props.match.params.name
    const text = this.props.match.params.text
    const type = this.props.match.params.type
    console.log(name, text, type)
  }
  render() {
    //  console.log(this.props)
    return <div>{this.getResults()} </div>
  }
}

export default AdvancedResults
