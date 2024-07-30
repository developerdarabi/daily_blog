import { BlogContainer } from "@/ui";
import { FetchHandler } from "@/utils/api";

export const metadata = {
  title: ""
}

export default async function page({ params }: { params: { id: string } }) {
  const blog = await FetchHandler({
    url: 'posts/' + params.id,
    options: {
      method: 'get'
    }
  })

  metadata.title = blog.title

  return (
    <BlogContainer blog={blog} />
  )
}
