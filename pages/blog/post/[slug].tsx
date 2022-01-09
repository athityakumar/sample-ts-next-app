import type { Post } from '../../data/blog'
import { postsData } from '../../data/blog'

import { getLink } from '../../common'
import Link from 'next/link'

interface PostViewParams {
    post: Post;
}

export default function PostView({ post }: PostViewParams) {
    return (
        <div key={`post_${post.Slug}`}>
            <Link href={getLink(`/index`)}>
                <a>Home page</a>
            </Link>
            <Link href={getLink(`/blog/page/1`)}>
                <a>Page page</a>
            </Link>

            <p>Slug: {post.Slug}</p>
            <p>Id: {post.Id}</p>
            <p>Title: {post.Title}</p>
            <p>Text: {post.Text}</p>
            <p>Tags:
            {post.Tags.map(tag => {
            return (
                <Link href={getLink(`/blog/tag/${tag}/page/1`)}>
                    <a>{tag}</a>
                </Link>
            )
        })}
            </p>

        </div>
    );
  }
  
  export async function getStaticPaths() { 
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
    const post: Post = postsData.filter(p => p.Slug === slug)[0]
  
    return {
      props: { post },
    };
  }
