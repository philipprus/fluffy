import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import StatusOrder from './StatusOrder';
import { NavLink } from 'react-router-dom';


export const useDataApi = (initialUrl, initialData) => {
      const [data, setData] = useState(initialData);
      const [url, setUrl] = useState(initialUrl);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      useEffect(() => {
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
          try {
            const result = await axios(url);
            setData(result.data);
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [url]);
      return [{ data, isLoading, isError }, setUrl];
    };
    

const AdminApp = (props) => {

      const [{ data, isLoading, isError }] = useDataApi(
        '/api/order',
        [],
      );
    
      return (
            <>
            {isError && <div>Something went wrong ...</div>}


            {isLoading ? (
                  <div>Loading ...</div>
            ) : (
                  <div className="table-responsive">
                  <table class="table table-hover">
                        <thead>
                        <tr  className="text-left">
                              <th scope="col">#</th>
                              <th scope="col">Created Date</th>
                              <th scope="col">Image</th>
                              <th scope="col">Dispatch date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Payments</th>
                              <th scope="col">Shipping</th>
                              <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                              {data.map( (item, index) => (
                              <tr className="text-left">
                                    <th scope="row">
                                          <NavLink to={`/admin/${item._id}`}>#{index+1} {item.billingAddress_firstName} {item.billingAddress_lastName} </NavLink>
                                     </th>
                                    <td>{moment(item.created).format('DD/MM/YYYY') }</td>
                                    <td  className="text-left">
                                          <a href={item.photo[0].secure_url} target="_blank" rel="noopener noreferrer">Open image</a>
                                          <br/>
                                          <small>
                                               Style: {item.style} <br/>
                                               Size: {item.canvasSize} <br/>
                                               Position: {item.canvasPosition} <br/>
                                               Pets: {item.extraPet}<br/> 
                                          </small>
                                    </td>
                                    <td>{moment(item.dispatch_date).format('DD/MM/YYYY')}</td>
                                    <td><StatusOrder id={item._id} status={item.status || "New"} /></td>
                                    <td >
                                          <small>
                                          {item.billingAddress_firstName} {item.billingAddress_lastName},<br/>
                                          {item.billingAddress_email} {item.billingAddress_phone}, <br/>
                                          {item.billingAddress_address} {item.billingAddress_address2}, {item.billingAddress_country} {item.billingAddress_zip} 
                                          <span class="description">({item.payment_type})</span>
                                          </small>
                                    </td>
                                    <td>
                                          <small>
                                          {item.isAnotherShippingAddress ? item.shippingAddress_firstName : item.billingAddress_firstName} {item.isAnotherShippingAddress ? item.shippingAddress_lastName : item.billingAddress_lastName}, <br/>
                                          {item.isAnotherShippingAddress ? item.shippingAddress_email : item.billingAddress_email} {item.isAnotherShippingAddress ? item.shippingAddress_phone : item.billingAddress_phone}, <br/>
                                          {item.isAnotherShippingAddress ? item.shippingAddress_address : item.billingAddress_address} 
                                          {item.isAnotherShippingAddress ? item.shippingAddress_address2 : item.billingAddress_address2 !== "" ? item.billingAddress_address2 : "" },
                                          {item.isAnotherShippingAddress ? item.shippingAddress_country : item.billingAddress_country},
                                          {item.isAnotherShippingAddress ? item.shippingAddress_zip : item.billingAddress_zip}
                                          <span class="description">({item.shipping_type || "Post"})</span>
                                          </small>
                                    </td>
                                    <td>{item.order_total}₪</td>
                              </tr>
                              ))}
                        </tbody>
                  </table>
                  </div>
            )}
            </>
      );
}



export default AdminApp;