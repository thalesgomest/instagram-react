import Sugestao from "../componentes/Sugestao";
import SidebarUsuario from "../componentes/SidebarUsuario";
import SidebarInfos from "../componentes/SidebarInfos";

export default function Sidebar() {

    const users_data = [
        {
            nome: ["bad.vibes.memes", "Segue você"],
            src: "assets/img/bad.vibes.memes.svg"
        },
        {
            nome: ["chibirdart", "Segue você"],
            src: "assets/img/chibirdart.svg"
        },
        {
            nome: ["razoesparaacreditar", "Novo no Instagram"],
            src: "assets/img/razoesparaacreditar.svg"
        },
        {
            nome: ["adorable_animals", "Segue você"],
            src: "assets/img/adorable_animals.svg" 
        },
        {
            nome: ["smallcutecats", "Segue você"],
            src: "assets/img/smallcutecats.svg" 
        }

    ]

    const sidebar_user = [
        {
            nomes: ["catanacomics", "Catana"],
            src: "assets/img/catanacomics.svg"
        },
    ]

return (
    <aside className ="sidebar">
        {sidebar_user.map((data) => (
            <SidebarUsuario nomes={data.nomes} src={data.src} />
        ))}
        <div className ="sidebar-sugestoes">
            <div className ="sidebar-sugestoes-titulo">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            {users_data.map((data) => (
                <Sugestao nome={data.nome} src={data.src} />
            ))}
        </div>
        
        <SidebarInfos />
    </aside>
);
}