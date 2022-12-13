import Client from "../../core/Client/client";
import { EditIcon, TrashIcon } from "../Icons";

interface TableProps {
  clients: Client[];
}

const Table = (props: TableProps) => {
  const openEditClientModal = (client: Client) => {
    console.log(client.name);
  };

  const openRemoveClientModal = (client: Client) => {
    console.log(client.name);
  };

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
          <tr
            key={client.id}
            className={`${idx % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>
            <td className="flex justify-center p-4 gap-1">
              <button
                onClick={() => openEditClientModal(client)}
                className="text-green-700 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center"
              >
                <EditIcon />
              </button>

              <button
                onClick={() => openRemoveClientModal(client)}
                className="text-red-500 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center"
              >
                <TrashIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
