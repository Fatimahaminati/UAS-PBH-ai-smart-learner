import { useParams, Link } from "react-router-dom";


function DetailMateri(){


    const {id} = useParams();



    const detail = [


        {

            icon:"🤖",

            category:"Dasar AI",

            title:"Mengenal Artificial Intelligence",

            content:
            "Artificial Intelligence adalah teknologi yang memungkinkan mesin atau komputer untuk meniru kemampuan kognitif manusia. AI atau kecerdasan buatan adalah sistem yang dapat memahami, belajar, dan berpikir layaknya manusia dalam beberapa aspek, seperti mengenali pola, membuat prediksi, dan menyelesaikan masalah kompleks.",


            example:
            "Contoh penerapan AI dalam kehidupan sehari-hari adalah ChatGPT, asisten virtual, sistem rekomendasi YouTube, dan teknologi pengenalan wajah."

        },



        {


            icon:"🎓",

            category:"Pendidikan",

            title:"AI dalam Dunia Pendidikan",

            content:
            "AI dapat membantu proses pembelajaran dengan memberikan dukungan dalam mencari informasi, memahami konsep, membuat ide, dan meningkatkan efektivitas belajar.",


            example:
            "Mahasiswa dapat menggunakan AI untuk meminta penjelasan materi sulit dengan bahasa yang lebih sederhana."

        },



        {


            icon:"⚖️",

            category:"Etika",

            title:"Etika Penggunaan AI",

            content:
            "Penggunaan AI harus dilakukan secara bertanggung jawab dengan memperhatikan transparansi, kebenaran informasi, privasi, dan menghindari ketergantungan."


            ,

            example:
            "AI digunakan sebagai alat bantu belajar, bukan menggantikan proses berpikir dan kreativitas manusia."

        },



        {


            icon:"⚠️",

            category:"Tantangan",

            title:"Tantangan dan Risiko AI",

            content:
            "AI memiliki beberapa risiko seperti informasi yang tidak akurat, penyalahgunaan teknologi, dan masalah keamanan data."


            ,

            example:
            "Pengguna perlu melakukan pengecekan ulang terhadap jawaban AI sebelum menggunakannya."

        }


    ];



    const materi = detail[id];



    return(


        <section className="detail-page">


            <div className="detail-card">



                <div className="detail-icon">

                    {materi.icon}

                </div>




                <span className="detail-badge">

                    {materi.category}

                </span>




                <h1>

                    {materi.title}

                </h1>





                <p className="detail-text">

                    {materi.content}

                </p>





                <div className="example-box">


                    <h3>

                        💡 Contoh Penerapan

                    </h3>



                    <p>

                        {materi.example}

                    </p>



                </div>





                <Link to="/materi">


                    <button className="back-btn">

                        ← Kembali ke Materi

                    </button>



                </Link>



            </div>


        </section>


    )


}


export default DetailMateri;