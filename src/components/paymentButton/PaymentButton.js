import React from 'react';
import ReactDOM from 'react-dom';

let PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });


class PaymentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false
    }
  }

  componentDidMount() {
    this.setState({ isEnabled: true });
  }

  client = {
        sandbox:    'Aeb2DbKkpdAGZVwxaUl-xQZpZPRrhVJZNqt5GLPOKkbK9mM4HrWcntBSzHnSGAzlA1yur1dwYWC1WKDd',
        production: 'AaaC8Cxf5oVp9VsWbuk7LUbn4ko9goGfBA0I9h3CQx2p76nWpzjmx-XDbUFrswopS05r8KMhyQtbg-GX'
      }

  createOrder(data, actions) {
    return actions.order.create({
        purchase_units: [{
            amount: {
              currency_code:  process.env.NODE_ENV !== 'production' ? "USD" : "ILS" ,
              value: this.props.total,
            }
        }]
    });
}
onApprove(data, actions) {
    return actions.order.capture().then(function(details) {
        console.log(details);
        this.props.onSubmit();
    });
}

  render() {
    return (
      <div>
        {/* {this.state.isEnabled ? <div id="paypal-express-btn" /> : 'Loading...'} */}
        <PayPalButton
                    env={ process.env.NODE_ENV !== 'production' ? 'sandbox' : 'production'}
                    client={this.client}
                    locale={'en_US'}
                    style={{color: 'black',layout: 'horizontal', 
                    fundingicons: 'false',}}
                        createOrder={ (data, actions) => this.createOrder(data, actions) }
                        onApprove={ (data, actions) => this.onApprove(data, actions) }
                    />
      </div>
    )
  }
}

export default PaymentButton;