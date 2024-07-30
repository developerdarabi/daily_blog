import { BlogType } from '@/types'
import { BlogsContainer } from '@/ui'
import { BlogCard } from '@/ui/index'

interface Props {
    blogs: BlogType[]
    limitationCount?: number
}

export default function Blogs(props: Props) {
    const { blogs, limitationCount = null } = props
    return <BlogsContainer>{(limitationCount?blogs.slice(0,limitationCount):blogs).map((blog: BlogType) => <BlogCard blog={blog} key={blog.id} />)}</BlogsContainer>
}
