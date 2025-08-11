import { createContext } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  async function fetchBooks() {
    try {
    } catch (error) {}
  }
  async function fetchBookById(id) {
    try {
    } catch (error) {}
  }
  async function createBook(data) {
    try {
    } catch (error) {}
  }
  async function deleteBook(id) {
    try {
    } catch (error) {}
  }
  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}
