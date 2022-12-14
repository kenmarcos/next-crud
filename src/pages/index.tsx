import Button from "../components/Button";
import { PlusIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Modal from "../components/Modal";
import ClientRegisterForm from "../components/Forms/ClientRegisterForm";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../backend/db/ClientCollection";
import { useEffect, useState } from "react";

// const clients = [
//   new Client("Marcos", "1990-12-13T02:00:00.000Z", "m1"),
//   new Client("Natália", "1995-10-25T02:00:00.000Z", "n2"),
//   new Client("Paula", "2011-08-19T02:00:00.000Z", "p1"),
//   new Client("Ana", "1990-12-13T02:00:00.000Z", "a1"),
// ];

const Home = () => {
  const repo: ClientRepository = new ClientCollection();

  const [clients, setClients] = useState<Client[]>([]);

  const getClients = async () => {
    try {
      const response = await repo.getAll();

      setClients(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Layout>
      <section className="bg-white rounded-md w-2/3">
        <header className="m-0 border-b-4 border-purple-500 p-4">
          <h1 className="text-4xl font-black text-purple-800">Meus Clientes</h1>
        </header>

        <div className="p-4">
          <div className="flex justify-end mb-4">
            <Modal
              triggerButton={
                <Button className="bg-gradient-to-r from-blue-400 to-blue-700">
                  <PlusIcon />
                  Novo Cliente
                </Button>
              }
              modalTitle="Cadastrar Novo Cliente"
            >
              <ClientRegisterForm getClients={getClients} />
            </Modal>
          </div>

          <Table clients={clients} getClients={getClients} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
