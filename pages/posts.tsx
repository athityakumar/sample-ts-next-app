export interface Post {
    Id: number;
    Slug: string;
    Title: string;
    Text: string;
}

export const postsData: Post[] = [
{
    Id: 0,
    Slug: "my-first-post",
    Title: "My First Post",
    Text: "People talk loud when they wanna act smart, right?"
},
{
    Id: 1,
    Slug: "another-post",
    Title: "Another Post",
    Text: "It's not just a boulder... It's a rock!"
}
]

export default function PostView() {
    return (
      <article>
      </article>
    );
  }