import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ImageView = () => {
  const location = useLocation();
  const image = location.state?.image; // Extract image from state

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_email: "malarie1012@gmail.com",
      from_email: userEmail,
      from_name: userName,
      message: message,
      image_link: image,
    };

    emailjs
      .send(
        "service_n8mpm58",
        "template_kyylwzn",
        templateParams,
        "LSip4CT8gO_DT0pGY"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send email.");
        console.error(error);
      });
  };

  return (
    <div className="flex min-h-screen bg-soft-cream">
      {/* Image Section */}
      <div className="w-1/2 p-4 flex justify-center items-center">
        <img
          src={image}
          alt="Image"
          className="max-w-full max-h-screen rounded-lg shadow-lg"
        />
      </div>

      {/* Email Section */}
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-dark-coffee">
          Interested in this image?
        </h2>
        <form onSubmit={sendEmail} className="mt-4">
          <label className="block text-dark-coffee mb-2">Your Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label className="block text-dark-coffee mb-2">Your Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />

          <label className="block text-dark-coffee mb-2">Message</label>
          <textarea
            className="w-full p-2 border rounded-lg mb-4"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 bg-dark-coffee text-white rounded-lg hover:opacity-80"
          >
            Send Email
          </button>
        </form>

        {/* Back to Gallery Button */}
        <Link
          to="/gallery"
          className="mt-4 inline-block text-dark-coffee hover:underline"
        >
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default ImageView;
