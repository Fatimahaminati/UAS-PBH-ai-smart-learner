import { useState } from "react";

function Evaluasi(){
    const questions = [
        { question: "Apa kepanjangan dari AI?", options: ["Artificial Intelligence", "Automatic Internet", "Artificial Input", "Advanced Information"], answer:"Artificial Intelligence", reason:"AI adalah singkatan dari Artificial Intelligence atau kecerdasan buatan." },
        { question: "AI merupakan teknologi yang membuat komputer mampu?", options: ["Berjalan tanpa listrik", "Melakukan tugas yang membutuhkan kecerdasan manusia", "Menjadi manusia", "Menggantikan semua pekerjaan"], answer:"Melakukan tugas yang membutuhkan kecerdasan manusia", reason:"AI dibuat untuk membantu melakukan tugas seperti memahami data, mengenali pola, dan mengambil keputusan." },
        { question: "Contoh penggunaan AI dalam pendidikan adalah?", options: ["Membantu memahami materi", "Menghapus proses belajar", "Menggantikan mahasiswa", "Menghilangkan guru"], answer:"Membantu memahami materi", reason:"AI berfungsi sebagai alat bantu belajar, bukan menggantikan proses pembelajaran." },
        { question: "ChatGPT merupakan contoh teknologi?", options: ["Database", "Artificial Intelligence", "Hardware", "Jaringan komputer"], answer:"Artificial Intelligence", reason:"ChatGPT menggunakan teknologi AI untuk memahami dan menghasilkan teks." },
        { question: "Salah satu manfaat AI bagi mahasiswa adalah?", options: ["Membantu mencari informasi", "Mengurangi kreativitas", "Menghapus tugas belajar", "Membuat mahasiswa tidak berpikir"], answer:"Membantu mencari informasi", reason:"AI dapat membantu mencari ide dan memahami materi lebih cepat." },
        { question: "Dalam menggunakan AI, pengguna harus memperhatikan?", options: ["Etika penggunaan", "Selalu percaya semua jawaban", "Tidak perlu mengecek informasi", "Menghindari teknologi"], answer:"Etika penggunaan", reason:"Penggunaan AI harus bertanggung jawab dan tetap melakukan verifikasi informasi." },
        { question: "Risiko penggunaan AI yang tidak tepat adalah?", options: ["Informasi salah", "Belajar lebih mudah", "Mendapat ide", "Membantu pekerjaan"], answer:"Informasi salah", reason:"AI dapat memberikan informasi yang tidak akurat sehingga perlu diperiksa kembali." },
        { question: "AI bekerja berdasarkan data yang disebut?", options: ["Dataset", "Keyboard", "Monitor", "Internet saja"], answer:"Dataset", reason:"AI belajar dari kumpulan data yang disebut dataset." },
        { question: "AI sebaiknya digunakan sebagai?", options: ["Pengganti manusia sepenuhnya", "Alat bantu belajar", "Penghapus kreativitas", "Pengganti berpikir"], answer:"Alat bantu belajar", reason:"AI membantu manusia, bukan menggantikan kemampuan berpikir manusia." },
        { question: "Mengapa informasi dari AI perlu diperiksa kembali?", options: ["Karena AI bisa memberikan informasi yang kurang tepat", "Karena AI tidak berguna", "Karena AI selalu salah", "Karena AI tidak menggunakan data"], answer:"Karena AI bisa memberikan informasi yang kurang tepat", reason:"AI tetap dapat menghasilkan kesalahan sehingga informasi perlu diverifikasi." }
    ];

    const [submitted, setSubmitted] = useState(false);
    const [answers, setAnswers] = useState({});

    const choose = (index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    const submit = () => {
        setSubmitted(true);
    };

    let benar = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.answer) {
            benar++;
        }
    });

    return (
        <section className="evaluasi-page">
            <div className="evaluasi-header">
                <div>
                    <p className="badge">Evaluasi AI</p>
                    <h1>Evaluasi Pembelajaran AI</h1>
                    <p>Uji pemahaman kamu dengan menjawab soal berikut secara fokus dan teliti.</p>
                </div>
            </div>

            <div className="quiz-box">
                {questions.map((q, index) => {
                    const selectedAnswer = answers[index];
                    return (
                        <div className="question" key={index}>
                            <h3>{index + 1}. {q.question}</h3>
                            <div className="options">
                                {q.options.map(option => {
                                    let className = "option";
                                    const correct = option === q.answer;
                                    const selected = selectedAnswer === option;

                                    if (submitted) {
                                        if (correct) {
                                            className += " correct";
                                        } else if (selected) {
                                            className += " wrong";
                                        }
                                    }

                                    return (
                                        <label key={option} className={className}>
                                            <input
                                                type="radio"
                                                name={`q${index}`}
                                                disabled={submitted}
                                                checked={selected}
                                                onChange={() => choose(index, option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    );
                                })}
                            </div>

                            {submitted && (
                                <div className="feedback-block">
                                    <p className={selectedAnswer === q.answer ? "good" : "bad"}>
                                        {selectedAnswer === q.answer ? "✅ Jawaban benar" : "❌ Jawaban salah"}
                                    </p>
                                    {selectedAnswer !== q.answer && (
                                        <p className="reason">💡 {q.reason}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}

                <button className="primary-btn quiz-submit" onClick={submit}>Submit Jawaban</button>

                {submitted && (
                    <h2 className="score">Nilai: {Math.round((benar / questions.length) * 100)}</h2>
                )}
            </div>
        </section>
    );
}

export default Evaluasi;
