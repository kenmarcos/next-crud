import moment from "moment";

class Client {
  #id: string | null;
  #name: string;
  #birthDate: string;
  #age: number;

  constructor(name: string, birthDate: string, id: string | null = null) {
    this.#id = id;
    this.#name = name;
    this.#birthDate = birthDate;
    this.#age = moment().diff(moment(birthDate), "year");
  }

  static voidClient() {
    return new Client("", "");
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get birthDate() {
    return this.#birthDate;
  }

  get age() {
    return this.#age;
  }
}

export default Client;
