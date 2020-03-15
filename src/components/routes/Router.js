import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import About from '../About';
import Order from '../Order';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import FAQ from '../FAQ';
import CheckOrderStatus from '../CheckOrderStatus';
import TermsOfService from '../TermsOfService';
import ReturnsPolicy from '../ReturnsPolicy';
import PrivacyPolicy from '../PrivacyPolicy';
import ScrollToTop from './ScrollToTop'; 
import GiftCardOrder from '../GiftCardOrder';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Header />
      </Switch>
      <ScrollToTop />
      <Switch>
        <Route path="/order" component={Order} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/gift-card-order" component={GiftCardOrder} />
        <Route path="/check-order-status/:orderId" component={CheckOrderStatus} />
        <Route path="/check-order-status/" component={CheckOrderStatus} />
        <Route path="/check-gift-card/:id" component={CheckOrderStatus} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/returns-policy" component={ReturnsPolicy} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
