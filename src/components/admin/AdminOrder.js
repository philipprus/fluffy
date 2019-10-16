import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useDataApi } from './AdminApp';
import StatusOrder from './StatusOrder';
import {testimonials} from "../../utils/const";

const AdminOrder = (props) => {
      const orderId = props.match.params.id;
      const [{ data, isLoading, isError }] = useDataApi(
            `/api/order/${orderId}`,
            [],
          );
        
          return (
                <>
                {isError && <div>Something went wrong ...</div>}
    
    
                {isLoading ? (
                      <div>Loading ...</div>
                ) : (
                      <div className="table-responsive">
                            <NavLink to="/admin">Back to orders</NavLink>
                            <div class="container-fluid flex-grow-1 container-p-y">

<h4 class="font-weight-bold py-3 mb-4">
  Order <span class="text-muted">#3455632</span>
</h4>

<div class="card">
  <div class="card-body">
    <strong class="mr-2">Status:</strong>
    <span class="text-big"><span class="badge badge-success p-2 pl-3 pr-3 ">{testimonials[data.status || "New"]}</span></span>
    <span class="text-muted small ml-1">{moment(data.created_date).format('DD/MM/YYYY')}</span>
    <span class="float-right">
      <strong class="mr-2">Dispacth Date</strong>
      {moment(data.dispatch_date).format('DD/MM/YYYY, h:mm:ss a')}
    </span>
  </div>
  <hr class="m-0" />
  <div class="card-body">
    <h6 class="small font-weight-semibold">
      Item
    </h6>

    <div class="table-responsive">
      <table class="table table-bordered m-0 text-center" >
        <tbody>

          <tr>
            <td class="p-4">
                  <a href={data.photo && data.photo[0].secure_url} target="_blank"> 
                        <img src={data.photo && data.photo[0].secure_url} class="d-block ui-w-40 ui-bordered m-auto mr-4" alt="" />
                 </a>
            </td>
            </tr>
            <tr>
                  <td>
                <div class="media-body">
                    <span class="text-muted">Style: </span> {data.style} &nbsp;
                    <span class="text-muted">Position: </span> {testimonials[data.canvasPosition]} &nbsp;
                    <span class="text-muted">Size: </span> {data.canvasSize} &nbsp;
                    <span class="text-muted">Extra: </span> {data.extraPet} &nbsp;
                    <span class="text-muted">Comments: </span> {data.comments} &nbsp;
                </div>
            </td>
          </tr>

         

        </tbody>
      </table>
    </div>
  </div>
  <hr class="m-0" />

  <div class="card-body pb-1">
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="text-muted small">Date</div>
        {moment(data.created).format('DD/MM/YYYY, h:mm:ss a')}
      </div>
      <div class="col-md-4 mb-3">
        <div class="text-muted small">Dispacth Date</div>
        {moment(data.dispatch_date).format('DD/MM/YYYY, h:mm:ss a')}
      </div>
      <div class="col-md-4 mb-3">
        <div class="text-muted small">Amount</div>
        {data.order_total} ils
      </div>
    </div>
  </div>
  <hr class="m-0" />

  <div class="card-body">
    <h6 class="small font-weight-semibold">
      Billing Info
    </h6>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Name</div>
        {data.billingAddress_firstName} {data.billingAddress_lastName}
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Phone</div>
        {data.billingAddress_phone}
      </div>
      <div class="col-md-6 mb-3">
        <div class="text-muted small">Email</div>
        <a href={`mailto:${data.billingAddress_email}`}>{data.billingAddress_email}</a>
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Country</div>
        {data.billingAddress_country}
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">ZIP Code</div>
        {data.billingAddress_zip}
      </div>
      <div class="col-6  mb-3">
        <div class="text-muted small">Address</div>
        {data.billingAddress_address} {data.billingAddress_address2}, {data.billingAddress_country} {data.billingAddress_zip} 
      </div>
      <div class="col-3  mb-3">
        <div class="text-muted small">Payment Type</div>
        {testimonials[data.payment_type]}
      </div>
      <div class="col-3  mb-3">
        <div class="text-muted small">Payment Number</div>
        {data.payment_number}
      </div>
    </div>
  </div>
  <hr class="m-0" />

  <div class="card-body">
    <h6 class="small font-weight-semibold">
      Shipping Info
    </h6>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Name</div>
        {data.isAnotherShippingAddress ? data.shippingAddress_firstName : data.billingAddress_firstName} {data.isAnotherShippingAddress ? data.shippingAddress_lastName : data.billingAddress_lastName}
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Phone</div>
        {data.isAnotherShippingAddress ? data.shippingAddress_phone : data.billingAddress_phone}
      </div>
      <div class="col-md-6 mb-3">
        <div class="text-muted small">Email</div>
        {data.isAnotherShippingAddress ? data.shippingAddress_email : data.billingAddress_email} 
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">Country</div>
        {data.isAnotherShippingAddress ? data.shippingAddress_country : data.billingAddress_country}
      </div>
      <div class="col-md-3 mb-3">
        <div class="text-muted small">ZIP Code</div>
        {data.isAnotherShippingAddress ? data.shippingAddress_zip : data.billingAddress_zip}
      </div>
      <div class="col-6">
        <div class="text-muted small">Address</div>
            {data.isAnotherShippingAddress ? data.shippingAddress_address : data.billingAddress_address} 
            {data.isAnotherShippingAddress ? data.shippingAddress_address2 : data.billingAddress_address2 !== "" ? data.billingAddress_address2 : "" },
            {data.isAnotherShippingAddress ? data.shippingAddress_country : data.billingAddress_country},
            {data.isAnotherShippingAddress ? data.shippingAddress_zip : data.billingAddress_zip}
      </div>
      <div class="col-3  mb-3">
        <div class="text-muted small">Shipping Type</div>
        {testimonials[data.payment_type]}
      </div>
      <div class="col-3  mb-3">
        <div class="text-muted small">Shipping Total</div>
        {data.payment_number}
      </div>
    </div>
  </div>
 

</div>

</div>
                      </div>
                )}
                </>
          );
}


export default AdminOrder;