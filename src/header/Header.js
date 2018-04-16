import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionSearch from 'material-ui/svg-icons/action/search'
import SearchBar from 'material-ui-search-bar'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <IconButton iconStyle={styles.mediumIcon} style={styles.medium}>
            <ActionHome />
          </IconButton>
        </Link>
        <Link to="advancedSearch">
          <RaisedButton primary={true} label="Advanced Search" />
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={{ pathname: '/search/' + this.props.SearchText }}>
            <IconButton style={{ left: '310px' }}>
              <ActionSearch />
            </IconButton>{' '}
          </Link>
          <SearchBar
            onChange={value => this.props.setSearchText(value)}
            onRequestSearch={value => console.log('search pushed')}
          />
        </div>
        <hr />
      </div>
    )
  }
}

export default Header
