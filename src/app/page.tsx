import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
const query = `*[_type == 'post'] {
  title,
  summary,
  "image": image.asset->url, // Resolves the image URL from the asset reference
  "slug": slug.current,
  }`;

const posts:post[] = await client.fetch(query)
console.log(posts)




  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          posts.map((post:post)=>(
            <BlogCard post={post} key={post.slug} />
          ))
          
        }

      </section>
    </main>
  );
}
