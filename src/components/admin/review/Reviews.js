import React from 'react';
import { useDataApi } from '../../../utils/utils';
import CreateReview from './CreateReview';
import moment from 'moment';

const Reviews = (props) => {
      const [{ data, isLoading, isError }] = useDataApi(
            '/api/review',
            [],
          );

        
          return (
                <>
                {isError && <div>Something went wrong ...</div>}
    
    
                {isLoading ? (
                      <div>Loading ...</div>
                ) : (
<>
                            <CreateReview/>
                      <div className="table-responsive">
                      <table className="table table-hover">
                            <thead>
                            <tr  className="text-left">
                                  <th scope="col">#</th>
                                  <th scope="col">Thumbmail</th>
                                  <th scope="col">Created Date</th>
                                  <th scope="col">Full name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Content</th>
                            </tr>
                            </thead>
                            <tbody>
                                  {data && data.map( (item, index) => (
                                  <tr className="text-left" key={`item-${index}`}>
                                        <th scope="row">
                                    {index+1}
                                         </th>
                                        <td  className="text-left">
                                        {moment(item.created).format('DD/MM/YYYY') }
                                         </td>
                                        <td>
                                      {!item.thumbnails.length  ? "none" :  <img
                            src={item.thumbnails && item.thumbnails[0].secure_url}
                            className="d-block ui-w-40 ui-bordered m-auto mr-4"
                            alt=""
                          /> }      </td>
                                        <td  className="text-left">
                                          {item.fullName}
                                        </td>
                                        <td  className="text-left">
                                          {item.email}
                                        </td>
                                        <td  className="text-left">
                                          {item.content}
                                        </td>
                                  </tr>
                                  ))}
                            </tbody>
                      </table>
                      </div>
                      </>
                )}
                </>
          );
}

export default Reviews;