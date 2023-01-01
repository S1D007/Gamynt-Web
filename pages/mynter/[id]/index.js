import React from 'react'
import Profilecard from '../../../Page/Account/component/Profilecard';

function index({result}) {
    console.log(result)
  return (
    <div>
        <Profilecard username={result.username} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} bio={result.bio} />
    </div>
  )
}

export default index

export const getServerSideProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch(`http://localhost:8080/get-user?uid=${id}`)
    const result = await res.json()
    // console.log(result)
    return {
      props: {
        result:result
      }
    }
  }