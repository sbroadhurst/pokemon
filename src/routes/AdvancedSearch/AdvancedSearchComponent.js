import React from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import elements from './elements'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import queryString from 'query-string'

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
    backgroundColor: '#457fbc'
  },
  screen: {
    margin: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  underline: {
    border: '2px solid white'
  },
  format: {
    display: 'flex',
    flexDirection: 'row'
  },
  radio: {
    fontWeight: 'bold',
    fontSize: 25
  }
}

class AdvancedSearchComponent extends React.Component {
  boxChecked = value => {
    this.props.setAdvancedType(value._targetInst.pendingProps.value)
  }

  changeLegal = value => {
    this.props.setLegalType(value.target.value)
  }

  goRes = results => {
    const parsed = queryString.parse(this.props.name)
    parsed.name = this.props.advancedName
    parsed.abilitytext = this.props.advancedText
    parsed.types = this.props.advancedType
    parsed.setCode = this.props.legalType
    const stringified = queryString.stringify(parsed)
    this.props.history.push('/advancedSearchResults/?' + stringified)
  }

  render() {
    return (
      <div style={styles.screen}>
        <form>
          <TextField
            underlineStyle={styles.underline}
            hintText="Name"
            floatingLabelText="Name"
            onChange={value => this.props.setAdvancedName(value.target.value)}
            defaultValue={this.props.advancedName}
          />
          <br />
          <TextField
            hintText="Flip"
            underlineStyle={styles.underline}
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
              style={styles.format}
            >
              <RadioButton label="All" style={styles.radio} value="" />
              <RadioButton
                label="Standard"
                style={styles.radio}
                value="xyp|xy8|xy9|g1|xy10|xy11|xy12|sm1|smp|sm2|sm3|sm35|sm4|sm5"
              />
              <RadioButton
                label="Expanded"
                style={styles.radio}
                value="bwp|bw1|bw2|bw3|bw4|bw5|bw6|dv1|bw7|bw8|bw9|bw10|xyp|bw11|xy0|xy1|xy2|xy3|xy4|xy5|dc1|xy6|xy7|xy8|xy9|g1|xy10|xy11|xy12|sm1|smp|sm2|sm3|sm35|sm4|sm5"
              />
            </RadioButtonGroup>
          </div>
          <br />
          <RaisedButton label="Search" onClick={this.goRes} primary={true} />
        </form>
      </div>
    )
  }
}

export default AdvancedSearchComponent
