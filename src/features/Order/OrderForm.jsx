function OrderForm() {
  return (
    <form className="mx-10 px-8">
      <fieldset className="bg-stone-100 rounded-lg border drop-shadow-md grid grid-cols-2 gap-6 p-6 mb-4 ">
        <legend className="font-bold">Contact Information</legend>
        <div className="flex flex-col ">
          <label className="block font-semibold">First Name:</label>
          <input
            className="border rounded border-gray-500 px-2"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col">
          <label className="block font-semibold">Last Name:</label>
          <input
            className="border rounded border-gray-500 px-2"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className="flex flex-col">
          <label className="block font-semibold">Email Address</label>
          <input
            className="border rounded border-gray-500 px-2"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-col">
          <label className="block font-semibold">Phone Number</label>
          <input
            className="border rounded border-gray-500 px-2"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
      </fieldset>

      <fieldset className="bg-stone-100 rounded-lg border drop-shadow-md grid grid-cols-2 gap-6 p-6 mb-4 ">
        <legend className="font-bold">Delivery Details</legend>
        <div>
          <label className="block">Recipient's First Name</label>
          <input className="border rounded border-gray-500" type="text" />
        </div>
        <div>
          <label className="block">Recipient's Last Name</label>
          <input className="border rounded border-gray-500" type="text" />
        </div>
        <div>
          <label className="block">Street Address</label>
          <input className="border rounded border-gray-500" />
        </div>
        <div>
          <label className="block">City</label>
          <input className="border rounded border-gray-500" type="text" />
        </div>
        <div>
          <label className="block">State</label>
          <select className="border rounded border-gray-500 ">
            <option>California</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block">Postal/Zip Code</label>
          <input className="border rounded border-gray-500" type="number" />
        </div>
      </fieldset>
    </form>
  );
}

export default OrderForm;
