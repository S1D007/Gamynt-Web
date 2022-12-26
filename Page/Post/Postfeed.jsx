import React from 'react'
import style from "./Styles/post.module.scss"
import MoreIcon from '@mui/icons-material/MoreVert';
import LikeOutline from '@mui/icons-material/FavoriteBorder';
import LikedIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SaveOutline from '@mui/icons-material/BookmarkBorder';
import SavedIcon from '@mui/icons-material/Bookmark';

const Postfeed = () => {
  return (
    <main className={style.post_main_container}>

      <section className={style.post_card}>
        <header>
          <div className={style.header_user_info}>
          <img src="/images/freefire.jpeg" alt="img" />
          <div>
            <h2>Siddhant</h2>
            <span>25 minutes ago</span>
          </div>
          <p>Follow</p>
          </div>
          <section className={style.more_option}>
            <MoreIcon/>
          </section>
        </header>
<section className={style.post_action}>
  <img src="/images/freefire.jpeg" alt="" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, doloribus molestias? Quod, voluptas. Inventore ab nostrum sapiente non odio accusantium iste pariatur aperiam beatae nobis modi dolorum facere, consequuntur natus.</p>
  <div>
    <LikeOutline />
    <CommentIcon/>
    <ShareIcon/>
    <SaveOutline/>
  </div>
</section>
      </section>
    </main>
  )
}

export default Postfeed