import { v4 as uuid } from "uuid";

export default class Utils {
  static generateId(): string {
    return uuid();
  }
}
