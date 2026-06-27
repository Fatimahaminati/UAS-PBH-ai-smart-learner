function Goals(){

    const goals = [
        {
            number:"01",
            text:"Memahami konsep dasar Artificial Intelligence"
        },

        {
            number:"02",
            text:"Menjelaskan manfaat AI dalam pembelajaran"
        },

        {
            number:"03",
            text:"Mengidentifikasi penggunaan AI yang etis"
        },

        {
            number:"04",
            text:"Menerapkan prinsip AI secara bertanggung jawab"
        }
    ];


    return(

        <section className="goals">


            <h2>
                Tujuan Pembelajaran
            </h2>



            <div className="goal-container">


            {
                goals.map((item,index)=>(


                    <div className="goal-card" key={index}>


                        <h3>
                            {item.number}
                        </h3>


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


export default Goals;