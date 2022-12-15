import Client from "../../core/Client";
import { EditIcon, TrashIcon } from "../Icons";
import Modal from "../Modal";
import Button from "../Button";
import ClientEditForm from "../Forms/ClientEditForm";
import ClientRemoveAlert from "./components/ClientRemoveAlert";
import ClientCard from "../ClientCard";

interface TableProps {
  clients: Client[];
  getClients: () => Promise<void>;
}

const Table = (props: TableProps) => {
  return (
    <table className="w-full rounded-md overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-200">
        <tr>
          <th className="text-left p-4">Código</th>
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
