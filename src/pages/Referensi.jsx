function Referensi(){
    const references = [
        {
            icon: "💻",
            title: "Website",
            description: "Sumber website yang menjelaskan AI, etika AI, dan peran AI dalam pendidikan.",
            links: [
                "https://www.ruangguru.com/blog/apa-itu-artificial-intelligence",
                "https://itb.ac.id/berita/ai-dalam-pendidikan-revolusi-pembelajaran-menuju-masa-depan-yang-lebih-cerdas/61183",
                "https://www.ibm.com/id-id/think/topics/ai-ethics",
                "https://bif-pwt.telkomuniversity.ac.id/etika-ai-kenapa-harus-ada-etika-ai/",
                "https://komunikasi.untag-sby.ac.id/web/beritadetail/etika-penggunaan-ai-dalam-komunikasi-di-era-digital.html",
                "https://upy.ac.id/berita/tantangan-terbesar-dunia-pendidikan-di-era-teknologi-dan-perkembangan-ai/"
            ]
        },
        {
            icon: "📰",
            title: "Artikel",
            description: "Artikel akademik dan makalah yang membahas tantangan serta risiko AI dalam pendidikan.",
            links: [
                "https://www.researchgate.net/publication/397195723_Tantangan_dan_resiko_penggunaan_AI_dalam_pendidikan",
                "https://www.academia.edu/download/108650100/731-Article_Text-7664-1-10-20230515.pdf",
                "https://pdfs.semanticscholar.org/ef91/13d81728e3413bf035a6d8782be651f244f3.pdf"
            ]
        },
        {
            icon: "🎥",
            title: "Video",
            description: "Video yang memberikan penjelasan visual tentang AI dan penerapannya di dunia pendidikan.",
            links: [
                "https://youtu.be/_FcHPrRY5zg?si=NkBM5EBCB5adHo6n",
                "https://youtu.be/55gCluJNVEw?si=C6meX6zR8j4By4kV"
            ]
        }
    ];

    return (
        <section className="referensi-page">
            <div className="page-intro">
                <p className="badge">Referensi</p>
                <h1>Referensi Pembelajaran</h1>
                <p>Sumber belajar yang digunakan untuk mendukung materi dan aktivitas di aplikasi ini.</p>
            </div>

            <div className="referensi-list">
                {references.map((item, index) => (
                    <article className="referensi-card" key={index}>
                        <div className="referensi-card-header">
                            <div className="referensi-icon">{item.icon}</div>
                            <div>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                        <ul>
                            {item.links.map((url, linkIndex) => (
                                <li key={linkIndex}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Referensi;
