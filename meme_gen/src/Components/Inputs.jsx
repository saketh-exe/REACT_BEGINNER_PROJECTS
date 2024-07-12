import styles from './styles.module.css'
import {useState} from 'react'
import memedata from './memedata'
export default function Inputs(){


    let [imgs , setimg] = useState("");


    function se(){
       let  meme_Array = memedata.data.memes;
        let random = Math.floor(Math.random() * meme_Array.length)
        setimg(meme_Array[random].url)
    }
    return(
        <div className={styles.inputs}>
            <div>
                <input type="text" placeholder='Top'></input>
                <input type="text" placeholder='Bottom'></input>
            </div>
            <button onClick={se}>Get a new meme image <img src='https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f5bc.png'/></button>
            {imgs != ""&&<img src={imgs} alt="nsn" className={styles.display}/>}
        </div>
    )
}