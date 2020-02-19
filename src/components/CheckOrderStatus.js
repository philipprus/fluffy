import React from 'react';
import { withFormik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { testimonials } from '../utils/const';
import { useParams } from 'react-router-dom';

const CheckOrderStatus = props => {
  const {
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    status,
    setFieldValue,
    setStatus,
    setErrors,
  } = props;

  let { orderId } = useParams();

  React.useEffect(() => {
    if (orderId) {
      setFieldValue('id', orderId);
      setSubmitting(true);
      const success = data => {
        setStatus(data);
        setSubmitting(false);
      };
      getStatus(orderId, success, setErrors);
    }
  }, [orderId]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h4 className="mb-3">Check Status Order</h4>
        </div>
        <div className="col-12">
          {/* {status.result} */}
          <Form>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="input-group">
                  <Field
                    placeholder="Number order"
                    name="id"
                    type="text"
                    className={'form-control' + (errors.id && touched.id ? ' is-invalid' : '')}
                  />
                  <ErrorMessage name="id" component="div" className="invalid-feedback" />
                </div>
              </div>
              <div className="col-md-12 form-group">
                <button
                  type="submit"
                  className="btn btn-primary mr-2 text-center form-control"
                  disabled={isSubmitting}
                >
                  {'Send'}
                </button>
              </div>
            </div>
          </Form>
          {isSubmitting ? <div style={{margin: "0 auto", alignItems: 'center',
    justifyContent: 'center', display: 'flex'}}><ReactLoading type={'spin'} color={'#000000'} /></div> : ''}
          {status ? <h3 className="check-order-status text-center">{testimonials[status]}</h3> : ''}
        </div>
      </div>
    </div>
  );
};

const getStatus = async (orderId, success, error) => {
  await axios
    .get('/api/order/status/' + orderId)
    .then(res => {
      if (res.status === 200) {
        success(res.data);
      }
    })
    .catch(({ response }) => {
      const { errors } = response.data;
      error(errors);
    });
};
export default withFormik({
  mapPropsToValues: () => ({
    id: '',
  }),
  validate: values => {
    let errors = {};
    if (!values.id) {
      errors.id = 'Required';
    }
    return errors;
  },
  handleSubmit: async (values, { props, setSubmitting, setErrors, setStatus, resetForm }) => {
    const success = data => {
      setSubmitting(false);
      setStatus(data);
    };
    await getStatus(values.id, success, setErrors);
  },

  displayName: 'CheckOrderStatus',
})(CheckOrderStatus);
