import type { Tag, Post } from '../../../../data/blog'

import { tagsData, postsData } from '../../../../data/blog'

import { getLink } from '../../../../common'
import Link from 'next/link'

interface PageViewParams {
    posts: Post[];
    tag: Tag;
    pageNumber: string;
    nextPageExists: Boolean;
}

const PER_PAGE = 2;

function getTaggedPosts(posts: Post[], tag: Tag): Post[] {
    const taggedPosts = posts.filter(p => p.Tags.includes(tag.Slug));
    return taggedPosts;
}

export default function PageView({ tag, posts, pageNumber, nextPageExists }: PageViewParams) {
    return (
        <>
            <Link href={getLink(`/index`)}>
                <a>Home page</a>
            </Link>

            <p>
                Current page: {pageNumber}
            </p>

            {parseInt(pageNumber) !== 1 && (
               <Link href={getLink(`/blog/tag/${tag.Slug}/page/${parseInt(pageNumber)-1}`)}>
               <a>Previous page</a>
               </Link>
            )}

{nextPageExists && (
               <Link href={getLink(`/blog/tag/${tag.Slug}/page/${parseInt(pageNumber)+1}`)}>
               <a>Next page</a>
               </Link>
            )}

        <p>Slug: {tag.Slug}</p>
        <p>Title: {tag.Title}</p>
        <p>Color: {tag.Color}</p>

        {posts.map(post => {
            return (
                <li key={`post_${post.Id}`}><Link href={getLink(`/blog/post/${post.Slug}`)}>
                <a>{post.Id}: {post.Title}</a>
                </Link></li>
                )
            })}
            </>
            );
        }
        
        export function getStaticPaths() {
            const paths: StaticPropsParams[] = [];
            tagsData.forEach(tag => {
                const taggedPosts = getTaggedPosts(postsData, tag);
                const numberOfPages = Math.ceil(taggedPosts.length / PER_PAGE);
                Array.from({length: numberOfPages}, (_, i) => i + 1).forEach((i) => {
                    const params: StaticPropsParams = {
                        params: {
                            pageNumber: `${i}`,
                            tagName: tag.Slug,    
                        }
                    };
                    paths.push(params);
                });
            });
            
            return {
                paths,
                fallback: false,
            };
        }
        
        interface StaticPropsParams {
            params: {
                tagName: string;
                pageNumber: string;
            }
        }
        
        export async function getStaticProps({ params }: StaticPropsParams) {
            const { tagName, pageNumber } = params;
            const tag: Tag = tagsData.filter(t => t.Slug === tagName)[0];
            const taggedPosts: Post[] = getTaggedPosts(postsData, tag);
            const posts: Post[] = taggedPosts.slice((parseInt(pageNumber)-1)*PER_PAGE, parseInt(pageNumber)*PER_PAGE);
           
            const nextPageExists = posts.length === PER_PAGE && (PER_PAGE * parseInt(pageNumber) !== taggedPosts.length);
            return {
                props: { posts, tag, pageNumber, nextPageExists },
            };
        }
