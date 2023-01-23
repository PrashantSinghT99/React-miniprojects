import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  //   console.log(
  //     formData.firstName,
  //     formData.lastName,
  //     formData.email,
  //     formData.comments,
  //     formData.isFriendly,
  //     formData.employment,
  //     formData.favColor
  //   );

  function handlechange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function onSubmitForm(event) {
    event.preventDefault();

    console.log(formData);
  }
  return (
    <div className="form">
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="enter firstname"
          type="text"
          name="firstName"
          onChange={handlechange}
          value={formData.firstName}
        />

        <br />
        <input
          placeholder="enter lastname"
          type="text"
          name="lastName"
          onChange={handlechange}
          value={formData.lastName}
        />
        <br />

        <input
          placeholder="enter email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handlechange}
        />
        <br />
        <textarea
          placeholder="enter ur comments"
          name="comments"
          value={formData.comments}
          onChange={handlechange}
        />
        <br />

        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handlechange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are u friendly?</label>
        <br />

        <legend>Current employment status</legend>
        <input
          name="employment"
          type="radio"
          id="unemployed"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handlechange}
        />

        <label htmlFor="unemployed">unemployed</label>
        <br />

        <input
          type="radio"
          name="employment"
          id="parttime"
          value="parttime"
          checked={formData.employment === "parttime"}
          onChange={handlechange}
        />

        <label htmlFor="parttime">parttime</label>
        <br />

        <input
          name="employment"
          type="radio"
          id="fulltime"
          value="fulltime"
          checked={formData.employment === "fulltime"}
          onChange={handlechange}
        />
        <label htmlFor="fulltime">fulltime</label>
        <br />

        <select
          name="favColor"
          id="favColor"
          onChange={handlechange}
          value={formData.favColor}
        >
          <option value="">---CHOOSE---</option>
          <option value="RED">RED</option>
          <option value="BLUE">BLUE</option>
          <option value="GREEN">GREEN</option>
        </select>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
