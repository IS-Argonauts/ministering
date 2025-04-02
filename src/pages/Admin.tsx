import { FiBookOpen } from "react-icons/fi";
import AdminTools from "../components/admin_site/AdminTools";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ViewServiceRequests");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      <AdminTools />
      <div style={{ marginTop: "2rem" }}>
        <a onClick={handleClick} style={{ cursor: "pointer", fontSize: "1.25rem", color: "#006184", textDecoration: "none" }}>
          <FiBookOpen style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
          View Service Requests
        </a>
      </div>
    </div>
  );
}
