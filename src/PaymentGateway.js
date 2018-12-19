import React from 'react';
import DropIn from './DropIn';
import env from './Env';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;

export default class PaymentGateway extends React.Component {
  instance;

  state = {
    clientToken: null,
    error: false
  };

  async componentDidMount() {
    // Get a client token for authorization from your server
    const response = await fetch(`${PAYMENT_MANAGER}/client_token/`);
    const clientToken = await response.text(); // If returned as JSON string
    this.setState({
      clientToken
    });
  }

  async buy() {
    try {
      // Send the nonce to your server
      let { nonce } = await this.instance.requestPaymentMethod();
      const response = await fetch(`${PAYMENT_MANAGER}/purchase/`, {
        method: 'POST',
        body: JSON.stringify({ ...this.props.userdata, nonce }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const subscription = await response.text();
      console.log('pay subscripton: ', subscription);
      console.log('pay response.status: ', response.status);
      if (response.status === 200) {
        this.props.setSubscription(subscription);
        this.setState({ error: false });
      } else throw subscription;
    } catch (e) {
      console.error(e);
      this.setState({ error: true });
    }
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div style={this.props.style}>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div style={this.props.style}>
          <DropIn
            options={{
              authorization: this.state.clientToken,
              paymentOptionPriority: [
                'card',
                'paypal',
                'paypalCredit',
                'venmo',
                'applePay'
              ],
              paypal: {
                flow: 'vault'
              }
            }}
            onInstance={instance => (this.instance = instance)}
          />
          <button
            onClick={this.buy.bind(this)}
            className="submitbutton bigasssubmitbutton w-button"
            style={{ position: 'inherit', margin: 'auto' }}
          >
            Buy Now!
          </button>
          <div
            style={{ display: this.state.error ? 'table-cell' : 'none' }}
            className="error-message w-form-fail"
          >
            <div className="text-block-2">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      );
    }
  }
}