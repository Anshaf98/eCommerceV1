import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="formDiv">
        <div className="formTop">
          <img
            src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="formTexts">
            <h2>Contact Us</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="formBottom">
          <div className="formBottomLeft">
            <div className="formBottomMaps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63139.76491228357!2d81.13362524133458!3d8.47648558969709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afba20df78f2777%3A0x778c916b3edda3e9!2sKinniya!5e0!3m2!1sen!2slk!4v1674986065076!5m2!1sen!2slk"
                width={600}
                height={450}
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maps"
              ></iframe>
            </div>
          </div>
          <div className="formBottomRight">
            <div className="formBottomTexts">
              <h2>Say Hello. Don't Be Shy!</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="formBottomForm">
              <form>
                <div className="formBottomGroups">
                  <input type="text" required placeholder="Your Name" />
                  <input type="text" required placeholder="Your Email" />
                </div>
                <div className="formBottomGroups">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="formBottomBtn">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
