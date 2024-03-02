import { useEffect, useState } from "react";
import "./styles.css"
import { UserDto } from "../../../models/user";
import *as userService from '../../../services/user-service';

export default function AdminHome() {

  const [user, setUser] =useState<UserDto>();

  useEffect(() => {
    userService.findMe()
    .then(response => {
      setUser(response.data);
      console.log(response.data);
    });

  }, [])

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">
          Bem-vindo à área administrativa {user?.name}
        </h2>
      </section>
    </main>
  );
}
