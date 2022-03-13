export default function Header() {
    return (
<header>
    <nav className="navbar-mobile">
    <ion-icon name="logo-instagram"></ion-icon>
    <img src="assets/img/logo.png" alt="Logo do Instagram" />
    <ion-icon name="paper-plane-outline"></ion-icon>
    </nav>
    <nav className="navbar-desktop">
    <div className="navbar-desktop-logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="separador"></div>
        <img src="assets/img/logo.png" alt="Logo do Instagram" />
    </div>
    <input type="text" placeholder="Pesquisar" />
    <div className="navbar-desktop-icones">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
    </div>
    </nav>
</header>
);
}