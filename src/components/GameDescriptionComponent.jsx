export function GameDescription({description, imageUrls}) {
    const images = imageUrls.map((url) => {
        return <img class="content-image subsection-image" src={url}/>;
    })

    return (
        <div className="subsection-description">
            <div className="subsection-images">
                {images}
            </div>
            <section>
                {description}
            </section>         
        </div>
    );
}