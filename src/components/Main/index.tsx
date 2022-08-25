import { Post } from '../Post';
import { Container } from './styles';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/CtsLucas.png',
      name: 'Lucas Cavalcante',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', text: 'Fala galeraa 👋' },
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', text: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-13 13:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', text: 'Fala galeraa 👋' },
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', text: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-23 13:30:00'),
  },
];

export function Main() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
      ))}
    </Container>
  );
}
