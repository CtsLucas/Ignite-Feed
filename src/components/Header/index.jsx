import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logotipo do Ignite" />
      <h1>Ignite Feed</h1>
    </Container>
  );
}
