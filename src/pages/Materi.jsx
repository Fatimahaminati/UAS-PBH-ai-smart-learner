import { Link } from "react-router-dom";



function Materi(){


    const materials = [


        {
            icon:"🤖",

            title:"Mengenal Artificial Intelligence",

            text:
            "Artificial Intelligence adalah teknologi yang memungkinkan komputer melakukan tugas yang membutuhkan kecerdasan manusia seperti memahami bahasa, mengenali pola, dan mengambil keputusan."

        },



        {
            icon:"🎓",

            title:"AI dalam Dunia Pendidikan",

            text:
            "AI dapat membantu mahasiswa mencari informasi, memahami konsep, membuat ide, dan mendukung proses pembelajaran."

        },



        {
            icon:"⚖️",

            title:"Etika Penggunaan AI",

            text:
            "Penggunaan AI harus memperhatikan transparansi, verifikasi informasi, menghindari plagiarisme, dan menjaga privasi."

        },



        {
            icon:"⚠️",

            title:"Tantangan dan Risiko AI",

            text:
            "AI memiliki risiko seperti informasi yang salah, ketergantungan teknologi, dan penyalahgunaan data."

        }


    ];



    return(


        <section className="materi-page">

            <div className="page-intro">
                <p className="badge">Materi</p>
                <h1>Materi Pembelajaran</h1>
                <p>Pelajari konsep Artificial Intelligence dan cara menggunakannya secara etis.</p>
            </div>



            <div className="materi-video">
                <h2>Video Pembelajaran</h2>
                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="420"
                        src="https://www.youtube.com/embed/_FcHPrRY5zg"
                        title="Video Pembelajaran AI"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="materi-container">



            {


                materials.map((item,index)=>(


                    <div 
                    className="materi-card" 
                    key={index}
                    >



                        <div className="materi-icon">

                            {item.icon}

                        </div>




                        <h2>

                            {item.title}

                        </h2>




                        <p>

                            {item.text}

                        </p>





                        <Link to={`/materi/${index}`}>



                            <button>

                                Pelajari

                            </button>



                        </Link>



                    </div>


                ))



            }



            </div>



        </section>



    )


}



export default Materi;