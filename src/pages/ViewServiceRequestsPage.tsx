type ServiceRequest = {
    id: number;
    name: string;
    phone: string;
    date: string;
    coordinationRequired: boolean;
  };  

  const dummyRequests: ServiceRequest[] = [
    {
      id: 1,
      name: "Jane Doe",
      phone: "(555) 123-4567",
      date: "2025-04-02",
      coordinationRequired: true,
    },
    {
      id: 2,
      name: "John Smith",
      phone: "(555) 987-6543",
      date: "2025-04-05",
      coordinationRequired: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "(555) 000-1111",
      date: "2025-04-08",
      coordinationRequired: true,
    },
  ];  

export const ViewServiceRequestsPage = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Submitted Service Requests</h2>
      {dummyRequests.map((req, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginTop: "1rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p><strong>Name:</strong> {req.name}</p>
          <p><strong>Phone:</strong> {req.phone}</p>
          <p><strong>Date:</strong> {req.date}</p>
          <p>
            <strong>Coordination Required:</strong>{" "}
            {req.coordinationRequired ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ViewServiceRequestsPage;
