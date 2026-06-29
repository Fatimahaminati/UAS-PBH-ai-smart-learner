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
            "Kecerdasan Buatan (Artificial Intelligence/AI) telah merevolusi dunia pendidikan dengan menghadirkan berbagai inovasi yang mendukung proses belajar mengajar. AI memungkinkan terciptanya pembelajaran yang dipersonalisasi sesuai dengan kemampuan, minat, dan kecepatan belajar setiap siswa, sehingga proses pembelajaran menjadi lebih efektif dan adaptif. Selain itu, siswa dapat memanfaatkan asisten AI untuk memperoleh penjelasan ulang terhadap materi yang belum dipahami kapan saja, sehingga mendukung pembelajaran mandiri. Di sisi lain, AI juga meningkatkan efisiensi kerja pendidik melalui penilaian otomatis terhadap tugas, kuis, maupun ujian, serta membantu menganalisis perkembangan akademik siswa untuk mengidentifikasi peserta didik yang memerlukan perhatian lebih awal. Dalam penyusunan materi pembelajaran, AI berperan sebagai asisten guru dengan membantu menyusun rencana pelaksanaan pembelajaran (RPP), membuat soal evaluasi, serta memberikan ide-ide kreatif dalam proses pembelajaran. Selain itu, AI turut meningkatkan aksesibilitas dan pemerataan pendidikan melalui fitur penerjemah, transkripsi otomatis bagi siswa penyandang disabilitas, serta penyediaan platform pembelajaran berbasis AI yang dapat dimanfaatkan oleh siswa di daerah terpencil atau sekolah yang memiliki keterbatasan tenaga pengajar. Dengan berbagai peran tersebut, AI menjadikan sistem pendidikan lebih efisien, inklusif, dan mampu memenuhi kebutuhan belajar setiap individu.",


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