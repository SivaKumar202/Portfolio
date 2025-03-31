import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("Nt7JsiNpq-RjweGN2");

export const sendEmail = (formRef, setFormStatus) => {
  setFormStatus('sending');
  
  return emailjs.sendForm(
    'service_sivakumar', // Service ID from EmailJS
    'template_tundixb', // Template ID from EmailJS
    formRef.current,
    'Nt7JsiNpq-RjweGN2' // Public Key from EmailJS
  )
  .then((result) => {
    setFormStatus('success');
    formRef.current.reset();
    return result;
  })
  .catch((error) => {
    setFormStatus('error');
    console.error('Email error:', error);
    throw error;
  });
};