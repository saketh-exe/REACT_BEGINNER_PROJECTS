import style from './styles.module.css'
export default function Header(){

    return(
        <nav className={style.Head}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToi2_q19n0e-wIzPRv6qgUIzaHysGKaIlxJw&s" alt="troll face"/>
                <h3>
                    Meme Generator
                </h3>
            </div>
            <h5>
                React Course - Project 3
            </h5>
        </nav>
    )
}