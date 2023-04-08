import { useState } from 'react';
import '../style/EmailForm.css';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
function EmailForm() {
  // const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const schema = yup.object().shape({
    name: yup.string().required('Name field is required!'),
    email: yup.string().email().required('Please Enter You Email'),
    message: yup.string().required('Please Enter Message'),
  });

  // const sendEmail = (event) => {
  //   event.preventDefault();
  //   schema
  //     .validate(formData)
  //     .then(() => {
  //       emailjs
  //         .sendForm(
  //           'service_jeb2gfb',
  //           'template_j709x1c',
  //           event.target,
  //           '9swg5YG680pTAgq4X'
  //         )
  //         .then(
  //           (result) => {
  //             alert('Email sent successfully');
  //             setFormData({ name: '', email: '', message: '' });
  //           },
  //           (error) => {
  //             alert('Error' + error.message);
  //           }
  //         );
  //     })
  //     .catch((error) => {
  //       alert('Please fill all the requirement');
  //     });
  // };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    schema
      .validate(formData)
      .then(() => {
        emailjs
          .sendForm(
            'service_jeb2gfb',
            'template_j709x1c',
            e.target,
            '9swg5YG680pTAgq4X'
          )
          .then(
            (result) => {
              alert('Successfully sent!!');
              setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
              alert(error.message);
            }
          );
      })
      .catch((error) => {
        alert('Please fill all the fields');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form'>
      <form onSubmit={sendEmail}>
        <header className='email-me'>Reach Me Here!</header>
        <label className='label'>Your Name</label>
        <input
          type='text'
          name='name'
          placeholder='Please write your name'
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label className='label'>Your Email</label>
        <input
          type='email'
          name='email'
          placeholder='Please write your email'
          value={formData.email}
          onChange={handleChange}
        ></input>
        <label className='label'>Message</label>
        <textarea
          type='text'
          rows='6'
          placeholder='Please write your message'
          name='message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input type='submit' value='SEND!' className='btn'></input>
      </form>
    </div>
  );
}
export default EmailForm;

//service_ckd9c1z
