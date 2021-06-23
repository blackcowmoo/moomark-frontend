import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Link href='/post'><a>post</a></Link>
      <Link href='/edit'><a>edit</a></Link>
      <h1>mooMark main</h1>
    </>
  );
};

export default Index;
