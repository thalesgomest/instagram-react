import Story from "../../componentes/Story";

    const usuarios = [
        {nome: "9gag", src: "assets/img/9gag.svg"},
        {nome: "meow", src: "assets/img/meowed.svg"},
        {nome: "barked", src: "assets/img/barked.svg"},
        {nome: "nathanwpylestrangeplanet", src: "assets/img/nathanwpylestrangeplanet.svg"},
        {nome: "wawawicomics", src: "assets/img/wawawicomics.svg"},
        {nome: "respondeai", src: "assets/img/respondeai.svg"},
        {nome: "filomoderna", src: "assets/img/filomoderna.svg"},
        {nome: "memeriagourmet", src: "assets/img/memeriagourmet.svg"}
]

export default function Stories() {
    return (
<div className="stories-posts">
    <section className="stories">
        <div className="stories-container">
            {usuarios.map((usuario) => (
                <Story nome={usuario.nome} src={usuario.src} />
            ))}
            <ion-icon class="setinha" name="chevron-forward-circle"></ion-icon>
        </div>
    </section>
</div>
);
}