import type { Post } from '../../posts'
import { postsData } from '../../posts'

interface PostViewParams {
    post: Post;
}

export default function PostView({ post }: PostViewParams) {
    return (
      <article>
        <h1 className=''>{post.Title}</h1>
        <p>{post.Text}</p>
      </article>
    );
  }
  
  export async function getStaticPaths() {
    // const res = await fetch(`${process.env.BLOG_API_ENDPOINT}/posts`);
    // const posts: Post[] = await res.json();
  
    const paths = postsData.map((post) => ({
      params: { slug: `${post.Slug}` },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }

  interface StaticPropsParams {
      params: {
          slug: string;
      }
  }
  
  export async function getStaticProps({ params }: StaticPropsParams) {
    const { slug } = params;
  
    // const res = await fetch(`${process.env.BLOG_API_ENDPOINT}/posts?Slug=${slug}`);
    // const data = await res.json();
    // const post = data[0];
    const post: Post = postsData.filter(p => p.Slug === slug)[0]
  
    return {
      props: { post },
    };
  }