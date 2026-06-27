function Tentang(){
    const cards = [
        { icon: "🤖", title: "Apa itu AI?", text: "Artificial Intelligence (AI) atau kecerdasan buatan adalah teknologi yang memungkinkan komputer dan sistem digital melakukan tugas yang biasanya membutuhkan kecerdasan manusia seperti memahami informasi, mengenali pola, dan mengambil keputusan." },
        { icon: "💡", title: "Manfaat AI", text: "AI membantu proses pembelajaran, mencari informasi, mengolah data, dan mendukung ide kreatif di dunia pendidikan." },
        { icon: "⚖️", title: "Etika Penggunaan AI", text: "Gunakan AI sebagai alat bantu, periksa sumber informasi, dan selalu terapkan berpikir kritis dalam setiap hasil yang dihasilkan." }
    ];

    return (
        <section className="tentang-page">
            <div className="page-intro">
                <p className="badge">Tentang</p>
                <h1>Tentang Artificial Intelligence</h1>
                <p className="subtitle">Memahami konsep dasar, manfaat, dan penggunaan AI secara bijak.</p>
            </div>

            <div className="tentang-container">
                {cards.map((item, index) => (
                    <article className="tentang-card" key={index}>
                        <div className="tentang-icon">{item.icon}</div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </article>
                ))}
            </div>

            <div className="quote-box">
                <h2>"AI bukan menggantikan manusia, tetapi membantu manusia berkembang."</h2>
            </div>
        </section>
    );
}

export default Tentang;
