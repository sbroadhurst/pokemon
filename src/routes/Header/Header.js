import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import SearchBar from 'material-ui-search-bar'
import RaisedButton from 'material-ui/RaisedButton'
import { transparent } from 'material-ui/styles/colors'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  label: {
    top: 15
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Toolbar style={{ backgroundColor: transparent }}>
          <ToolbarGroup firstChild={true}>
            <Link to="/">
              <IconButton iconStyle={styles.mediumIcon} style={styles.medium}>
                <ActionHome />
              </IconButton>
            </Link>
          </ToolbarGroup>
          <ToolbarGroup>
            <Link to="/advancedSearch">
              <RaisedButton primary={true} label="Advanced Search" />
            </Link>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <SearchBar
              onChange={value => this.props.setSearchText(value)}
              onRequestSearch={value => console.log('search pushed')}
            />

            <Link to={{ pathname: '/search/' + this.props.SearchText }}>
              <RaisedButton
                label="SEARCH"
                style={{ margin: '10px', height: '50px' }}
                labelStyle={styles.label}
              />
            </Link>
          </ToolbarGroup>
        </Toolbar>
        <hr />
      </div>
    )
  }
}

export default Header
