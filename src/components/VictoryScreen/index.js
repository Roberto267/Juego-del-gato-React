import './VictoryScreen.css'

const VictoryScreen = ({ winPlayer, onClickReplay }) => {
    return(
        <article className="VictoryScreen">
            <div className="VictoryScreen-box">
                <h2 className="VictoryScreen-title">GANADOR:</h2>
                <p className="VictoryScreen-player">{winPlayer}</p>
                <button onClick={onClickReplay} className="VictoryScreen-replay">Jugar de nuevo</button>
            </div>
        </article>
    )
}

export { VictoryScreen }