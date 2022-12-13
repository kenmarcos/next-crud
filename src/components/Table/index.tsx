import Client from "../../core/Client/client";
import { EditIcon, TrashIcon } from "../Icons";
import Modal from "../Modal";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button";
import ClientEditForm from "../Forms/ClientEditForm";

interface TableProps {
  clients: Client[];
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
            <td className="text-left p-4">{client.age}</td>
            <td className="flex justify-center p-4 gap-1">
              <Modal
                triggerButton={
                  <button className="text-green-700 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
                    <EditIcon />
                  </button>
                }
                modalTitle="Editar Cliente"
              >
                <ClientEditForm client={client} />
              </Modal>

              <Modal
                triggerButton={
                  <button className="text-red-500 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
                    <TrashIcon />
                  </button>
                }
                modalTitle="Excluir Cliente"
              >
                <div className="border border-purple-400 px-4 py-2 rounded-md">
                  <p>Código: {client.id}</p>
                  <p>Nome: {client.name}</p>
                  <p>
                    Idade: {client.age} ano{`${client.age > 1 ? "s" : ""}`}
                  </p>
                </div>

                <h2 className="text-center text-2xl my-4">
                  Tem certeza que deseja remover este cliente?
                </h2>

                <div className="flex gap-4 mt-8 justify-center">
                  <Dialog.Close asChild>
                    <Button className="bg-gradient-to-r from-gray-400 to-gray-700">
                      Cancelar
                    </Button>
                  </Dialog.Close>

                  <Button className="bg-gradient-to-r from-purple-500 to-purple-800">
                    Remover
                  </Button>
                </div>
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
