import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique ID for messages
 */
export const generateId = (): string => {
  return uuidv4();
};
