import * as yup from 'yup';
import "yup-phone";

let schema = yup.object().shape({
  fname:yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Please Enter Your Name'),
    lname:yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Please Enter Your Name'),
    email:yup.string().email('Invalid email').required('Please Enter Your Email'),
    phone:yup.string().phone('IN', true, 'Phone is invalid').required("Please Enter Your Phone number"),
    message:yup.string().min(20,'Too Short!').required("Enter Your Message")
  });
  export default schema
