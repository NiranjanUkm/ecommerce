import { Container } from "react-bootstrap"
import './Contact.css'
import { useState } from "react"
const Contact = () => {

  const [contactFormData, setContactFormData] = useState({
    fullname:'',
    email: '',
    number:'',
    message: ''
  });

    const [errors, setErrors] = useState({
      fullname: '',
      email: '',
      number: '',
      message: ''
    });
  const validateForm=()=>{

    let valid=true;
    
    const newErrors = {
      fullname:'',
      email: '',
      number: '',
      message: ''

    }
    if(!contactFormData.fullname.trim()){
      newErrors.fullname = 'Fullname is required!';   
      valid=false;
    }
    else if(contactFormData.fullname.length < 3){
      newErrors.fullname = 'Fullname should include atleast 3 characters';
      valid=false;
    }

    if(!contactFormData.email.trim()){
      newErrors.email = 'Email is required!';   
      valid=false;
    }
    else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
      newErrors.email = 'Email is invalid!';
      valid=false;
    }

    if(!contactFormData.number.trim()){
      newErrors.number = 'Phone Number is required!';   
      valid=false;
    }
    else if(!/^\d{10}/.test(contactFormData.number)){
      newErrors.number = 'Phone Number is invalid!';
      valid=false;
    }


    setErrors(newErrors);
    return valid;
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // alert('Name :'+contactFormData.fullname)
    // alert('Email :'+contactFormData.email)
    // alert('Phone Number :'+contactFormData.number)
if(validateForm()){
  alert('Thank You,'+contactFormData.fullname+'.Your concerns have reached to us.')
  console.log('Submitted Data ---->',contactFormData ); 
}
else{
  alert('Ooops..! Think there was some issues, try submit the form again.')
}
    
  }
  const handleOnChange=(e)=>{
    const {name, value} = e.target; //DeStructuring..
    setContactFormData({...contactFormData, [name]:value});
    console.log(contactFormData);
    
  }
  
  return (
    <Container>
      <h2>Contact Form</h2>
      <form className="contactForm my-4" onSubmit={handleSubmit} noValidate="novalidate">

        <input type="text" name="fullname" onChange={handleOnChange} placeholder="Please enter fullname"/>
        <span className="errors">{errors?.fullname}</span>
        <input type="email" name="email" onChange={handleOnChange} placeholder="Please enter email"/>
        <span className="errors">{errors?.email}</span>
        <input type="number" name="number" onChange={handleOnChange} placeholder="Please enter phone number"/>
        <span className="errors">{errors?.number}</span>
        <textarea type="message" cols="30" onChange={handleOnChange} rows="5" name="message" placeholder="Type any message."></textarea>
        <span className="errors">{errors?.message}</span>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Container>
  )
}

export default Contact