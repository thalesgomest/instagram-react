export default function SidebarUsuario(props) {
    const {nomes, src} = props;
    const [perfil_nome, nome] = nomes;
    return (
        <div className ="sidebar-usuario">
            <img src={src} alt="perfil do usuario" />
            <div className ="sidebar-usuario-nome">
            <p><strong>{perfil_nome}</strong></p>
            <p>{nome}</p>
            </div>
        </div>
);
}