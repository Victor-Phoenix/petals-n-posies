import { useEffect, useState } from "react";

function AdminOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(function () {
    async function getOrders() {
      const res = await fetch(`http://localhost:8080/api/orders/getAll`);
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default AdminOrder;
