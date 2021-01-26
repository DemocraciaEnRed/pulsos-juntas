import React, { Component } from 'react'
import { Link } from 'react-router'
import bus from 'bus'
import isAbsoluteUrl from 'is-absolute-url'
import config from 'lib/config'
import userConnector from 'lib/frontend/site/connectors/user'
import UserBadge from './user-badge/component'
import AnonUser from './anon-user/component'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userForm: null,
      showToggleSidebar: null,
      showSidebar: null
    }
  }

  componentWillMount () {
    bus.on('user-form:load', this.onLoadUserForm)
    bus.on('sidebar:enable', this.showToggleSidebarChange)
    bus.on('sidebar:show', this.showSidebarChange)
  }

  componentWillUnmount () {
    bus.off('user-form:load', this.onLoadUserForm)
    bus.off('sidebar:enable', this.showToggleSidebarChange)
    bus.off('sidebar:show', this.showSidebarChange)
  }

  onLoadUserForm = (formName) => {
    this.setState({
      userForm: formName
    })
  }

  showToggleSidebarChange = (bool) => {
    this.setState({
      showToggleSidebar: bool
    })
  }

  showSidebarChange = (bool) => {
    this.setState({
      showSidebar: bool
    })
  }

  handleToggleSidebar = (evt) => {
    evt.preventDefault()
    bus.emit('sidebar:show', !this.state.showSidebar)
  }

  render () {
    const classes = ['header ext-header']

    if (config.headerContrast) classes.push('with-contrast')

    return (
      <header className={classes.join(' ')}>
        <div className='container header-items-wrapper'>
          {
            this.state.showToggleSidebar &&
            (
              <button
                id='toggleButton'
                onClick={this.handleToggleSidebar}>
                <span className='icon-menu' />
              </button>
            )
          }

          <Logo >
              {/* <img className='logo-desktop-2' src={'/lib/frontend/site/home-multiforum/logo-header-2.png'} /> */}
              {/* <img className='logo-desktop-3' src={'/lib/frontend/site/home-multiforum/logo-header-3.png'} /> */}
              <img className='logo-desktop' src={config.logo} />
              <img className='logo-mobile' src={config.logoMobile} />
          </Logo>

          <div className='header-items'>
            <div className='header-item org-link'>
              <Link
                to='/ayuda/como-funciona'
                className='header-link hidden-md-down'>
                <span>¿Cómo funciona?</span>
              </Link>
            </div>

            {/* Sacamos el ícono momentáneamente
            this.props.user.state.fulfilled && (
              <div className='header-item notifications-link'>
                <Link
                  to='/notificaciones'
                  className='header-link'>
                  <span className='icon-bell' />
                </Link>
              </div>
            )*/}

            {this.props.user.state.fulfilled && (
              <UserBadge />
            )}

            {this.props.user.state.rejected && (
              <AnonUser form={this.state.userForm} />
            )}
          </div>
        </div>
      </header>
    )
  }
}

const Logo = (props) => {
  const isAbsolute = isAbsoluteUrl(config.homeLink)
  const attr = {
    className: 'logo',
    [isAbsolute ? 'href' : 'to']: config.homeLink,
    rel: isAbsolute ? 'noreferrer nofollow' : null
  }
  return (isAbsolute ? 
    (<a {...attr}> {props.children}</a>)
    : 
    (<Link {...attr}>{props.children}</Link>)
  )
}




export default userConnector(Header)
