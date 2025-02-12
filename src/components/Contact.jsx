import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer,toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [contact, setcontact] = useState({ from_email: "", from_name: "", message: "" })
  const handlechange =(e) => { 
    setcontact({...contact,[e.target.name]:e.target.value})
   }
   const sendEmail = (e) => {
    e.preventDefault();

  // Check if all fields are filled correctly
  const isValid =
    contact.from_email.length > 0 &&
    contact.from_name.length > 0 &&
    contact.message.length > 0;

    if (isValid) {
      emailjs.sendForm('service_9lw5t6q', 'template_kstozcd', form.current, { publicKey: 'vYhO1yqWGWst7K7yg', }).then(
          () => {
            console.log('Success!');
            toast('Message mailed successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

          }, (error) => {
            console.log('FAILED...', error.text);
          },
        );
        setcontact({ from_email: "", from_name: "", message: "" })
    } else {
      toast('Fill the details properly', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <div>
        
    {/* <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition="Bounce"
/>
<ToastContainer /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />


      <section class="body-font relative bg-slate-950 text-gray-400">

      <div class="container mx-auto px-5 py-24">

        <div class="mb-12 flex w-full flex-col text-center">
          <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
            feedback, or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>
 <form ref={form} onSubmit={sendEmail}>      
        <div class="mx-auto md:w-2/3 lg:w-1/2">
          <div class="-m-2 flex flex-wrap">

             
            <div class="w-1/2 p-2">
              <div class="relative">
                <input onChange={handlechange} value={contact.from_name} type="text"  name="from_name" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
                <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class="relative">
                <input onChange={handlechange} value={contact.from_email} type="email"  name="from_email" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
                <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
              </div>
            </div>
            <div class="mt-4 w-full p-2">
              <div class="relative">
                <textarea onChange={handlechange} value={contact.message}  name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
                <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
              </div>
            </div>
            <div class="w-full p-2 flex flex-col text-center ">
              <button type='Submit' value="Send" className=" rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Send Message
              </button>
            </div>
           


            <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a class="text-indigo-400">support@techstudios.co.in</a>
              <p class="my-5 leading-normal">Imperial Heights<br />Mira road , 401107</p>

            </div>

          </div>
        </div>
 </form>
      </div>

    </section></div>
  )
}

export default Contact