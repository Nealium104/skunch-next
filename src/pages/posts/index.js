import matter from 'gray-matter';

export default function Blog({ data, content }) {
  return (
    <>
      <h1>{data.title}</h1>
      <span>{data.date}</span>
      <span>By {data.author}</span>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('/../../../public/2022-05-04-my-first-post.md');
  const fileContents = await response.text();
  const { data, content } = matter(fileContents);

  return {
    props: {
      data,
      content,
    },
  };
}