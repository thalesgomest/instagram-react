export default function PostFeed(props) {

    const {nomes, src, typeofpost} = props;
    const [nome_perfil, nome_curtidas, dados_curtidas] = nomes;
    const [src_perfil, src_post, src_curtidas] = src;
    
    if (typeofpost === "image") {
        return (
    <article className="post">
        <div className="post-titulo">
            <div className="post-titulo--usuario">
            <img src={src_perfil} alt="usuario" />
            <p>{nome_perfil}</p>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="post-imagem">
            <img src={src_post} alt="post-imagem" />
        </div>
        <div className="post-botoes">
            <div className="post-botoes--principais">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div className="post-curtidas">
            <img src={src_curtidas} alt="ícone" />
            <p>Curtido por <strong>{nome_curtidas}</strong> e <strong>{dados_curtidas}</strong></p>
        </div>
    </article>
    );
} else if (typeofpost === "video") {
    return (
    <article className="post">
        <div className="post-titulo">
            <div className="post-titulo--usuario">
            <img src={src_perfil} alt="usuario" />
            <p>{nome_perfil}</p>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="post-imagem">
            <video autoPlay muted loop controls src={src_post}></video>
        </div>
        <div className="post-botoes">
            <div className="post-botoes--principais">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div className="post-curtidas">
            <img src={src_curtidas} alt="ícone" />
            <p>Curtido por <strong>{nome_curtidas}</strong> e <strong>{dados_curtidas}</strong></p>
        </div>
    </article>
);

}
}