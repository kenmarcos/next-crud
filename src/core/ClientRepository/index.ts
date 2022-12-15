import Client from "core/Client";

interface ClientRepository {
  save: (client: Client) => Promise<Client>;
  delete: (client: Client) => Promise<void>;
  getAll: () => Promise<Client[]>;
}

export default ClientRepository;
