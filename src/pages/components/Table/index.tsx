import ClientCard from "pages/components/Table/components/ClientCard";
import Client from "core/Client";

interface TableProps {
  clients: Client[];
  getClients: () => Promise<void>;
}

const Table = (props: TableProps) => {
  return (
    <table className="w-full rounded-md overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-200">
        <tr>
          <th className="text-left p-4 hidden sm:block">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          <th className="p-4">Ações</th>
        </tr>
      </thead>

      <tbody>
        {props.clients.map((client, idx) => (
          <ClientCard
            key={client.id}
            client={client}
            idx={idx}
            getClients={props.getClients}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
