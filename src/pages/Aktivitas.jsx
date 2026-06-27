import { useState } from "react";


function Aktivitas(){


    const [show,setShow] = useState(false);

    const [answer,setAnswer] = useState("");



    return(


        <section className="aktivitas-page">



            <h1>

                Aktivitas Pembelajaran AI

            </h1>


            <p>

                Uji pemahaman kamu tentang penggunaan Artificial Intelligence.

            </p>





            <div className="flashcard"



            onClick={()=>setShow(!show)}



            >


                {

                show ?


                <>

                <h2>

                Jawaban

                </h2>


                <p>

                Artificial Intelligence adalah teknologi
                yang membuat komputer dapat melakukan
                tugas yang membutuhkan kecerdasan manusia.

                </p>


                </>


                :


                <h2>

                Apa itu Artificial Intelligence?

                </h2>


                }



            </div>







            <div className="case-box">


                <h2>

                Studi Kasus

                </h2>


                <p>


                Seorang mahasiswa menggunakan AI
                untuk membuat seluruh tugas tanpa memahami isi.

                Apakah tindakan tersebut benar?


                </p>





                <button

                onClick={()=>setAnswer("Kurang tepat, AI sebaiknya digunakan sebagai alat bantu belajar.")}

                >

                Benar


                </button>




                <button

                onClick={()=>setAnswer("Tepat, penggunaan AI harus tetap disertai proses berpikir.")}

                >

                Salah


                </button>





                <p className="feedback">


                    {answer}


                </p>



            </div>




        </section>



    )


}


export default Aktivitas;