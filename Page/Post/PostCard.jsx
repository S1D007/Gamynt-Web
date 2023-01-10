import React from 'react'
import style from "./Styles/post.module.scss"
import MoreIcon from '@mui/icons-material/MoreVert';
import LikeOutline from '@mui/icons-material/FavoriteBorder';
import LikedIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SaveOutline from '@mui/icons-material/BookmarkBorder';
import SavedIcon from '@mui/icons-material/Bookmark';
import { useUserData } from '../../suppliers/zustand/store';
import { useRouter } from 'next/router';
function PostCard({ username, date, uid, message, image, avatar }) {
    const { result } = useUserData()
    const router = useRouter()
    // const [like,setLike] = useState()
    return (
        <section className={style.post_card}>
            <header>
                <div className={style.header_user_info}>
                    {avatar && <img onClick={() => {
                        router.push(`mynter/${username}`)
                    }} src={avatar} alt="img" />}
                    <div>
                        <h2>{username}</h2>
                        <span>{date}</span>
                    </div>
                    {result?.followers?.some((e) => e.username !== username) ? <p onClick={() => {
                        router.push(`mynter/${username}`)
                    }} >View Profile</p> : <p>Following</p>}

                </div>
                <section className={style.more_option}>
                    <MoreIcon />
                </section>
            </header>
            <section className={style.post_action}>
                {image && <img src={image} alt="" />}
                <p>{message}</p>
                <div>
                    {/* <LikeOutline />
                    <CommentIcon />
                    <ShareIcon />
                    <SaveOutline /> */}
                </div>
            </section>
        </section>
    )
}

export default PostCard