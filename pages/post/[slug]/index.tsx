import type { Post } from '../../posts'
import { postsData } from '../../posts'

import { getLink } from '../../common'
import Link from 'next/link'

interface PostViewParams {
    post: Post;
}

export default function PostView({ post }: PostViewParams) {
    return (
      <article key={`post_${post.Slug}`}>
        <div className="text-sm breadcrumbs p-3 m-3 align-middle">
        <ul>
        <li>
        <Link href={getLink(`/index`)}>
            <a>Home</a>
        </Link>
        </li>
        <li>{post.Title}</li>
        </ul>
        </div>

        <h1 className="first-letter:font-bold first-letter:text-2xl first-letter:bg-indigo-500 first-letter:text-white first-letter:p-2 m-3 p-3 justify-center">{post.Title}</h1>
        <p className='m-5 py-2 px-2 bg-green-500 text-white font-Chalkboard'>{post.Text}</p>
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