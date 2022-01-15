export interface Tag {
    Slug: string;
    Title: string;
    Color: string;
}

export interface Post {
    Id: number;
    Slug: string;
    Title: string;
    Text: string;
    Tags: string[];
}

export const tagsData: Tag[] = [
    {
        Slug: "coding",
        Title: "Coding",
        Color: "black"
    },
    {
        Slug: "experience",
        Title: "Experience",
        Color: "indigo-500"
    },
]

export const postsData: Post[] = [
    {
        Id: 0,
        Slug: "my-first-post",
        Title: "My First Post",
        Text: "People talk loud when they wanna act smart, right?",
        Tags: ["experience"],
    },
    {
        Id: 1,
        Slug: "another-post",
        Title: "Another Post",
        Text: "It's not just a boulder... It's a rock!",
        Tags: ["experience"],
    },
    {
        Id: 2,
        Slug: "data-part-1",
        Title: "Data 1",
        Text: "People talk loud when they wanna act smart, right?",
        Tags: ["coding", "experience"],
    },
    {
        Id: 3,
        Slug: "data-part-2",
        Title: "Data 2",
        Text: "People talk loud when they wanna act smart, right?",
        Tags: ["coding"],
    },
    {
        Id: 4,
        Slug: "data-part-3",
        Title: "Data 3",
        Text: "People talk loud when they wanna act smart, right?",
        Tags: ["coding"],
    },
]

export default function PostView() {
    return (
        <article>
        </article>
    );
}
