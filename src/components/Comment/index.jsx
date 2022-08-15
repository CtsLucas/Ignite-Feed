import { ThumbsUp, Trash } from 'phosphor-react';
import {
  AuthorAndTime, Cointainer, CommentBox, CommentContent,
} from './styles';

export function Comment() {
  return (
    <Cointainer>
      <img src="https://github.com/CtsLucas.png" alt="" />

      <CommentBox>
        <CommentContent>
          <header>
            <AuthorAndTime>
              <strong>Lucas Cavalcate</strong>
              <time title="13 de Agosto às 13:30h" dateTime="2022-08-13 13:30:00">
                Cerca de 1h átras
              </time>
            </AuthorAndTime>

            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </CommentContent>
        <footer>
          <button type="button">
            <ThumbsUp size={20} />
            Aplaudir
            {' '}
            <span>20</span>
          </button>
        </footer>
      </CommentBox>
    </Cointainer>
  );
}
