import { Blogs } from "@/components";
import { MainPageContainer } from "@/ui";
import { FetchHandler } from "@/utils/api";

export default async function Home() {
  const blogs = await FetchHandler({
    url: 'posts',
    options: {
      method: 'get'
    }
  })
  
  return (
    <MainPageContainer>
      <Blogs blogs={blogs} limitationCount={12} />
    </MainPageContainer>
  );
}
