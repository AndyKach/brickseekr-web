import './IndexFeatureCards.css'



export default function IndexFeatureCards() {
    return (
<section className="feature-cards">
    <div className="card">
        <img src="image/mini_photo.png" alt="Top 100 Sets"></img>
        <h3>Top 100 Sets</h3>
        <p>Discover the most popular Lego sets of all time.</p>
        <a href="topsets.html" className="cta-button">Explore</a>
    </div>
    <div className="card">
        <img src="image/mini_photo.png" alt="About Us"></img>
        <h3>About Us</h3>
        <p>Learn more about how we help you save on Lego.</p>
        <a href="aboutus.html" className="cta-button">Learn More</a>
    </div>
</section>
)
}