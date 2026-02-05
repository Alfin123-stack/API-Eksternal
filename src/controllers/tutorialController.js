const dummyTutorials = {
  4721: {
    id: 4721,
    content: `
      <h2>Pengenalan React</h2>

      <p>
        React adalah library JavaScript yang digunakan untuk membangun antarmuka
        pengguna berbasis komponen. React mempermudah pengelolaan state dan
        pembaruan tampilan secara efisien.
      </p>

      <p>
        Komponen dalam React dapat berupa function component maupun class
        component. Pada pengembangan modern, function component dengan Hooks
        lebih direkomendasikan.
      </p>

      <p>
        Virtual DOM memungkinkan React membandingkan perubahan UI secara cepat
        sebelum memperbarui DOM asli.
      </p>

      <p>
        React banyak digunakan dalam pengembangan aplikasi web modern karena
        fleksibilitas dan ekosistemnya yang luas.
      </p>
    `,
  },

  8392: {
    id: 8392,
    content: `
      <h2>State dan Props pada React</h2>

      <p>
        State digunakan untuk menyimpan data dinamis dalam sebuah komponen.
        Perubahan state akan menyebabkan komponen di-render ulang.
      </p>

      <p>
        Props digunakan untuk mengirim data dari parent component ke child
        component. Props bersifat read-only.
      </p>

      <p>
        Pemahaman state dan props sangat penting untuk membangun aplikasi React
        yang terstruktur dengan baik.
      </p>
    `,
  },

  6158: {
    id: 6158,
    content: `
      <h2>Dasar Node.js</h2>

      <p>
        Node.js adalah runtime JavaScript yang berjalan di sisi server dan
        memungkinkan JavaScript digunakan untuk backend development.
      </p>

      <p>
        Node.js bersifat asynchronous dan non-blocking, sehingga mampu menangani
        banyak request secara bersamaan.
      </p>

      <p>
        Event loop adalah inti dari arsitektur Node.js dalam menangani proses
        asynchronous.
      </p>
    `,
  },

  9043: {
    id: 9043,
    content: `
      <h2>REST API dengan Express</h2>

      <p>
        Express.js adalah framework Node.js yang digunakan untuk membangun REST
        API dengan cepat dan fleksibel.
      </p>

      <p>
        REST API menggunakan HTTP method seperti GET, POST, PUT, dan DELETE
        untuk melakukan operasi data.
      </p>

      <p>
        Struktur REST API yang baik memudahkan integrasi antara frontend dan
        backend.
      </p>
    `,
  },

  2874: {
    id: 2874,
    content: `
      <h2>Pengantar Artificial Intelligence</h2>

      <p>
        Artificial Intelligence adalah bidang ilmu komputer yang berfokus pada
        pembuatan sistem yang dapat meniru kecerdasan manusia.
      </p>

      <p>
        AI digunakan dalam berbagai bidang seperti rekomendasi, chatbot, dan
        analisis data.
      </p>

      <p>
        Pemahaman dasar AI penting dalam pengembangan aplikasi modern.
      </p>
    `,
  },

  5619: {
    id: 5619,
    content: `
      <h2>Machine Learning Dasar</h2>

      <p>
        Machine learning memungkinkan sistem belajar dari data tanpa diprogram
        secara eksplisit.
      </p>

      <p>
        Model machine learning dilatih menggunakan dataset untuk mengenali pola
        dan membuat prediksi.
      </p>

      <p>
        Machine learning banyak digunakan dalam sistem rekomendasi dan analisis
        prediktif.
      </p>
    `,
  },

  7486: {
    id: 7486,
    content: `
      <h2>Integrasi AI pada Aplikasi Web</h2>

      <p>
        AI dapat diintegrasikan ke dalam aplikasi web untuk meningkatkan
        pengalaman pengguna.
      </p>

      <p>
        Integrasi AI biasanya dilakukan melalui backend service atau external
        API.
      </p>

      <p>
        Contoh penerapan AI adalah quiz generator, rekomendasi konten, dan
        chatbot interaktif.
      </p>
    `,
  },
};

export const getTutorialById = async (req, res, next) => {
  try {
    const { tutorialId } = req.params;

    // Validasi basic
    if (!tutorialId || !/^\d+$/.test(tutorialId)) {
      const error = new Error("Invalid tutorialId parameter");
      error.status = 400;
      throw error;
    }

    const tutorial = dummyTutorials[tutorialId];

    if (!tutorial) {
      const error = new Error("Tutorial not found");
      error.status = 404;
      throw error;
    }

    return res.status(200).json({
      status: "success",
      data: {
        id: tutorialId,
        content: tutorial.content,
      },
    });
  } catch (err) {
    next(err);
  }
};
