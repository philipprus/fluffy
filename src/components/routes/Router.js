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
import AdminOrder from '../admin/AdminOrder';
import ReturnsPolicy from '../ReturnsPolicy';
import PrivacyPolicy from '../PrivacyPolicy';
import ScrollToTop from './ScrollToTop';
import GiftCardOrder from '../GiftCardOrder';
import HeaderAdmin from '../HeaderAdmin';
import Reviews from '../admin/review/Reviews';
import AdminApp from '../admin/AdminApp';
import Auth from '../Auth';
import GiftCards from '../admin/GiftCards';
import GiftCard from '../admin/GiftCard';
import PortfolioGallery from '../admin/Portfolio';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <HeaderAdmin />
        </Route>
        <Route path="/">
          <Header />
        </Route>
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
        <Route path="/admin/blog">
          <Auth></Auth>
        </Route>
        <Route path="/admin/review">
          <Auth>
            <Reviews />
          </Auth>
        </Route>
        <Route path="/admin/portfolio">
          <Auth>
            <PortfolioGallery />
          </Auth>
        </Route>
        <Route path="/admin/giftcard/:id" component={GiftCard}/>
        <Route path="/admin/giftcard">
          <Auth>
            <GiftCards />
          </Auth>
        </Route>
        <Route path="/admin/:id" component={AdminOrder} />
        <Route path="/admin">
          <Auth>
            <AdminApp />
          </Auth>
        </Route>
        <Route path="/" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
