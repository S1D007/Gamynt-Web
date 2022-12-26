import React from 'react'
import style from "../styles/utils.module.scss"
import SendIcon from '@mui/icons-material/Send';
import EmojiIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Inputbox = () => {
  let clubname = "gamynt"
  return (
    <main className={style.send_message_input}>
  <label htmlFor="file">
  <AttachFileIcon/>
  </label>
  <input type="file" name="" id="file" />
  <EmojiIcon/>
  {/* <input autoFocus type="text" placeholder={`message  ${clubname}`}/> */}
  <textarea type="text" rows={"1"} placeholder={`message  ${clubname}`}/> 
  <SendIcon/>
</main>
  )
}

export default Inputbox