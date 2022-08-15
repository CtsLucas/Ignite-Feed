import { Comment } from '../Comment';
import {
  Container, Author, AuthorInfo, Header, Content, Form, CommentList,
} from './styles';

export function Post() {
  return (
    <Container>
      <Header>
        <Author>
          <img src="https://github.com/CtsLucas.png" alt="" />
          <AuthorInfo>
            <strong>
              Lucas Cavalcante
            </strong>
            <span>
              Web Developer
            </span>
          </AuthorInfo>
        </Author>
        <time title="13 de Agosto às 13:30h" dateTime="2022-08-13 13:30:00">
          Públicado há 1h
        </time>
      </Header>
      <Content>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>
          👉
          {' '}
          <a href="/">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="/">#novoprojeto</a>
          {' '}
          <a href="/">#nlw</a>
          {' '}
          <a href="/">#rocketseat</a>
        </p>
      </Content>
      <Form>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário..."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </Form>

      <CommentList>
        <Comment />
      </CommentList>

    </Container>
  );
}
