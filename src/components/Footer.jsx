import logo from "../assets/images/Logo.png";

function Footer(){


    return(

        <footer>


            <div className="footer-content">


                <h3>
                    <img src={logo} alt="AI Smart Learner logo" className="footer-logo" />
                    AI Smart Learner
                </h3>


                <p>
                    Platform pembelajaran interaktif untuk memahami
                    Artificial Intelligence secara etis dan bertanggung jawab.
                </p>


                <p>
                    Belajar AI • Pahami Teknologi • Gunakan Secara Bijak
                </p>


                <hr />


                <p>
                    © 2026 AI Smart Learner
                </p>


            </div>


        </footer>


    )


}


export default Footer;