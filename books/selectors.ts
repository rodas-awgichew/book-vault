import { Book } from "./types";

export const getStats = (vault: Book[]) => {
  const total = vault.length;

  const completed = vault.filter(
    (b) => b.status === "completed"
  ).length;

  const reading = vault.filter(
    (b) => b.status === "reading"
  ).length;

  return { total, completed, reading };
};