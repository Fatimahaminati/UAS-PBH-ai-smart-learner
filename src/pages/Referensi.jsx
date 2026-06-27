function Referensi(){
    const items = [
        { icon: "📚", title: "Buku", text: "Referensi buku dan materi cetak tentang AI dan etika penggunaan teknologi." },
        { icon: "📰", title: "Artikel", text: "Artikel online yang menjelaskan konsep AI serta contoh penerapannya di dunia pendidikan." },
        { icon: "💻", title: "Website", text: "Website edukasi untuk mempelajari kecerdasan buatan secara etis dan bertanggung jawab." },
        { icon: "🎥", title: "Video", text: "Video pembelajaran yang membantu memperjelas materi AI dengan ilustrasi visual." }
    ];

    return (
        <section className="referensi-page">
            <div className="page-intro">
                <p className="badge">Referensi</p>
                <h1>Referensi Pembelajaran</h1>
                <p>Sumber belajar yang digunakan untuk mendukung materi dan aktivitas di aplikasi ini.</p>
            </div>

            <div className="referensi-container">
                {items.map((item, index) => (
                    <article className="referensi-card" key={index}>
                        <div className="referensi-icon">{item.icon}</div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Referensi;
