import { Link } from "react-router";

function Footer() {
  return (
    <div className="grid grid-cols-3 gap-2 bg-amber-400 p-4 w-full ">
      <div>
        <h2 className="text-2xl font-semibold mt-4">Pages</h2>
        <Link to="/" className="block w-fit hover:underline">
          Home
        </Link>
        <Link to="wedding-events" className="block w-fit  hover:underline">
          Weddings & Events
        </Link>
        <Link to="about" className="block w-fit  hover:underline">
          About Us
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-4">Contact</h2>

        <p>petalsnposiesshop@gmail.com</p>
        <p>(619) 555-5555</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-4">Store Info</h2>

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
  );
}

export default Footer;
