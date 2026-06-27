function WhyAI(){


    const reasons = [

        {
            icon:"🤖",
            title:"AI bukan pengganti manusia",
            text:"AI adalah alat bantu untuk meningkatkan kreativitas dan produktivitas."
        },


        {
            icon:"💡",
            title:"Gunakan dengan tanggung jawab",
            text:"Gunakan AI untuk membantu proses belajar secara bijak."
        },


        {
            icon:"🔒",
            title:"Lindungi data dan privasi",
            text:"Jangan memasukkan informasi pribadi ke dalam sistem AI."
        },


        {
            icon:"🚀",
            title:"Persiapkan masa depan",
            text:"Pemahaman AI menjadi kemampuan penting di era digital."
        }

    ];



    return(


        <section className="why">


            <h2>
                Kenapa Harus Belajar AI Secara Etis?
            </h2>



            <div className="why-box">


            {

                reasons.map((item,index)=>(


                    <div key={index}>


                        <h3>
                            {item.icon}
                        </h3>


                        <h4>
                            {item.title}
                        </h4>


                        <p>
                            {item.text}
                        </p>


                    </div>


                ))

            }



            </div>



        </section>


    )


}



export default WhyAI;