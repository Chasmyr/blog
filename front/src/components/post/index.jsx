import "./style.css"

const Post = () => {

    return (
        <div className="post">
            <div className="img">
                <img src="https://blog.fr.playstation.com/tachyon/sites/10/2023/05/88cdc022b486bc26cc18b0895232d2c77075f4d3.png?resize=1088%2C612&crop_strategy=smart&zoom=1.5" alt="img" />
            </div>
            <div className="text">
                <h2>Vous êtes invités : Un PlayStation Showcase sera diffusé en direct mercredi prochain, le 24 mai, à 22h</h2>
                <p className="info">
                    <a className="author">Tolkien</a>
                    <span className="date">2023-05-20 14:57</span>
                </p>
                <p className="desc">L’émission durera un peu plus d’une heure, se concentrant sur les jeux PS5 et PS VR2 en développement chez les meilleurs studios, tout autour du monde. Attendez-vous à un aperçu de plusieurs nouvelles créations des Studios PlayStation, ainsi que des jeux enchanteurs venant de nos partenaires extérieurs et de créateurs indépendants.</p>
            </div>
        </div>
    )
}

export default Post