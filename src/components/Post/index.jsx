import { useState } from 'react';
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import {
  Container, Author, AuthorInfo, Header, Content, Form, CommentList,
} from './styles';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, parabéns!',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    const newComment = event.target.comment.value;

    setComments([
      ...comments,
      newComment,
    ]);

    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Por favor, digite um comentário');
  }

  function deleteComment(commentTodelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentTodelete);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.text}>{line.text}</p>;
          } if (line.type === 'link') {
            return <p key={line.text}><a href="/">{line.text}</a></p>;
          }
          return null;
        })}
      </Content>
      <Form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </Form>

      <CommentList>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </CommentList>

    </Container>
  );
}

Post.propTypes = {
  author: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
};
