import React from 'react';
import Img from '../media/signup.png';
import '../CSS/contact.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormValues, ValidationSchema } from '../Context/FormValidation';

const Contact = () => {
  return (
    <div className='container-fluid contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 img-col col-xl-6 col-md-6'>
            <img src={Img} alt='' className='card-img'/>
          </div>
          <div className='col-lg-6 form-col col-xl-5 col-md-8 col-12 border shadow rounded p-5'>
            <h1 className='fw-bold'>Contact Us</h1><br/>
            <Formik
            initialValues={FormValues}
            validationSchema={ValidationSchema}
            cibst 
            >
              <Form>
                <label className='my-2'>
                  Your Name : <ErrorMessage component='small' name='name' className='text-danger' />
                </label><br/>
                <Field name='name' type='text' className='form-control' /><br/>
                <label className='my-2'>
                  Your Email : <ErrorMessage component='small' name='email' className='text-danger' />
                </label><br/>
                <Field name='email' type='email' className='form-control' /><br/>
                <label className='my-2'>
                  Topic : <ErrorMessage component='small' name='topic' className='text-danger' />
                </label><br/>
                <Field name='topic' type='text' className='form-control' /><br/>
                <label className='my-2'>
                  Your Name : <ErrorMessage component='small' name='message' className='text-danger' />
                </label><br/>
                <Field name='message' row={7} as='textarea' type='text' className='form-control' /><br/>
                <button className='btn btn-light submit'>Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact