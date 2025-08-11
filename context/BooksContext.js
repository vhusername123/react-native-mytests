import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import * as databaseids from "../databaseids.json" with {type: "json"} 
export const BooksContext = createContext();
const DATABASE_ID = databaseids.idmap.maindb;
const COLLECTION_ID = databaseids[DATABASE_ID].books;
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();
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
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userid: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.log(error.message)
      throw Error(error.message);
    }
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
