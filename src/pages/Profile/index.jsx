import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/input";

import { Container, Form , Avatar } from "./style";
import { Link } from "react-router-dom";
export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/bieldcvs.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          
          </label>
        </Avatar>
        <Input placeholder="Nome" type="texto" icon={FiUser} />
        <Input placeholder="E-mail" type="texto" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
