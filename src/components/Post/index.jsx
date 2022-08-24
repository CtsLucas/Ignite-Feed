import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import {
  Container, Author, AuthorInfo, Header, Content, Form, CommentList,
} from './styles';

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <Container>
      <Header>
        <Author>
          <Avatar src={author.avatarUrl} />
          <AuthorInfo>
            <strong>
              {author.name}
            </strong>
            <span>
              {author.role}
            </span>
          </AuthorInfo>
        </Author>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </Header>
      <Content>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.text}</p>;
          } if (line.type === 'link') {
            return <p><a href="/">{line.text}</a></p>;
          }
          return null;
        })}
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

Post.propTypes = {
  author: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
};
