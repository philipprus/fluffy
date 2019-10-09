
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";
import About from "../About";
import Order from "../Order";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Email from "../Email";
import Footer from "../Footer";

export function Routes() {
    return (
        <BrowserRouter>
                  <Header/>
                <Switch>
                    <Route path="/order" component={Order} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/email" component={Email} />
                    <Route path="/" component={Portfolio} />

                </Switch>
                <Footer/>
        </BrowserRouter>
    )
}