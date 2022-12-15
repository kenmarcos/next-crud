import React, { useState } from "react";

import ClientEditForm from "pages/components/Table/components/Forms/ClientEditForm";
import ClientRemoveAlert from "pages/components/Table/components/ClientRemoveAlert";
import { EditIcon, TrashIcon } from "components/Icons";
import Modal from "components/Modal";
import Client from "core/Client";

interface ClientCardProps {
  client: Client;
  idx: number;
  getClients: () => Promise<void>;
}

const ClientCard = (props: ClientCardProps) => {
  const [isClientEditModalOpen, setIsClientEditModalOpen] = useState(false);
  const [isClientRemoveModalOpen, setIsClientRemoveModalOpen] = useState(false);

  return (
    <tr
      key={props.client?.id}
      className={`${props.idx % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
    >
      <td className="text-left p-4 hidden sm:block break-all">
        {props.client?.id}
      </td>
      <td className="text-left p-4">{props.client?.name}</td>
      <td className="text-left p-4">{String(props.client?.age)}</td>
      <td className="flex flex-col lg:flex-row justify-center p-4 gap-1">
        <Modal
          open={isClientEditModalOpen}
          setOpen={setIsClientEditModalOpen}
          triggerButton={
            <button className="text-green-700 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
              <EditIcon />
            </button>
          }
          modalTitle="Editar Cliente"
        >
          <ClientEditForm
            client={props.client}
            getClients={props.getClients}
            setIsClientEditModalOpen={setIsClientEditModalOpen}
          />
        </Modal>

        <Modal
          open={isClientRemoveModalOpen}
          setOpen={setIsClientRemoveModalOpen}
          triggerButton={
            <button className="text-red-500 rounded-full hover:bg-gray-50 p-2 flex justify-center items-center focus:border-none">
              <TrashIcon />
            </button>
          }
          modalTitle="Excluir Cliente"
        >
          <ClientRemoveAlert
            client={props.client}
            getClients={props.getClients}
            setIsClientRemoveModalOpen={setIsClientRemoveModalOpen}
          />
        </Modal>
      </td>
    </tr>
  );
};

export default ClientCard;
