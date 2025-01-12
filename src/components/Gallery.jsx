export function Gallery() {
    return (
<div title="Галерея" class="gallery" id="gallery">
            <h2 class="header-gallery">Галерея</h2>
            <img class="content-image gallery-photo main-photo" src="resources/why-cow.jpg"/>  
            <div class="gallery-section">
                <button class="gallery-carousel-button gallery-arrow-left" onclick="changeGalleryMainPhoto(-1); return false">
                    <svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
                      <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                      45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>  
                </button>
                <section class="gallery-carousel">                    
                    <img class="content-image gallery-photo additional-photo photo-1" src="resources/gallery-photo-1.png"/>
                    <img class="content-image gallery-photo additional-photo photo-2" src="resources/gallery-photo-2.png"/>
                    <img class="content-image gallery-photo additional-photo photo-3" src="resources/gallery-photo-3.png"/>
                    <img class="content-image gallery-photo additional-photo photo-4" src="resources/gallery-photo-4.png"/>          
                </section>
                <button class="gallery-carousel-button gallery-arrow-right" onclick="changeGalleryMainPhoto(1); return false">
                    <svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
                      <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
                    </svg>
                </button>
            </div>           
        </div>
    );
}