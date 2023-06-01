import React from 'react'
import { useGlobalHook } from './Context'
const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalHook("")
    if (isLoading) {
        return <>
            <h1>Loading...</h1>
        </>
    }
    return (
        <>
            <div className='main'>
                {hits.map((element) => {
                    const { title, author, objectID, url, num_comments } = element
                    return (
                        <div className="card" key={objectID}>
                            <h2>{title}</h2>
                            <p>By <span>{author}</span>  | <span>{num_comments}</span>Comments</p>
                            <div className='card-button'>
                                <a className='one' href={url} target='_blank'>Read More</a>
                                <a className='two' href="#" onClick={() => removePost(objectID)}>Remove</a>
                            </div>

                        </div>
                    )



                })}

            </div>
        </>

    )
}

export default Stories
