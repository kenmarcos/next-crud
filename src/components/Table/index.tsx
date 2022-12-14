import Client from "../../core/Client";
import { EditIcon, TrashIcon } from "../Icons";
import Modal from "../Modal";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import ClientEditForm from "../Forms/ClientEditForm";
import ClientRemoveAlert from "./components/ClientRemoveAlert";

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
          <tr
            key={client.id}
            className={`${idx % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{String(client.age)}</td>
            <td className="flex justify-center p-4 gap-1">
              <Modal
                triggerButton={
                  <button className="text-green-700 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
                    <EditIcon />
                  </button>
                }
                modalTitle="Editar Cliente"
              >
                <ClientEditForm client={client} getClients={props.getClients} />
              </Modal>

              <Modal
                triggerButton={
                  <button className="text-red-500 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
                    <TrashIcon />
                  </button>
                }
                modalTitle="Excluir Cliente"
              >
                <ClientRemoveAlert
                  client={client}
                  getClients={props.getClients}
                />
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
