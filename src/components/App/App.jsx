import { Container, Header, Logo, Link } from "./App.styled";
import { AuthProvider } from "../AuthProvider";
import User from "../User";
import AnimatedRoutes from "../AnimatedRoutes";

export const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Header>
          <Link to="/" end>
            <Logo>Web creator STUDIO</Logo>
          </Link>
          <nav>
            <Link to="/projects">Проєкти</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/profile">Аккаунт</Link>
          </nav>
          <User />
        </Header>
        <AnimatedRoutes />
      </Container>
    </AuthProvider>
  );
};
