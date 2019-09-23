import React from 'react';

class PaymentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false
    }
  }

  componentDidMount() {
    this.setState({ isEnabled: true });
    window.paypal.Buttons({
      env: 'sandbox', // Optional: specify 'sandbox' environment
      client: {
        sandbox:    'Aeb2DbKkpdAGZVwxaUl-xQZpZPRrhVJZNqt5GLPOKkbK9mM4HrWcntBSzHnSGAzlA1yur1dwYWC1WKDd',
        production: 'AaaC8Cxf5oVp9VsWbuk7LUbn4ko9goGfBA0I9h3CQx2p76nWpzjmx-XDbUFrswopS05r8KMhyQtbg-GX'
      },
      
      // Set up the transaction
      createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
              amount: {
                    currency: 'ILS',
                    value: '3.01',
                },
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    },
    enableStandardCardFields: true,
    style: {
      color: 'black',
      label: 'paypal'
    }
    }).render('#paypal-express-btn');
  }

  render() {
    return (
      <div>
        {this.state.isEnabled ? <div id="paypal-express-btn" /> : 'Loading...'}
      </div>
    )
  }
}

export default PaymentButton;