import ImgRonCartavio from "../../assets/logo_ron_cartavio.png";
import ImgBaileys from "../../assets/logo_baileys.png";
import ImgVodka from "../../assets/logo_vodka.png";
import ImgWhisky from "../../assets/logo_whisky_jw.png";


export default function Home() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero_text">
            <h2>Frase:</h2>
            <p>Maximiza tu diversión.</p>
            <p>No dejes que en tus celebraciones</p>
            <p>falte jamas el licor.</p>
          </div>
        </section>
        <section className="cont_logos">
          <p>Nuestra tienda , ofrece las siguientes marcas:</p>
          <div className="logos">
              <img src={ImgRonCartavio} alt="logo_ron_cartavio" />
              <img src={ImgBaileys} alt="logo_baileys" />
              <img src={ImgVodka} alt="logo_vodka" />
              <img src={ImgWhisky} alt="logo_whisky_jw" />
          </div>
        </section>
      </div>
    </>
  )
}