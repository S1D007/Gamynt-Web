import React from 'react'
import style from "./Styles/post.module.scss"
import MoreIcon from '@mui/icons-material/MoreVert';
import LikeOutline from '@mui/icons-material/FavoriteBorder';
import LikedIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SaveOutline from '@mui/icons-material/BookmarkBorder';
import SavedIcon from '@mui/icons-material/Bookmark';
function PostCard({username,date,uid,message,image,avatar}) {
    return (
        <section className={style.post_card}>
            <header>
                <div className={style.header_user_info}>
                    {avatar && <img src={avatar} alt="img" />}
                    <div>
                        <h2>{username}</h2>
                        <span>{date}</span>
                    </div>
                    <p>Follow</p>
                </div>
                <section className={style.more_option}>
                    <MoreIcon />
                </section>
            </header>
            <section className={style.post_action}>
                {image && <img src={image} alt="" />}
                <p>{message}</p>
                <div>
                    <LikeOutline />
                    <CommentIcon />
                    <ShareIcon />
                    <SaveOutline />
                </div>
            </section>
        </section>
    )
}

export default PostCard