import Client from "../../../core/Client";
import ClientRepository from "../../../core/ClientRepository";
import firestore, {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { dataBase } from "../../config";

class ClientCollection implements ClientRepository {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        birthDate: client.birthDate,
        age: client.age,
      };
    },

    fromFirestore(
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.birthDate, snapshot.id);
    },
  };

  #collection = collection(dataBase, "clients").withConverter(this.#conversor);

  async save(client: Client): Promise<Client> {
    if (client?.id) {
      await setDoc(
        doc(dataBase, "clients", String(client.id)).withConverter(
          this.#conversor
        ),
        client
      );

      return client;
    } else {
      const docRef = await addDoc(this.#collection, client);
      const doc = await getDoc(docRef);

      return doc.data() as Client;
    }
  }

  async delete(client: Client): Promise<void> {
    return await deleteDoc(doc(dataBase, "clients", client.id as string));
  }

  async getAll(): Promise<Client[]> {
    const clientsCol = this.#collection;
    const clientsSnapshot = await getDocs(clientsCol);
    const clientsList = clientsSnapshot.docs.map((doc) => doc.data()) ?? [];

    return clientsList;
  }
}

export default ClientCollection;
