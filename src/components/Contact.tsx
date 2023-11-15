import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Toast from "./Toast";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_352udsc",
          "template_asehd65",
          form.current,
          "7yw2XxD9yj19atf0p"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });
            // Show success toast
            setShowSuccessToast(true);

            // Hide the toast after 3 seconds
            setTimeout(() => {
              setShowSuccessToast(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <>
      <div id="contact" className="menu min-h-screen min-w-full  ">
        <div className="menu-title  capitalize text-center mt-24">
          <span className="text-2xl md:text-3xl text-sky-600  ">Contact</span>
          <h3 className="text-xl md:text-4xl text-slate-800  mx-auto w-3/6">
            I want to hear from you
          </h3>
        </div>
        <div className="flex items-center flex-col md:flex-row  justify-center p-8 ">
          <div className="flex flex-col ">
            <div className="m-5 flex">
              <div className="mr-5">
                <FontAwesomeIcon
                  className="w-6 md:w-12  h-12"
                  icon={faLocationDot}
                />
              </div>
              <div>
                <div className="text-3xl font-bold ">Address</div>
                <div className="font-light">
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
            <div className="m-5 flex">
              <div className="mr-5">
                <FontAwesomeIcon
                  className="w-7 md:w-12 h-12"
                  icon={faEnvelope}
                />
              </div>
              <div>
                <div className="text-3xl font-bold ">Email</div>

                <div className="font-light">
                  <span>abdennasirt.ahmed@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="m-5 flex">
              <div className="mr-5">
                <FontAwesomeIcon className="w-6 md:w-12 h-12" icon={faPhone} />
              </div>
              <div>
                <div className="text-3xl font-bold ">Phone</div>

                <div className="font-light">
                  <span>+25109859484</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[550px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium"
                >
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="user_name"
                  id="name"
                  value={formData.user_name}
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium "
                >
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium "
                >
                  Subject
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium "
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button className="hover:shadow-form rounded-md btn-success py-3 px-8 text-base font-semibold  outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessToast && (
        <Toast message="Message sent successfully." type="success" />
      )}
    </>
  );
}

export default Contact;
