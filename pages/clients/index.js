import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "minh", name: "Minh" },
    { id: "vu", name: "Vu" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          {clients.map((client) => (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
