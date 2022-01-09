import type { Tag, Post } from '../../data/blog'
import { tagsData, postsData } from '../../data/blog'

import { getLink } from '../../common'
import Link from 'next/link'

interface PageViewParams {
    posts: Post[];
    tags: Tag[];
    pageNumber: string;
    nextPageExists: Boolean;
}

const PER_PAGE = 2;

export default function PageView({ tags, posts, pageNumber, nextPageExists }: PageViewParams) {
    return (
        <>
            <Link href={getLink(`/index`)}>
                <a>Home page</a>
            </Link>

            <p>
                Current page: {pageNumber}
            </p>

            {parseInt(pageNumber) !== 1 && (
               <Link href={getLink(`/blog/page/${parseInt(pageNumber)-1}`)}>
               <a>Previous page</a>
               </Link>
            )}

{nextPageExists && (
               <Link href={getLink(`/blog/page/${parseInt(pageNumber)+1}`)}>
               <a>Next page</a>
               </Link>
            )}

                {tags.map(tag => {
            return (
                <li key={`tag_${tag.Slug}`}><Link href={getLink(`/blog/tag/${tag.Slug}/page/1`)}>
                <a>{tag.Title}</a>
                </Link></li>
                )
            })}
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
        
        export async function getStaticPaths() {
            const numberOfPages = Math.ceil(postsData.length / PER_PAGE);
            const paths = Array.from({length: numberOfPages}, (_, i) => i + 1).map((i) => ({
                params: { pageNumber: `${i}` },
            }));
            
            return {
                paths,
                fallback: false,
            };
        }
        
        interface StaticPropsParams {
            params: {
                pageNumber: string;
            }
        }
        
        export async function getStaticProps({ params }: StaticPropsParams) {
            const { pageNumber } = params;
            const tags: Tag[] = tagsData;
            const posts: Post[] = postsData.slice((parseInt(pageNumber)-1)*PER_PAGE, parseInt(pageNumber)*PER_PAGE);
           
            const nextPageExists = posts.length === PER_PAGE && (PER_PAGE * parseInt(pageNumber) !== postsData.length);
            return {
                props: { posts, tags, pageNumber, nextPageExists },
            };
        }
