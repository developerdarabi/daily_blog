import { db } from '../db';


export const blogRepo = {
    getAll,
    create,
    delete: deleteBlog,
    update
};


function getAll() {
    return db.Blogs.findAll();
}

async function create(params: any) {
    const user = new db.Blogs(params);
    await user.save()
}
function deleteBlog(blogId: number) {
    return db.Blogs.destroy({
        where: {
            id: blogId
        }
    })
}
function update(blogId: number, blog: any) {
    return db.Blogs.update(blog,
        {
            where: {
                id: blogId
            },
            returning: true,
            plain: true
        }
    )
}
