import { PencilLine } from 'phosphor-react';
import { Container, Profile, Footer } from './styles';

export function Sidebar() {
  return (
    <Container>
      <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

      <Profile>
        <img src="https://github.com/CtsLucas.png" alt="" />

        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </Profile>

      <Footer>
        <a href="/">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </Footer>
    </Container>
  );
}
