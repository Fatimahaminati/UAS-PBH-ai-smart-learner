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
            `Etika Kecerdasan Buatan (Artificial Intelligence/AI) merupakan seperangkat prinsip dan pedoman yang mengatur pengembangan serta penggunaan AI agar dilakukan secara adil, transparan, bertanggung jawab, dan tidak merugikan manusia. Penerapan etika AI bertujuan untuk mencegah bias, melindungi privasi pengguna, serta memastikan bahwa teknologi dimanfaatkan secara bertanggung jawab dan menghormati hak asasi manusia. Berikut merupakan prinsip-prinsip utama etika AI.

1. Transparansi
Sistem AI harus bekerja secara terbuka sehingga pengguna dapat mengetahui bagaimana AI menghasilkan suatu keputusan dan dari mana sumber data yang digunakan.

2. Keadilan dan Inklusi
AI harus dirancang untuk meminimalkan bias sehingga tidak memberikan perlakuan yang berbeda atau mendiskriminasi kelompok tertentu.

3. Privasi dan Keamanan Data
Data pengguna harus dikelola secara aman, sesuai dengan peraturan yang berlaku, serta terlindungi dari penyalahgunaan atau kebocoran.

4. Akuntabilitas
Harus terdapat pihak yang bertanggung jawab atas keputusan atau dampak yang dihasilkan oleh sistem AI.

5. Tidak Merugikan (Do No Harm)
AI tidak boleh digunakan untuk menyebarkan informasi palsu, menghasilkan konten manipulatif seperti deepfake, maupun melakukan tindakan yang dapat merugikan individu atau masyarakat.

Selanjutnya, agar AI dapat dimanfaatkan secara bertanggung jawab, pengguna perlu menerapkan etika AI dalam kehidupan sehari-hari melalui beberapa praktik berikut.

1. Bersikap Jujur dan Transparan
Sampaikan jika suatu tugas, karya, atau kode program dibuat dengan bantuan AI.

2. Menghindari Plagiarisme
Gunakan AI sebagai alat bantu untuk mencari ide atau memahami materi, bukan sebagai pengganti hasil pemikiran sendiri.

3. Melindungi Data Pribadi
Jangan memasukkan informasi yang bersifat rahasia, seperti kata sandi, nomor rekening, atau data pribadi lainnya, ke dalam platform AI.

4. Memverifikasi Informasi
Selalu periksa kembali informasi yang diberikan AI karena hasil yang dihasilkan belum tentu sepenuhnya benar atau sesuai dengan fakta.`,

            example:
            "Seorang mahasiswa menggunakan AI untuk membantu menyusun kerangka makalah. Namun, isi makalah tetap ditulis menggunakan pemikirannya sendiri dan setiap informasi yang diperoleh dari AI diperiksa kembali melalui buku dan jurnal ilmiah. Mahasiswa tersebut juga tidak memasukkan data pribadi atau informasi rahasia ke dalam platform AI."

        },



        {


            icon:"⚠️",

            category:"Tantangan",

            title:"Tantangan dan Risiko AI",

            content:
            `Integrasi Kecerdasan Buatan (Artificial Intelligence/AI) dalam dunia pendidikan memberikan banyak manfaat, tetapi juga menghadirkan berbagai tantangan yang perlu diperhatikan. Penggunaan AI yang tidak tepat dapat memengaruhi proses belajar, kemampuan berpikir siswa, keamanan data, hingga pemerataan akses terhadap teknologi. Oleh karena itu, pendidik dan peserta didik perlu memahami tantangan-tantangan tersebut agar AI dapat dimanfaatkan secara bijaksana dan bertanggung jawab.

1. Menurunnya Kemampuan Berpikir Kritis
Ketergantungan pada jawaban instan dari AI dapat membuat peserta didik lebih berfokus pada hasil akhir daripada memahami proses belajar. Kondisi ini berpotensi mengurangi kemampuan berpikir kritis, menganalisis masalah, dan menemukan solusi secara mandiri.

2. Risiko Plagiarisme dan Hilangnya Orisinalitas
Penggunaan AI tanpa disertai pemahaman dapat mendorong kebiasaan menyalin hasil yang diberikan AI tanpa melakukan pengembangan. Akibatnya, kemampuan menulis, berpikir kreatif, dan menghasilkan karya orisinal menjadi berkurang.

3. Keterbatasan Akurasi Informasi
Informasi yang dihasilkan AI tidak selalu benar atau sesuai dengan fakta. AI juga dapat menghasilkan informasi yang kurang akurat atau mengandung bias sehingga pengguna perlu memverifikasi kembali informasi dari sumber yang tepercaya.

4. Privasi dan Keamanan Data
Sebagian besar platform AI mengumpulkan data pengguna untuk meningkatkan kualitas layanan. Oleh karena itu, pengguna harus berhati-hati dalam membagikan data pribadi agar terhindar dari penyalahgunaan atau kebocoran informasi.

5. Kurangnya Aspek Empati
AI mampu memberikan informasi dan membantu menyelesaikan tugas, tetapi tidak memiliki empati, nilai moral, maupun kemampuan memahami kondisi emosional seseorang. Oleh sebab itu, peran guru tetap penting dalam membimbing, memotivasi, dan membentuk karakter peserta didik.

6. Kesenjangan Akses Teknologi
Tidak semua sekolah atau peserta didik memiliki akses terhadap perangkat, internet, dan literasi digital yang memadai. Kondisi ini dapat menyebabkan kesenjangan dalam pemanfaatan AI di dunia pendidikan.

AI sebaiknya dimanfaatkan sebagai alat bantu pembelajaran yang mendukung proses belajar, bukan sebagai pengganti kemampuan berpikir, kreativitas, maupun peran guru. Dengan penggunaan yang tepat dan bertanggung jawab, AI dapat menjadi mitra yang membantu meningkatkan kualitas pembelajaran tanpa menghilangkan esensi pendidikan.`,

            example:
            "Seorang siswa selalu menggunakan AI untuk menjawab seluruh tugas sekolah tanpa mempelajari materi terlebih dahulu. Akibatnya, ketika mengikuti ujian yang tidak memperbolehkan penggunaan AI, siswa mengalami kesulitan karena kurang memahami konsep dasar. Hal ini menunjukkan bahwa AI sebaiknya digunakan sebagai alat bantu belajar, bukan sebagai pengganti proses berpikir."

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





                <p className="detail-text" style={{ whiteSpace: "pre-line", textAlign: "justify" }}>

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