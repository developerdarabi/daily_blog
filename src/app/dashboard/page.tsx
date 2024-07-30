import { CustomLink } from "@/ui";
import { FetchHandler } from "@/utils/api";

export default async function Home() {
  const blogs = await FetchHandler({
    url: 'posts',
    options: {
      method: 'get'
    },
  })
  return (
    <CustomLink href={'dashboard/create-blog'}>Create your blog</CustomLink>
  );
}
