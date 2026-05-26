import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-3xl  justify-center mx-auto mt-4">
      <div>
        <h2 className="text-2xl font-semibold ">About Us</h2>
        <p className="text-lg leading-relaxed">
          Petals n’ Posies is a small, family‑run flower shop based in San
          Diego, California. What began as a simple hobby—creating arrangements
          for friends and family—has grown into a local business built on care,
          creativity, and community.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Every arrangement we make is handcrafted with attention to detail and
          a genuine love for floristry. We focus on freshness, thoughtful
          design, and personal service. As a mom‑and‑pop shop, we take pride in
          bringing beautiful flowers directly to our neighbors throughout the
          San Diego area.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Whether you’re celebrating, comforting, or surprising someone special,
          we’re here to help you send something meaningful.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mt-4">Store Info</h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p>petalsnposiesshop@gmail.com</p>
          <p>(619) 555-5555</p>
        </div>
        <div>
          <ul>
            <li>Monday 9AM - 6:30PM</li>
            <li>Tuesday 9AM - 6:30PM</li>
            <li>Wednesday 9AM - 6:30PM</li>
            <li>Thursday 9AM - 6:30PM</li>
            <li>Friday 9AM - 6:30PM</li>
            <li>Saturday 9AM - 6:30PM</li>
            <li>Sunday CLOSED</li>
          </ul>
        </div>
      </div>
      <h4>Frequently Asked Questions - FAQs</h4>
      <div>
        <span>Do you offer same day delivery?</span>
        {/* Try to get Carot to transform to -90 degrees when opened */}
        <span className="">▶</span>
      </div>
    </div>
  );
}
export default About;
