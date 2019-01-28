import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DropInCSS.css';

import env from './Env';
import { Context } from './Context';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;

class StripeDropIn extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      error: false
    };
  }

  createOptions(fontSize, padding) {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4'
          },
          padding
        },
        invalid: {
          color: '#9e2146'
        }
      }
    };
  }

  async submit(ev, context) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({
      name: context.state.email
    });
    try {
      let response = await fetch(`${PAYMENT_MANAGER}/purchase/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.id,
          email: context.state.email,
          discount_code: context.state.discount_code
        })
      });

      if (response.ok) {
        console.log('Purchase Complete! response:', response);
        this.props.setSubscription(await response.text());
      } else {
        console.error('StripeDropIn.submit() response not ok:', response);
        throw Error('response not ok');
      }
    } catch (e) {
      console.error('Error on StripeDropIn.submit():', e);
      return this.setState({ error: true });
    }
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div style={{ width: '100%' }}>
            <form onSubmit={ev => this.submit(ev, context)}>
              <label>
                Card details
                <CardElement {...this.createOptions(this.props.fontSize)} />
              </label>
              <button>Save</button>
              <div
                style={{ display: this.state.error ? 'table-cell' : 'none' }}
                className="error-message w-form-fail"
              >
                <div className="text-block-2">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </form>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default injectStripe(StripeDropIn);
