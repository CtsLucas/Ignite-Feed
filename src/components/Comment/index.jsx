import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import {
  AuthorAndTime, Cointainer, CommentBox, CommentContent,
} from './styles';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1);
  }

  return (
    <Cointainer>
      <Avatar src="https://github.com/CtsLucas.png" hasBorder={false} />

      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <strong>Lucas Cavalcate</strong>
              <time title="13 de Agosto às 13:30h" dateTime="2022-08-13 13:30:00">
                Cerca de 1h átras
              </time>
            </AuthorAndTime>

            <button title="Deletar comentário" type="button" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </CommentContent>
        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            {' '}
            <span>{likeCount}</span>
          </button>
        </footer>
      </CommentBox>
    </Cointainer>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};
