export default function Sugestao(props) {
    const {nome, src} = props;
    const [nome_perfil, text] = nome;
    return (
<div className="sidebar-sugestoes-sugestao">
    <div className="sidebar-sugestoes-sugestao-perfil">
        <img src={src} alt="perfil"/>
        <div className="sidebar-sugestoes-sugestao-nome">
            <p>{nome_perfil}</p>
            <p>{text}</p>
        </div>
    </div>
    <div className="sidebar-sugestoes-sugestao-link">
        <a href="#">Seguir</a>
    </div>
</div>
);
}