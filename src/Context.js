// first we will make a new context
import React, { Component } from 'react';
import ScrollUtil from './ScrollUtil';
import BOT_Gateway from './BOT_Gateway';
import console from './Log';
import { getDiscountedPrice } from './PaymentGateway';

export const Context = React.createContext();

export const REGISTRATION_STEPS = {
  None: 0,
  LandingPageRegister: 1,
  LandingPagePayment: 2,
  LandingPageConnect: 3,
  LandingPageSuccess: 4,
  LandingPageLogin: 11
};

export const unsavedState = {
  registrationStep: 11,
  scrollY: 0,
  scrollHeight: document.body.scrollHeight,
  try_email: '',
  try_e_password: '',
  try_e_password_confirm: '',
  set_e_password: undefined,
  set_e_password_confirm: undefined,
  set_username: undefined,
  set_password: undefined,
  subscription: undefined,
  bot_active: false,
  errorConnectAccount: false,
  errorPayment: false,
  notifications: []
};

const settings = {};

// Then create a provider Component
export class Provider extends Component {
  state = {
    ...unsavedState,
    ...settings,
    started: true,
    do_comment_enabled: true,
    do_follow_enabled: true,
    do_like_enabled: true,
    enable_unfollow: true,
    enable_follow_user_followers: true,
    enable_like_by_feed: true,
    enable_like_by_locations: true,
    enable_like_by_tags: true,
    enable_interact_by_comments: true,
    enable_message: true,
    unfollow_users_nonfollowers: false,
    speed: 100,
    timetable: [
      '1904-02-01 07:01:00Z',
      '1904-02-01 07:59:00Z',
      '1904-02-01 08:01:00Z',
      '1904-02-01 08:59:00Z',
      '1904-02-01 09:01:00Z',
      '1904-02-01 09:59:00Z',
      '1904-02-01 10:01:00Z',
      '1904-02-01 10:59:00Z',
      '1904-02-01 11:01:00Z',
      '1904-02-01 11:59:00Z',
      '1904-02-01 12:01:00Z',
      '1904-02-01 12:59:00Z',
      '1904-02-01 13:01:00Z',
      '1904-02-01 13:59:00Z',
      '1904-02-01 14:01:00Z',
      '1904-02-01 14:59:00Z',
      '1904-02-01 15:01:00Z',
      '1904-02-01 15:59:00Z',
      '1904-02-01 16:01:00Z',
      '1904-02-01 16:59:00Z',
      '1904-02-01 17:01:00Z',
      '1904-02-01 17:59:00Z',
      '1904-02-02 07:01:00Z',
      '1904-02-02 07:59:00Z',
      '1904-02-02 08:01:00Z',
      '1904-02-02 08:59:00Z',
      '1904-02-02 09:01:00Z',
      '1904-02-02 09:59:00Z',
      '1904-02-02 10:01:00Z',
      '1904-02-02 10:59:00Z',
      '1904-02-02 11:01:00Z',
      '1904-02-02 11:59:00Z',
      '1904-02-02 12:01:00Z',
      '1904-02-02 12:59:00Z',
      '1904-02-02 13:01:00Z',
      '1904-02-02 13:59:00Z',
      '1904-02-02 14:01:00Z',
      '1904-02-02 14:59:00Z',
      '1904-02-02 15:01:00Z',
      '1904-02-02 15:59:00Z',
      '1904-02-02 16:01:00Z',
      '1904-02-02 16:59:00Z',
      '1904-02-02 17:01:00Z',
      '1904-02-02 17:59:00Z',
      '1904-02-03 07:01:00Z',
      '1904-02-03 07:59:00Z',
      '1904-02-03 08:01:00Z',
      '1904-02-03 08:59:00Z',
      '1904-02-03 09:01:00Z',
      '1904-02-03 09:59:00Z',
      '1904-02-03 10:01:00Z',
      '1904-02-03 10:59:00Z',
      '1904-02-03 11:01:00Z',
      '1904-02-03 11:59:00Z',
      '1904-02-03 12:01:00Z',
      '1904-02-03 12:59:00Z',
      '1904-02-03 13:01:00Z',
      '1904-02-03 13:59:00Z',
      '1904-02-03 14:01:00Z',
      '1904-02-03 14:59:00Z',
      '1904-02-03 15:01:00Z',
      '1904-02-03 15:59:00Z',
      '1904-02-03 16:01:00Z',
      '1904-02-03 16:59:00Z',
      '1904-02-03 17:01:00Z',
      '1904-02-03 17:59:00Z',
      '1904-02-04 07:01:00Z',
      '1904-02-04 07:59:00Z',
      '1904-02-04 08:01:00Z',
      '1904-02-04 08:59:00Z',
      '1904-02-04 09:01:00Z',
      '1904-02-04 09:59:00Z',
      '1904-02-04 10:01:00Z',
      '1904-02-04 10:59:00Z',
      '1904-02-04 11:01:00Z',
      '1904-02-04 11:59:00Z',
      '1904-02-04 12:01:00Z',
      '1904-02-04 12:59:00Z',
      '1904-02-04 13:01:00Z',
      '1904-02-04 13:59:00Z',
      '1904-02-04 14:01:00Z',
      '1904-02-04 14:59:00Z',
      '1904-02-04 15:01:00Z',
      '1904-02-04 15:59:00Z',
      '1904-02-04 16:01:00Z',
      '1904-02-04 16:59:00Z',
      '1904-02-04 17:01:00Z',
      '1904-02-04 17:59:00Z',
      '1904-02-05 07:01:00Z',
      '1904-02-05 07:59:00Z',
      '1904-02-05 08:01:00Z',
      '1904-02-05 08:59:00Z',
      '1904-02-05 09:01:00Z',
      '1904-02-05 09:59:00Z',
      '1904-02-05 10:01:00Z',
      '1904-02-05 10:59:00Z',
      '1904-02-05 11:01:00Z',
      '1904-02-05 11:59:00Z',
      '1904-02-05 12:01:00Z',
      '1904-02-05 12:59:00Z',
      '1904-02-06 09:01:00Z',
      '1904-02-06 09:59:00Z',
      '1904-02-06 10:01:00Z',
      '1904-02-06 10:59:00Z',
      '1904-02-06 11:01:00Z',
      '1904-02-06 11:59:00Z',
      '1904-02-06 12:01:00Z',
      '1904-02-06 12:59:00Z',
      '1904-02-06 13:01:00Z',
      '1904-02-06 13:59:00Z',
      '1904-02-06 14:01:00Z',
      '1904-02-06 14:59:00Z',
      '1904-02-05 13:01:00Z',
      '1904-02-05 13:59:00Z',
      '1904-02-05 14:01:00Z',
      '1904-02-05 14:59:00Z',
      '1904-02-05 15:01:00Z',
      '1904-02-05 15:59:00Z',
      '1904-02-06 15:01:00Z',
      '1904-02-06 15:59:00Z',
      '1904-02-06 16:01:00Z',
      '1904-02-06 16:59:00Z',
      '1904-02-06 17:01:00Z',
      '1904-02-06 17:59:00Z',
      '1904-02-06 18:01:00Z',
      '1904-02-06 18:59:00Z',
      '1904-02-05 17:01:00Z',
      '1904-02-05 17:59:00Z',
      '1904-02-05 18:01:00Z',
      '1904-02-05 18:59:00Z',
      '1904-02-05 16:01:00Z',
      '1904-02-05 16:59:00Z',
      '1904-02-07 09:01:00Z',
      '1904-02-07 09:59:00Z',
      '1904-02-07 10:01:00Z',
      '1904-02-07 10:59:00Z',
      '1904-02-07 11:01:00Z',
      '1904-02-07 11:59:00Z',
      '1904-02-07 12:01:00Z',
      '1904-02-07 12:59:00Z',
      '1904-02-07 13:01:00Z',
      '1904-02-07 13:59:00Z',
      '1904-02-07 14:01:00Z',
      '1904-02-07 14:59:00Z',
      '1904-02-07 15:01:00Z',
      '1904-02-07 15:59:00Z',
      '1904-02-07 16:01:00Z',
      '1904-02-07 16:59:00Z',
      '1904-02-07 17:01:00Z',
      '1904-02-07 17:59:00Z',
      '1904-02-07 18:01:00Z',
      '1904-02-07 18:59:00Z'
    ]
  };
  handleScroll() {
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.pageYOffset + window.innerHeight;
    this.setState({ scrollY, scrollHeight });
  }

  componentWillMount() {
    if (process.env.NODE_ENV === 'production') {
      new ScrollUtil().init(this.handleScroll.bind(this));
    }
    window.addEventListener('click', this.isBotActive.bind(this));
  }

  async isBotActive() {
    if (this.state.username) {
      const isBotRunning = await BOT_Gateway.isBotRunning(this.state.username);
      const bot_active =
        this.state.started && this.isScheduled(this) && isBotRunning;
      console.log('bot_active', bot_active);
      this.setState({ bot_active });
    }
  }

  isScheduled(context) {
    let { timetable } = context.state;
    let tt = [];
    for (let i = 0; i < timetable.length; i += 2) {
      tt = tt.concat({ from: timetable[i], to: timetable[i + 1] });
    }
    tt = tt.filter(
      t =>
        this.format(t.from) < this.format() && this.format() < this.format(t.to)
    );
    return tt.length > 0;
  }

  format(date = new Date()) {
    let d = new Date(date);
    return new Date(4, 1, d.getDay(), d.getHours(), d.getMinutes());
  }

  async pushNotification(text) {
    this.setState(p => ({ notifications: [...p.notifications, text] }));
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setState: this.setState.bind(this),
          isBotActive: this.isBotActive.bind(this),
          pushNotification: this.pushNotification.bind(this)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
