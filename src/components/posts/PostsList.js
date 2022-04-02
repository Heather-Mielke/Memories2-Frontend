import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor"
import Time from "./Time";
import ReactionButtons from "./ReactionButtons";
import {IoExpand} from 'react-icons/io5'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className=' relative text-sm cards'>
            <img src={post.image} alt='post' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 text-2xl p-5'><IoExpand className='absolute top-0 right-0 mr-1 mt-1'/></button>
            <div className='flex justify-between'>
            <h3 className="font-bold pt-1">{post.caption}</h3>
            <p><Time timestamp={post.date} /></p>
            </div>
            <p> <PostAuthor userId={post.userId}/> </p>   
            <ReactionButtons post={post}/>
            
        </article>
    ))

    return (
        <>
        <div className='title-container flex justify-center mt-16'>
        <h2 className=' text-5xl text-white title new-post'>Picture it then Post it</h2>
        </div>
        <section className="masonary-container">
            {renderedPosts}
        </section>
        </>
    )
}

export default PostList