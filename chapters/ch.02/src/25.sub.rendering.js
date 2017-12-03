import React, { Component } from 'react';

class Menu extends Component () {
  renderUserMenu () {
    // JSX for user menu
  }

  renderAdminMenu () {
    // JSX for admin menu
  }

  render () {
    <div>
      {this.userExists && this.renderUserMenu()}
      {this.userIsAdmin && this.renderAdminMenu()}
    </div>
  }
}
