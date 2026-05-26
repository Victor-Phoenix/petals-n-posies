function WeddingsAndEvents() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Weddings & Events</h1>

      <p className="text-lg leading-relaxed mb-6">
        Your special moments deserve flowers that feel unforgettable. At Petals
        n’ Posies, we create custom floral designs for weddings, celebrations,
        and events throughout San Diego. Whether you’re planning an intimate
        ceremony or a large gathering, we work closely with you to bring your
        vision to life with handcrafted arrangements made with care.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Offer</h2>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>Bridal bouquets & bridesmaid florals</li>
        <li>Ceremony arrangements & floral arches</li>
        <li>Centerpieces & reception décor</li>
        <li>Boutonnieres & corsages</li>
        <li>Event installations & custom themes</li>
        <li>Corporate events & special celebrations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Approach</h2>
      <p className="text-lg leading-relaxed mb-6">
        Every event is unique, and we treat it that way. We focus on fresh,
        seasonal blooms and thoughtful design that reflects your style — whether
        it’s romantic, modern, bold, or garden‑inspired. We take the time to
        understand your colors, mood, and vision so your florals feel personal
        and meaningful.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How It Works</h2>
      <ol className="list-decimal ml-6 space-y-2 text-lg">
        <li>Fill out the inquiry form below with your event details.</li>
        <li>We’ll reach out within 24–48 hours to schedule a consultation.</li>
        <li>Together, we’ll discuss your vision, colors, and floral needs.</li>
        <li>You’ll receive a custom proposal tailored to your event.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Inquiry Form</h2>
      <p className="text-lg mb-4">
        Tell us a little about your event, and we’ll get back to you soon.
      </p>

      <form className="grid grid-cols-1 gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="eventDate"
          placeholder="Event Date"
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="venue"
          placeholder="Event Venue"
          className="border rounded px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Tell us about your vision..."
          className="border rounded px-3 py-2 h-28"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

export default WeddingsAndEvents;

// function WeddingsAndEvents() {
//   return (
//     <div>
//       <h1>Weddings Page</h1>

//       <form>
//         <input type="text" name="to" />
//         <input type="text" name="subject" />
//         <input type="text" name="body" />
//       </form>
//     </div>
//   );
// }
// export default WeddingsAndEvents;
