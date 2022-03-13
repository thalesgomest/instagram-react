import PostFeed from "../../componentes/PostFeed";

    const post_data = [
        {
            nomes: ["9gag", "respondeai", "outras 101.523 pessoas"], 
            srcs: ["assets/img/9gag.svg", "assets/img/gato-telefone.svg","assets/img/respondeai.svg"],
            typeofpost: "image"
        },
        {
            nomes: ["barked", "adorable_animals", "outras 99.159 pessoas" ], 
            srcs: ["assets/img/barked.svg", "assets/img/dog.svg","assets/img/adorable_animals.svg"],
            typeofpost: "image"
        },
        {
            nomes: ["meowed", "respondeai","outras 101.523 pessoas"], 
            srcs: ["assets/img/meowed.svg", "assets/video/video.mp4","assets/img/respondeai.svg"],
            typeofpost: "video"
        }
]

export default function Feed() {
    return (
    <section className="feed">
            {post_data.map((data) => (
                <PostFeed nomes={data.nomes} src={data.srcs} typeofpost={data.typeofpost} />
            ))}
    </section>
);
}