import React, { useEffect } from 'react'
import beach from '../images/beach.jpg'
import canyon from '../images/canyon.jpg'
import family1 from '../images/family1.jpg'
import gramps from '../images/gramps-kid.jpg'
import parasail from '../images/parasail.jpg'
import family2 from '../images/family2.jpg'
import paint from '../images/kid-paint.jpg'
import family4 from '../images/family-baby.jpg'
import couple from '../images/old-couple.jpg'
import PostsList from '../components/posts/PostsList'

const Home = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0 });
    // scroll to the top of the browser window when changing route
    },[])
    return(
        <>
        <div className='head-container'>
            <div className='box'>
                <span ><img src={beach} alt='beach'/></span>
                <span ><img src={canyon} alt='canyon'/></span>
                <span ><img src={family1} alt='familyPhoto'/></span>
                <span ><img src={gramps} alt='grandpaAndChild'/></span>
                <span ><img src={parasail} alt='parasailing'/></span>
                <span ><img src={family2} alt='familyPhoto'/></span>
                <span ><img src={paint} alt='childCoveredInPaint'/></span>
                <span ><img src={family4} alt='familyPhoto'/></span>
                <span ><img src={couple} alt='couple'/></span>
            </div>
        </div>
        <div>
            <PostsList/>
        </div>
        </>
    )
}

export default Home