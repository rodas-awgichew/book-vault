import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Book, BookStatus } from "../books/types";

type BookState = {
  vault: Book[];

  addToVault: (book: Book) => void;
  removeFromVault: (id: string) => void;
  updateStatus: (id: string, status: BookStatus) => void;
  rateBook: (id: string, rating: number) => void;
};

export const useBookStore = create<BookState>()(
  persist(
    (set, get) => ({
      vault: [],

      addToVault: (book) => {
        const exists = get().vault.some((b) => b.id === book.id);
        if (exists) return;

        set((state) => ({
          vault: [
            ...state.vault,
            { ...book, addedAt: new Date().toISOString() },
          ],
        }));
      },

      removeFromVault: (id) => {
        set((state) => ({
          vault: state.vault.filter((b) => b.id !== id),
        }));
      },

      updateStatus: (id, status) => {
        set((state) => ({
          vault: state.vault.map((b) =>
            b.id === id ? { ...b, status } : b
          ),
        }));
      },

      rateBook: (id, rating) => {
        set((state) => ({
          vault: state.vault.map((b) =>
            b.id === id ? { ...b, rating } : b
          ),
        }));
      },
    }),
    {
      name: "book-vault-storage",
    }
  )
);