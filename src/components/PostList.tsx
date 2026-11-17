import axios from 'axios';
import PostItem from './PostItem';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function PostList() {
  await simLoading();
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      {data.slice(0, 5).map((el) => (
        <PostItem key={el.id} title={el.title} />
      ))}
    </div>
  );
}

async function simLoading() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 5000);
  });
}
