import "./SearchContainerHero.css";

export default function SearchContainerHero() {
  return (
    <section className="hero">
      <div className="search-container-hero">
        <input type="text" placeholder="Search for Lego sets..."></input>
        <button>🔍</button>
      </div>
    </section>
  );
}
