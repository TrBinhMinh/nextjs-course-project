import { useRouter } from "next/router";

function ClientProjectsPage() {
  const { query, push } = useRouter();

  const loadProjectHandler = function () {
    //load data...
    push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "minh", clientprojectid: "project1" },
    });
  };
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
