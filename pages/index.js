import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';

const graphcms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3tsy9t0ccqb01z1hlm0dt2w/master'
);

const QUERY = gql`{
  posts{
    id,
    title,
    datePublish,
    slug,
    content{
      html
    }
    author{
      name,
      id,
      avatar{
        id,
        url
      }
    }
    coverPhoto{
      url
    }
  }
}`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>JinWang</title>
        <meta name="description" content="about the store!" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
        {/* <script
          src="//code.tidio.co/e5tqxxug3m6vtyz6xbpvcvdjqlm3rleh.js"
          async
        ></script> */}
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
