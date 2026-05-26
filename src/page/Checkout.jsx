  import { useState } from "react";

  function Checkout() {
    const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      email_address: "",
      phone: "",
      recipeint_name: "",
      street: "",
      postal_code: "",
      city: "",
      state: "California",
      country: "United States",
    });

    function handleFormChange(e) {
      e.preventDefault();
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    function submit() {
      console.log(form);
    }
    return (
      <form
        className="mx-10 px-8"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <fieldset className="bg-stone-100 rounded-lg border drop-shadow-md grid grid-cols-2 gap-6 p-6 mb-4 ">
          <legend className="font-bold">Contact Information</legend>
          <div className="flex flex-col ">
            <label className="block font-semibold">First Name:</label>
            <input
              className="border rounded border-gray-500 px-2"
              type="text"
              name="first_name"
              value={form.first_name}
              placeholder="Enter your first name"
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="block font-semibold">Last Name:</label>
            <input
              className="border rounded border-gray-500 px-2"
              type="text"
              placeholder="Enter your last name"
              name="last_name"
              value={form.last_name}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="block font-semibold">Email Address</label>
            <input
              className="border rounded border-gray-500 px-2"
              type="email"
              placeholder="Enter your email address"
              name="email_address"
              value={form.email_address}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label className="block font-semibold">Phone Number</label>
            <input
              className="border rounded border-gray-500 px-2"
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={form.phone}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
        </fieldset>

        <fieldset className="bg-stone-100 rounded-lg border drop-shadow-md grid grid-cols-2 gap-6 p-6 mb-4 ">
          <legend className="font-bold">Delivery Details</legend>
          <div>
            <label className="block">Recipient's First Name</label>
            <input
              className="border rounded border-gray-500"
              type="text"
              name="recipeint_name"
              value={form.recipeint_name}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>

          <div>
            <label className="block">Street Address</label>
            <input
              className="border rounded border-gray-500"
              type="text"
              name="street"
              value={form.street}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <div>
            <label className="block">City</label>
            <input
              className="border rounded border-gray-500"
              type="text"
              name="city"
              value={form.city}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <div>
            <label className="block">State</label>
            <select
              className="border rounded border-gray-500"
              name="state"
              value={form.state}
              onChange={(e) => {
                handleFormChange(e);
              }}
            >
              <option>California</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block">Postal/Zip Code</label>
            <input
              className="border rounded border-gray-500"
              type="number"
              name="postal_code"
              value={form.postal_code}
              required
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <div>
            <label className="block">Country</label>
            <select
              className="border rounded border-gray-500"
              name="country"
              value={form.country}
              onChange={(e) => {
                handleFormChange(e);
              }}
            >
              <option>United States</option>
              <option>Other</option>
            </select>
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
    );
  }

  export default Checkout;
