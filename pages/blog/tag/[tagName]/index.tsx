import type { Tag, Post } from '../../../data/blog'
import { tagsData, postsData } from '../../../data/blog'

import { getLink } from '../../../common'
import Link from 'next/link'

interface TagViewParams {
    posts: Post[];
    tag: Tag;
}

export default function TagView({ tag, posts }: TagViewParams) {
    return (
        <>
        <div key={`tag_${tag.Slug}`}>
        <Link href={getLink(`/index`)}>
                <a>Home page</a>
            </Link>
            <Link href={getLink(`/blog/page/1`)}>
                <a>Page page</a>
            </Link>

        <p>Slug: {tag.Slug}</p>
        <p>Title: {tag.Title}</p>
        <p>Color: {tag.Color}</p>
        <p>Posts:
        <ol>
        {posts.map(post => {
            return (
                <li key={`post_${post.Id}`}><Link href={getLink(`/blog/post/${post.Slug}`)}>
                <a>{post.Id}: {post.Title}</a>
                </Link></li>
                )
            })}
            </ol>
            </p>
            </div>
            
            </>
            );
        }
        
        export async function getStaticPaths() { 
            const paths = tagsData.map((tag) => ({
                params: { tagName: `${tag.Slug}` },
            }));
            
            return {
                paths,
                fallback: false,
            };
        }
        
        interface StaticPropsParams {
            params: {
                tagName: string;
            }
        }
        
        export async function getStaticProps({ params }: StaticPropsParams) {
            const { tagName } = params;
            const tag: Tag = tagsData.filter(t => t.Slug === tagName)[0]
            const posts: Post[] = postsData.filter(p => p.Tags.includes(tag.Slug))
            
            return {
                props: { posts, tag },
            };
        }
