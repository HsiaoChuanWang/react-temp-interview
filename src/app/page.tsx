"use client";
import Card from "./Card";
import Modal from "./Modal";
import { UserProvider } from "./userContext";

export default function Home() {
  return (
    <UserProvider>
      <Card />
      <Modal />
    </UserProvider>
  );
}
