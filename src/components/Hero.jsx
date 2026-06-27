import { Link } from "react-router-dom";
import heroImage from "../assets/images/landingpage.png";

function Hero(){

    return (

        <section className="hero">


            <div className="hero-text">


                <p className="badge">

                    SELAMAT DATANG

                </p>



                <h1>

                    AI Smart Learner

                </h1>



                <h2>

                    Belajar Menggunakan
                    <br />

                    Artificial Intelligence
                    <br />

                    Secara <span>Bijak dan Etis</span>


                </h2>



                <p>

                    Website pembelajaran interaktif
                    untuk memahami konsep AI,
                    manfaat, risiko, dan prinsip
                    penggunaan AI secara bertanggung jawab.

                </p>

                <Link to="/materi" className="btn">
                    Mulai Belajar →
                </Link>

            </div>





            <div className="hero-image">
                <img src={heroImage} alt="AI learning illustration" />
            </div>



        </section>


    )


}


export default Hero;