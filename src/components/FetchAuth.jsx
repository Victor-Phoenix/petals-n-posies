import { useNavigate } from "react-router";

 function  useFetchAuth({ url, options }) {
  const navigate = useNavigate();
  return async function fetchAuth
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  if (res === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }
  return res;
}
export default FetchAuth;
