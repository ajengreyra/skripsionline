'use client';

// pages/page.js
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Skripsi Online</title>
        <meta name="description" content="Skripsi Online dengan Sticky Heading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar">
        <h1>Skripsi Online</h1>
      </header>

      <main className="main-content">
        <div className="content">
          <section className="section">
            <h2 className="sticky-heading">Bab 1 - Pendahuluan</h2>
            <p>
              Pada bab ini, penulis akan menjelaskan latar belakang penelitian yang melatarbelakangi
              topik ini. Penelitian ini bertujuan untuk mengetahui sejauh mana penggunaan teknologi
              informasi dalam dunia pendidikan, terutama di Indonesia.
            </p>
            <p>
              <strong>Rumusan Masalah:</strong> Bagaimana pengaruh teknologi informasi terhadap kualitas
              pendidikan di Indonesia? Apa saja tantangan dan peluang yang dihadapi oleh sekolah-sekolah dalam
              mengimplementasikan teknologi ini?
            </p>
            <p>
              <strong>Tujuan Penelitian:</strong> Mengetahui dampak teknologi informasi pada pendidikan, serta
              untuk memberikan rekomendasi kepada pihak terkait.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 2 - Tinjauan Pustaka</h2>
            <p>
              Bab ini akan mengulas berbagai penelitian dan teori yang relevan dengan topik yang dibahas dalam
              skripsi ini. Beberapa sumber yang digunakan adalah jurnal, buku, dan artikel terkait yang membahas
              tentang penggunaan teknologi dalam pendidikan, baik di tingkat global maupun lokal.
            </p>
            <p>
              Beberapa penelitian yang relevan menyatakan bahwa teknologi informasi dapat memperbaiki akses ke
              materi pembelajaran dan memberikan fleksibilitas kepada siswa. Namun, ada tantangan seperti kurangnya
              infrastruktur dan kesenjangan antara daerah perkotaan dan pedesaan.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 3 - Metodologi Penelitian</h2>
            <p>
              Pada bab ini, dijelaskan tentang bagaimana metode penelitian yang digunakan dalam skripsi ini.
              Penelitian ini menggunakan metode kuantitatif dengan pendekatan survei untuk mendapatkan data
              yang relevan dengan topik penelitian.
            </p>
            <p>
              <strong>Populasi dan Sampel:</strong> Populasi penelitian ini adalah seluruh sekolah dasar dan menengah
              yang ada di wilayah Jakarta. Sampel yang diambil adalah 5 sekolah yang telah mengimplementasikan
              teknologi dalam proses pembelajaran mereka.
            </p>
            <p>
              <strong>Instrumen Penelitian:</strong> Instrumen yang digunakan adalah kuesioner yang disebarkan kepada
              guru dan siswa untuk mengukur efektivitas penggunaan teknologi dalam pembelajaran.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 4 - Hasil dan Pembahasan</h2>
            <p>
              Bab ini menyajikan hasil dari penelitian yang telah dilakukan, serta analisis terhadap data yang
              diperoleh. Berdasarkan data yang dikumpulkan, dapat disimpulkan bahwa teknologi informasi memberikan
              dampak positif terhadap proses pembelajaran di sekolah yang dijadikan sampel.
            </p>
            <p>
              Namun, terdapat beberapa hambatan yang perlu diperbaiki, seperti keterbatasan akses internet di beberapa
              daerah dan kurangnya pelatihan bagi guru dalam menggunakan teknologi tersebut secara optimal.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 5 - Kesimpulan</h2>
            <p>
              Berdasarkan hasil penelitian, dapat disimpulkan bahwa teknologi informasi memiliki potensi besar untuk
              meningkatkan kualitas pendidikan di Indonesia. Meskipun demikian, masih terdapat tantangan yang perlu
              diatasi agar teknologi ini dapat diimplementasikan dengan lebih efektif dan merata.
            </p>
            <p>
              <strong>Rekomendasi:</strong> Pemerintah perlu meningkatkan infrastruktur teknologi di daerah-daerah
              yang belum terjangkau, serta memberikan pelatihan lebih lanjut bagi tenaga pendidik untuk memaksimalkan
              pemanfaatan teknologi dalam pembelajaran.
            </p>
          </section>
        </div>
      </main>

      <style jsx>{`
        .navbar {
          background-color: #f8b8d0; /* Warna pink pastel */
          padding: 20px;
          color: white;
          text-align: center;
        }

        .main-content {
          padding: 20px;
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
        }

        .section {
          margin-bottom: 40px;
        }

        .sticky-heading {
          position: -webkit-sticky;
          position: sticky;
          top: 60px; /* distance from top of screen */
          background-color: #fff;
          padding: 10px 0;
          font-size: 24px;
          font-weight: bold;
          z-index: 10;
          border-bottom: 2px solid #ddd;
        }
      `}</style>
    </>
  );
};

export default Page;

