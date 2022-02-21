import { Canine } from "./canine";

export interface Dog extends Canine, Owner {
  name: string;
}
