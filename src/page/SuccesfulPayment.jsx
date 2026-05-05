import { useSearchParams } from "react-router";

function SuccesfulPayment() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
}
export default SuccesfulPayment;
