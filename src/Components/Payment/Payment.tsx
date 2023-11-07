// import React from "react";
// import "./Payment.css";
// const Payment = () => {
//   return (
//     <div className="payment-container mt-3">
//       <form>
//         <div class="row mb-3">
//           <div class="col-5">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Adın, Soyadın"
//             />
//           </div>
//           <div class="col-6">
//             <input
//               type="text"
//               class="form-control"
//               placeholder="Kredi kartı numaran"
//             />
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col-5">
//             <input type="email" class="form-control" placeholder="E-mail" />
//           </div>
//           <div className="col-6">
//             <div className="row">
//               <div className="col-5">
//                 <input type="text" class="form-control" placeholder="MM/YY" />
//               </div>
//               <div className="col-5">
//                 <input
//                   type="password"
//                   class="form-control"
//                   placeholder="Güvenlik numarası"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="row mb-3">
//           <div className="col-5">
//             <input type="tel" class="form-control" placeholder="Cep telefonu" />
//           </div>
//         </div>
//         <div class="mb-3 form-check">
//           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//           <label class="form-check-label" for="exampleCheck1">
//             Şartları kabul ediyorum <br></br>
//           </label>
//         </div>
//         <button type="submit" class="btn btn-dark">
//           Ödeme
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";

const Payment = (props) => {
  const { filmId, userId, seat, price, showtime } = props; // Pass these props from the parent component

  const filmIdint = parseInt(filmId);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    email: "",
    expirationDate: "",
    securityCode: "",
    phone: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user has accepted the terms
    if (!formData.acceptTerms) {
      alert("Please accept the terms before making the payment.");
      return;
    }

    try {
      const paymentData = {
        filmId: filmIdint,
        userId,
        seat,
        price,
        paymentId: generatePaymentId(), // You can implement this function
        showtime,
      };

      // Make a POST request to the API with payment data
      const response = await axios.post(
        "http://localhost:8000/api/tickets",
        paymentData
      );

      // Handle the response as needed
      console.log("Payment successful", response.data);
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  // Generate a random paymentId (you can implement this)
  const generatePaymentId = () => {
    // Implement your logic to generate a unique paymentId here
    return Math.random().toString(36).substring(7);
  };

  return (
    <div className="payment-container mt-3">
      <form onSubmit={handleSubmit}>
        {/* ... Your form inputs here ... */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            Şartları kabul ediyorum <br />
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          Ödeme
        </button>
      </form>
    </div>
  );
};

export default Payment;
