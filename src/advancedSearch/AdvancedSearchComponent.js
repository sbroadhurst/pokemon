import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import elements from './elements'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const styles = {
  checkbox: {
    position: 'relative',
    marginLeft: 23,
    fontWeight: 'bold',
    fontSize: 25
  },
  ele: {
    height: 22,
    width: 22,
    position: 'absolute'
  }
}

class AdvancedSearchComponent extends React.Component {
  boxChecked = value => {
    this.props.setAdvancedType(value._targetInst.pendingProps.value)
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          onChange={value => this.props.setAdvancedName(value.target.value)}
          defaultValue={this.props.advancedName}
        />
        <br />
        <TextField
          hintText="Text"
          floatingLabelText="Card Text"
          onChange={value => this.props.setAdvancedText(value.target.value)}
          defaultValue={this.props.advancedText}
        />
        <br />

        {elements.map((info, index) => {
          return (
            <div key={index} style={{ display: 'inline-block', padding: 5 }}>
              <Paper
                zDepth={5}
                style={{
                  padding: 2,
                  width: 220,
                  backgroundColor: '#23262b'
                }}
              >
                <div>
                  <img src={info.image} style={styles.ele} alt={info.name} />
                  <Checkbox
                    label={info.name}
                    labelPosition="left"
                    style={styles.checkbox}
                    labelStyle={{ color: 'white' }}
                    iconStyle={{ fill: 'white' }}
                    value={info.name}
                    onCheck={this.boxChecked}
                  />
                </div>
              </Paper>
            </div>
          )
        })}
        <Link
          to={{
            pathname:
              '/advancedSearchResults/' +
              this.props.advancedName +
              '/' +
              this.props.advancedText +
              '/' +
              this.props.advancedType
          }}
        >
          <RaisedButton label="Search" primary={true} />
        </Link>
      </div>
    )
  }
}

export default AdvancedSearchComponent
