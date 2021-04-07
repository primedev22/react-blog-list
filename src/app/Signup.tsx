import React, { useState } from "react";
import { useLocation } from "react-router";
import api from "./api";

const initialState = {
  Name: "",
  Username: "",
  Email: "",
  Phone: "",
  Website: "",
  Street: "",
  Suite: "",
  City: "",
  Zipcode: "",
  CompanyName: "",
  CatchPhrase: "",
  Bs: "",
};
export default function Signup() {
  const [fields, setFields] = useState(initialState);
  const handleChange = (e: any, id: string) => {
    const newFields = { ...fields };
    (newFields as any)[id] = e.target.value;
    setFields(newFields);
  };
  const location: any = useLocation();
  const onFormSubmit = async (e: any) => {
    let toSend: any = Object.keys(fields).map((each: string) => {
      let o: any = {};
      o[each.toLowerCase()] = (fields as any)[each];
      return o;
    });
    try {
      let dd = await api.post("/users", {
        data: toSend,
      });
      toSend["id"] = [dd.data.id];
      location.state.onSuccess(toSend);
      console.log(dd);
    } catch (e) {
      console.log(e);
    }
  };
  const {
    Name,
    Username,
    Email,
    Phone,
    Website,
    Street,
    Suite,
    City,
    Zipcode,
    CompanyName,
    CatchPhrase,
    Bs,
  } = fields;
  return (
    <div className="signup">
      <h1>Signup</h1>
      <p>I am not doing any form validation for now.</p>
      <form onSubmit={onFormSubmit}>
        <section>
          <h3>User Details</h3>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            id="Name"
            value={Name}
            onChange={(e) => handleChange(e, "Name")}
          />
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="Username"
            id="Username"
            value={Username}
            onChange={(e) => handleChange(e, "Username")}
          />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            id="Email"
            value={Email}
            onChange={(e) => handleChange(e, "Email")}
          />
          <label htmlFor="Phone">Phone</label>
          <input
            type="phone"
            placeholder="Phone"
            name="Phone"
            id="Phone"
            value={Phone}
            onChange={(e) => handleChange(e, "Phone")}
          />
          <label htmlFor="Website">Website</label>
          <input
            type="url"
            placeholder="Website"
            name="Website"
            id="Website"
            value={Website}
            onChange={(e) => handleChange(e, "Website")}
          />
        </section>
        <section>
          <h3>Address Details</h3>
          <label htmlFor="Street">Street</label>
          <input
            type="text"
            placeholder="Street"
            name="Street"
            id="Street"
            value={Street}
            onChange={(e) => handleChange(e, "Street")}
          />
          <label htmlFor="Suite">Suite</label>
          <input
            type="text"
            placeholder="Suite"
            name="Suite"
            id="Suite"
            value={Suite}
            onChange={(e) => handleChange(e, "Suite")}
          />
          <label htmlFor="City">City</label>
          <input
            type="text"
            placeholder="City"
            name="City"
            id="City"
            value={City}
            onChange={(e) => handleChange(e, "City")}
          />

          <label htmlFor="Zipcode">Zipcode</label>
          <input
            type="text"
            placeholder="Zipcode"
            name="Zipcode"
            id="Zipcode"
            value={Zipcode}
            onChange={(e) => handleChange(e, "Zipcode")}
          />
        </section>
        <section>
          <h3>Occupation</h3>
          <label htmlFor="CompanyName">Company Name</label>
          <input
            type="text"
            placeholder="Company Name"
            name="CompanyName"
            id="CompanyName"
            value={CompanyName}
            onChange={(e) => handleChange(e, "CompanyName")}
          />
          <label htmlFor="CatchPhrase">Catch Phrase</label>
          <input
            type="text"
            placeholder="Catch Phrase"
            name="CatchPhrase"
            id="CatchPhrase"
            value={CatchPhrase}
            onChange={(e) => handleChange(e, "CatchPhrase")}
          />
          <label htmlFor="Bs">Bs</label>
          <input
            type="text"
            placeholder="BS"
            name="Bs"
            id="Bs"
            value={Bs}
            onChange={(e) => handleChange(e, "Bs")}
          />
          <button type="button" onClick={onFormSubmit}>
            Sign up
          </button>
        </section>
      </form>
    </div>
  );
}
