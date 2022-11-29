import { useRouter } from "next/router";

function ClientProjectsPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}

export default ClientProjectsPage;
