import { getPostsMeta } from "@/lib/posts"
import BlogPosts from "@/app/components/BlogPosts"
import Link from "next/link"


type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl text-center mt-4 mb-0">Resultados para:#{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0 grid grid-cols-2" >
                    {tagPosts.map(post => (
                        <BlogPosts key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </>
    )
}