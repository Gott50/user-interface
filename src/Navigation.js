import React, { Component } from 'react';
import { Context } from './Context';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            className="menubar menubar_landing_page w-nav"
            style={{
              width: 'auto',
              position: 'inherit'
            }}
          >
            <div className="menubarleft animation">
              <h4 className="titlelogo useon">Use on</h4>
              <img
                src="images/iPhone-X-icon.svg"
                alt=""
                className="devicesicon"
              />
              <img
                src="images/iPad-icon.svg"
                alt=""
                className="devicesicon tablet"
              />
              <img
                src="images/MacBook-icon.svg"
                alt=""
                className="devicesicon macbook"
              />
            </div>
            <div className="menubarleft landingpage_left">
              <NavLink
                to="/"
                className="titlelogo landingpage_logo"
                style={{ zIndex: 999 }}
              />
              <div className="container w-container">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="just_because_the_fucking_nav_menu_wont_distribute">
                    <div className="nav_menu_half">
                      <NavLink
                        className="title_menu_element landingpage_element w-nav-link"
                        to="/interface"
                        onClick={this.clickOnLogin(context)}
                      >
                        Interface
                      </NavLink>
                      <a
                        href="#"
                        className="title_menu_element feature_in_development w-nav-link"
                      >
                        Community
                      </a>
                      <a
                        href="#"
                        className="title_menu_element feature_in_development w-nav-link"
                      >
                        Your statistics
                      </a>
                      <a
                        href="#"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        Pricing
                      </a>
                      <a
                        href="/legal"
                        className="title_menu_element landingpage_element w-nav-link"
                      >
                        Legal
                      </a>
                    </div>
                    <div className="nav_menu_half righthalf">
                      <a
                        href="#"
                        className="title_menu_element right profile_name_in_nav_menu w-nav-link"
                      >
                        Tash Sultana
                      </a>
                      <div className="profilepic profile_pic_in_nav_menu" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="menubarright feature_in_development">
              <div
                data-w-id="0952be67-6932-e3f7-baeb-289252b9db33"
                className="menu-button w-nav-button"
              >
                <div className="menuicon w-icon-nav-menu" />
              </div>
              <h2 className="title_menu_element right">Tash Sultana</h2>
              <div className="profilepic" />
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" />
          </div>
        )}
      </Context.Consumer>
    );
  }

  clickOnLogin(context) {
    return !this.isLoggedin(context) ? this.login.bind(context) : null;
  }

  login() {
    this.setState({ registrationStep: 11 });
  }

  isLoggedin(context) {
    return context.state.email && context.state.e_password;
  }
}
