import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function AdminOrder() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(function () {
    async function getOrders() {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders/getAll`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("RESPONSE");
      console.log(res);

      const data = await res.json();
      console.log(data);
      setOrders([...data]);
    }
    getOrders();

    console.log("ORDERSS");

    console.log(orders);
  }, []);

  async function handleChange(orderId, newStatus) {
    console.log("ID " + orderId);

    console.log("VALUE " + newStatus);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders/setOrderStatus-${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer: ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (!res.ok) {
        console.error("Failed to update status");
        return;
      }
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, orderStatus: newStatus } : order,
        ),
      );
    } catch (err) {
      console.log(err);
      setStatus(err);
    } finally {
      setStatus("");
    }
  }
  return (
    <div className=" mt-4 flex justify-center align-middle">
      <table className="border-spacing-2 border-spacing-y-5">
        <tr>
          <th className="px-4">Name</th>
          <th className="px-4">Delivery Date</th>
          <th className="px-4">id</th>
          <th className="px-4">ShippingCity</th>
          <th className="px-4">ShippingLine</th>
          <th className="px-4">ShippingPostal</th>
          <th className="px-4">ShippingState</th>
          <th className="px-4">Total</th>
          <th className="px-4">OrderedItems</th>
          <th className="px-4">Status</th>
        </tr>
        <hr></hr>
        {orders.map((element) => {
          return (
            <tr className="py-8 border-b border-gray-700">
              <td className="px-4">{element.customerName}</td>
              <td className="px-4">
                {new Date(element.deliveryDate).toDateString()}
              </td>
              <td className="px-4">{element.id}</td>

              <td className="px-4">{element.shippingCity}</td>
              <td className="px-4">{element.shippingLine}</td>
              <td className="px-4">{element.shippingPostalCode}</td>
              <td className="px-4">{element.shippingState}</td>
              <td className="px-4">{element.totalPrice}</td>
              <td>
                {element.orderItems.map((el) => {
                  return (
                    <div>
                      <span>
                        {el.flowerName} x{el.quantity} ({el.variantType}){" "}
                      </span>
                      <span></span>
                    </div>
                  );
                })}
              </td>
              <td className="px-4">
                <select
                  value={element.OrderStatus}
                  // handleChange(element.id, e.target.value)
                  onChange={(e) => handleChange(element.id, e.target.value)}
                >
                  <option>PENDING</option>
                  <option>OUT_FOR_DELIVERY</option>
                  <option>DELIVERED</option>
                </select>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default AdminOrder;
