import { useEffect } from "react";
import { useSearchParams } from "react-router";

function SuccesfulPayment() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  useEffect(
    function () {
      async function fetchOrder() {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/orders/${sessionId}`,
          );
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchOrder();
    },
    [sessionId],
  );

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
}
export default SuccesfulPayment;
