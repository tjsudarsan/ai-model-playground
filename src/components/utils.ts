/**
 * Generates a unique ID for messages
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Gets the appropriate background color for a message based on its role
 */
export const getMessageColor = (role: string): string => {
  switch (role) {
    case "system":
      return "bg-yellow-500/10 border-yellow-500/20";
    case "user":
      return "bg-blue-500/10 border-blue-500/20";
    case "assistant":
      return "bg-green-500/10 border-green-500/20";
    default:
      return "bg-gray-500/10 border-gray-500/20";
  }
};

/**
 * Gets the appropriate header background color for a model panel
 */
export const getHeaderBgColor = (color: string): string => {
  switch (color) {
    case "blue":
      return "bg-blue-500/20";
    case "amber":
      return "bg-amber-500/20";
    case "violet":
      return "bg-violet-500/20";
    default:
      return "bg-gray-500/20";
  }
};
