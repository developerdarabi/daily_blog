import { Blogs } from '@/components'
import { FetchHandler } from '@/utils/api'

export default async function page() {
  const blogs = await FetchHandler({
    url: 'posts',
    options: {
      method: 'get'
    }
  })
  return (
    <Blogs blogs={blogs} />
  )
}
