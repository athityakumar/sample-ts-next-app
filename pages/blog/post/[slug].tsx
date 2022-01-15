import type { Post, Tag } from '../../data/blog'
import { postsData, tagsData } from '../../data/blog'

import { getLink } from '../../common'
import Link from 'next/link'

interface PostViewParams {
    post: Post;
    tags: Tag[];
}

export default function PostView({ post, tags }: PostViewParams) {
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
            <p className='m-3 p-3'>Tags:
            {tags.map(tag => {
            return (
                <Link href={getLink(`/blog/tag/${tag.Slug}/page/1`)}>
                    <a className={`px-3 py-1.5 m-1 text-white bg-${tag.Color} rounded-3xl`}>{tag.Slug}</a>
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
    const tags: Tag[] = tagsData.filter(t => post.Tags.includes(t.Slug))
    return {
      props: { post, tags },
    };
  }
