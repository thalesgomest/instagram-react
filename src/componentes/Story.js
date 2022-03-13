export default function Story(props) {
    const {nome, src} = props;
    return (
        <div className="story">
            <div className="thumbnail">
            <img src={src} alt="story"/>
            </div>
            <div className="usuario">
            {nome}
            </div>
        </div>
);
}