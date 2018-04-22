import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import elements from './elements'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

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
  },
  paper: {
    padding: 2,
    width: 220,
    backgroundColor: '#23262b'
  }
}

class AdvancedSearchComponent extends React.Component {
  boxChecked = value => {
    this.props.setAdvancedType(value._targetInst.pendingProps.value)
  }

  changeLegal = value => {
    this.props.setLegalType(value.target.value)
  }

  render() {
    return (
      <form>
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          onChange={value => this.props.setAdvancedName(value.target.value)}
          defaultValue={this.props.advancedName}
        />
        <br />
        <TextField
          hintText="Flip"
          floatingLabelText="Ability Text"
          onChange={value => this.props.setAdvancedText(value.target.value)}
          defaultValue={this.props.advancedText}
        />
        <br />

        {elements.map((info, index) => {
          return (
            <div key={index} style={{ display: 'inline-block', padding: 5 }}>
              <Paper zDepth={5} style={styles.paper}>
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
        <br />

        <div style={{ display: 'inline-block', padding: 5 }}>
          <RadioButtonGroup
            name="legal"
            labelPosition="left"
            onChange={this.changeLegal}
          >
            <RadioButton
              label="Standard"
              style={styles.checkbox}
              value="standardlegal"
            />
            <RadioButton
              label="Expanded"
              style={styles.checkbox}
              value="expandedlegal"
            />
          </RadioButtonGroup>
        </div>
        <Link
          to={{
            pathname: '/advancedSearchResults/',
            query: {
              name: this.props.advancedName,
              abilitytext: this.props.advancedText,
              types: this.props.advancedType,
              legal: this.props.legalType
            }
          }}
        >
          <RaisedButton label="Search" primary={true} />
        </Link>
      </form>
    )
  }
}

export default AdvancedSearchComponent
