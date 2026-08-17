import { faGears, faGamepad, faFontAwesome, faScrewdriverWrench, faChartBar, faDatabase, faPenNib, faFilm, faLayerGroup, faCode, faBriefcase, faPalette, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faCss,  faHtml5, faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons';
import imagesData from "../imgImports";

const divisiData = [
    {
        id: 1,
        img: imagesData.cover_divisi_office,
        singkatan: "office",
        divisi: "Office",
        deskripsi: "Divisi Office merupakan divisi yang berfokus mempelajari aplikasi perkantoran dari Microsoft Office hingga Google Workspace.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Akuntansi <br>
            • Administrasi Bisnis <br>
            • Pariwisata <br>
            • Manajemen`,
        href: "/divisi/office",
        imgCover: imagesData.cover_divisi_office,
        accentColor: "#1576FF",
        deskripsiKegiatan: "Divisi Office pada pembelajaran aplikasi perkantoran yang sering digunakan dalam dunia akademik maupun dunia kerja. Anggota akan belajar menggunakan berbagai tools seperti Microsoft Word, Excel, PowerPoint, serta aplikasi berbasis cloud untuk membantu pekerjaan menjadi lebih mudah, rapi, dan efisien.",
        deskripsiMateri: "Berfokus pada pembelajaran fitur dan Microsoft Office serta Google Workspace untuk meningkatkan keterampilan digital di dunia perkantoran.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.office,
                altGambar: "Fungsionaris Office",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.office_dokumen1,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",
            },
            {
                id: 3,
                gambar: imagesData.office_dokumen2,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",
            },
            {
                id: 4,
                gambar: imagesData.office_dokumen3,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",
            },
            {
                id: 5,
                gambar: imagesData.office_dokumen4,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",
            },
        ],
        itemsMateri: [
            {
                icon: faMicrosoft,
                judul: "Microsoft Office",
                deskripsi: "Mempelajari penggunaan Microsoft Word, Excel, PowerPoint, dan Access, mulai dari fungsi dasar hingga fitur yang umum digunakan dalam kebutuhan perkantoran.",
            },
            {
                icon: faGoogle,
                judul: "Google Workspace",
                deskripsi: "Mempelajari penggunaan Google Docs, Google Sheets, dan Google Slides untuk membuat, mengelola, serta berkolaborasi dalam berbagai dokumen secara online.",
            },
        ],
        karya: [
            {
                gambar: imagesData.karya_office_dashboard,
                judul: "Project Dashboard Excel",
                deskripsi: "Membuat dashboard interaktif menggunakan Microsoft Excel untuk mengolah, memvisualisasikan, dan menyajikan data secara informatif. Project ini mencakup dashboard Inventory, Sales, dan Production yang membantu pengguna memahami data dan memantau informasi secara lebih efektif.",
                tag: "Microsoft Excel",
            },
            {
                gambar: imagesData.karya_office_access,
                judul: "Project Access: Report Data Kursus",
                deskripsi: "Project berupa pembuatan report data kursus menggunakan Microsoft Access untuk mengelola dan menyajikan informasi data kursus secara terstruktur, sehingga data dapat lebih mudah diakses, dipantau, dan digunakan untuk kebutuhan pelaporan.",
                tag: "Microsoft Access",
            },
        ],
        prospekKarir: [
            {
                icon: faBriefcase,
                judul: "Administrative Staff",
                deskripsi: "Kemampuan menggunakan Microsoft Office dan Google Workspace untuk mengelola dokumen, data, laporan, serta kebutuhan administrasi dapat menjadi dasar untuk berkarier sebagai Administrative Staff.",
            },
            {
                icon: faDatabase,
                judul: "Secretary",
                deskripsi: "Pengalaman mengelola dokumen, membuat laporan dan presentasi, serta menggunakan berbagai tools produktivitas dapat membantu dalam menjalankan tugas sebagai Secretary secara terorganisir.",
            },
            {
                icon: faChartBar,
                judul: "Data Analyst",
                deskripsi: "Kemampuan mengolah, menganalisis, dan memvisualisasikan data menggunakan Microsoft Excel, termasuk melalui project dashboard, dapat menjadi dasar untuk berkarier sebagai Data Analyst.",
            },
            {
                icon: faChartBar,
                judul: "Business Analyst",
                deskripsi: "Pengalaman mengolah data dan menyajikannya dalam bentuk dashboard dapat melatih kemampuan dalam memahami informasi dan mendukung proses analisis serta pengambilan keputusan bisnis.",
            },
            {
                icon: faDatabase,
                judul: "Reporting Staff",
                deskripsi: "Kemampuan mengolah data menggunakan Microsoft Excel serta menyusun dokumen dan presentasi menggunakan Microsoft Word dan PowerPoint dapat menjadi bekal dalam membuat laporan yang terstruktur dan informatif.",
            },
            {
                icon: faBriefcase,
                judul: "Office Support",
                deskripsi: "Penguasaan Microsoft Office dan Google Workspace dapat membantu dalam mendukung kegiatan operasional, pengelolaan dokumen, pengolahan data, serta kolaborasi digital di lingkungan kerja.",
            },
        ],
    },
    {
        id: 2,
        img: imagesData.cover_divisi_vcd, 
        singkatan: "vcd",
        divisi: "Visual Communication Design",
        deskripsi: "Divisi Visual Communication Design (VCD)  merupakan divisi yang berfokus  mempelajari design, editing foto dan membuat desain tampilan antarmuka aplikasi website yang menarik.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Administrasi Bisnis <br>
            • Bisnis Digital <br>
            • Multimedia <br>
            • DKV`,
        href: "/divisi/vcd",
        imgCover: imagesData.cover_divisi_vcd,
        accentColor: "#a855f7",
        deskripsiKegiatan: "Divisi ini berfokus pada pengembangan keterampilan desain visual menggunakan software desain populer, baik untuk kebutuhan kreatif maupun profesional. Di sini, anggota akan belajar mengolah gambar, mengatur komposisi, hingga membuat desain UI/UX yang siap digunakan untuk website atau aplikasi.",
        deskripsiMateri: "Berfokus pada editing foto dan pembuatan desain tampilan antarmuka aplikasi untuk mengembangkan kemampuan dalam menyampaikan ide melalui media visual.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.vcd,
                altGambar: "Fungsionaris Visual Communication Design",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.vcd_dokumen1,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
            {
                id: 3,
                gambar: imagesData.vcd_dokumen2,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Cominucation Design",
            },
            {
                id: 4,
                gambar: imagesData.vcd_dokumen3,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
            {
                id: 5,
                gambar: imagesData.vcd_dokumen4,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
        ],
        itemsMateri: [
            {
                icon: faFontAwesome,
                judul: "Affinity",
                deskripsi: "Mempelajari penggunaan Affinity untuk mengedit foto, membuat desain grafis, dan mengolah berbagai elemen visual untuk kebutuhan desain.",
            },
            {
                icon: faFigma,
                judul: "Figma",
                deskripsi: "FMempelajari penggunaan Figma untuk membuat desain antarmuka aplikasi, serta berkolaborasi dalam proses perancangan desain.",
            },
        ],
        karya: [
            {
                gambar: imagesData.karya_vcd_netstay,
                judul: "Project UI/UX",
                deskripsi: "Membuat desain UI/UX mobile apps menggunakan Figma untuk menghasilkan tampilan dan pengalaman pengguna yang intuitif. Project ini mencakup perancangan user interface, user flow, wireframe, dan prototype interaktif, dengan memperhatikan kebutuhan pengguna, struktur informasi, serta kemudahan dalam berinteraksi dengan aplikasi.",
                tag: "Figma",
                link: "https://www.figma.com/design/Ij9r5mHqjmquESVLV5msIy/Nestay?node-id=50-171&p=f&t=vb63oFzawwvU7Wlu-0",
            },
            {
                gambar: imagesData.karya_vcd_photoshop,
                judul: "Project Graphic Design",
                deskripsi: "Membuat desain grafis untuk kebutuhan komunikasi visual menggunakan berbagai prinsip desain. Project ini mencakup pembuatan poster dengan memperhatikan layout, typography, komposisi, warna, dan elemen visual, sehingga menghasilkan desain yang menarik, informatif, dan sesuai dengan tujuan komunikasi.",
                tag: "Graphic Design",
                link: "https://drive.google.com/drive/folders/1kldigBDGyQ2gTMnnduFBs9Usl5zxlweB?usp=drive_link",
            },
        ],
        prospekKarir: [
            {
                icon: faPenNib,
                judul: "UI/UX Designer",
                deskripsi: "Pengalaman merancang user interface dan user experience menggunakan Figma dapat membantu dalam membuat tampilan aplikasi yang menarik, intuitif, dan mudah digunakan.",
            },
            {
                icon: faChartBar,
                judul: "UX Researcher",
                deskripsi: "Pengalaman memahami kebutuhan pengguna dan merancang alur pemesanan dapat menjadi dasar untuk melakukan riset, menganalisis perilaku pengguna, serta menemukan solusi berdasarkan permasalahan yang ada.",
            },
            {
                icon: faPalette,
                judul: "Graphic Designer",
                deskripsi: "Pengalaman membuat poster dan mengolah elemen visual dapat membantu dalam membuat berbagai kebutuhan desain untuk media digital maupun cetak.",
            },
            {
                icon: faFilm,
                judul: "Social Media Designer",
                deskripsi: "Kemampuan membuat desain yang informatif dan menarik dapat diterapkan dalam pembuatan konten visual untuk berbagai platform media sosial.",
            },
            {
                icon: faBriefcase,
                judul: "Art Director",
                deskripsi: "Proses menentukan konsep, gaya visual, dan arah desain dapat menjadi bekal untuk mengarahkan dan menjaga konsistensi visual dalam sebuah proyek kreatif.",
            },
        ],
    },
    {
        id: 3,
        img: imagesData.cover_divisi_web, 
        singkatan: "web",
        divisi: "Web Development",
        deskripsi: "Divisi Web Development merupakan divisi yang berfokus mempelajari cara membuat atau mengembangkan tampilan suatu website dengan mark-up language.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Teknologi Informasi <br>
            • Teknik Elektro <br>
            • Web Developer <br>
            • Manajemen Informasi`,
        href: "/divisi/web",
        imgCover: imagesData.cover_divisi_web,
        accentColor: "#22c55e",
        deskripsiKegiatan: "Divisi Web Development merupakan divisi yang berfokus pada pembelajaran dan pengembangan keterampilan dalam membangun tampilan serta struktur website. Kegiatan dalam divisi ini mencakup pemahaman dasar HTML dan CSS, hingga penerapan framework modern untuk menciptakan website yang rapi, responsif, dan estetis. Divisi ini dirancang untuk memberikan bekal keterampilan yang relevan di era digital, sekaligus membuka peluang dalam dunia teknologi dan industri kreatif.",
        deskripsiMateri: "Berfokus pada pengembangan website, khususnya Front-End Development, dengan mempelajari cara merancang, membangun, dan mengembangkan tampilan antarmuka pengguna (UI).",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.web,
                altGambar: "Fungsionaris Web Development",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.web_dokumen1,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 3,
                gambar: imagesData.web_dokumen2,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 4,
                gambar: imagesData.web_dokumen3,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 5,
                gambar: imagesData.web_dokumen4,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
        ],
        itemsMateri: [
            {
                icon: faHtml5,
                judul: "HTML",
                deskripsi: "Mempelajari HTML sebagai dasar dalam membangun struktur halaman web, seperti menyusun teks, gambar, tautan, tombol, dan berbagai elemen yang terdapat pada sebuah website.",
            },
            {
                icon: faCss,
                judul: "CSS",
                deskripsi: "Mempelajari CSS untuk mengatur tampilan dan tata letak halaman web, seperti warna, ukuran, posisi, jarak, serta gaya visual dari berbagai elemen website.",
            },
            {
                icon: faScrewdriverWrench,
                judul: "Framework",
                deskripsi: "Mempelajari penggunaan framework CSS untuk mempermudah proses pengembangan tampilan website yang responsif dan terstruktur.",
            },
        ],
        karya: [
            {
                gambar: imagesData.karya_web_1,
                judul: "Latihan Dasar",
                deskripsi: "Pengenalan dasar coding menggunakan VS Code, mulai dari struktur HTML, styling CSS, hingga pembuatan form sederhana sebagai bekal sebelum masuk ke materi lanjutan.",
                tag: "HTML & CSS",
            },
            {
                gambar: imagesData.karya_web_2,
                judul: "Landing Page",
                deskripsi: "Pembuatan landing page sebagai hasil akhir rangkaian weekly training, dengan penerapan desain modern dan tampilan yang responsif.",
                tag: "HTML & CSS",
            },
            {
                gambar: imagesData.karya_web_3,
                judul: "Project Akhir / Website Tematik",
                deskripsi: "Pengembangan website utuh sesuai tema yang ditentukan panitia untuk masing-masing divisi, sebagai hasil akhir dari advanced training.",
                tag: "HTML, CSS & Framework",
            },
        ],
        prospekKarir: [
            {
                icon: faCode,
                judul: "Front-End Developer",
                deskripsi: "Membangun tampilan website yang interaktif dan responsif menggunakan teknologi web modern.",
            },
            {
                icon: faLayerGroup,
                judul: "Full-Stack Developer",
                deskripsi: "Mengembangkan aplikasi web secara menyeluruh mulai dari antarmuka hingga logika server.",
            },
            {
                icon: faRocket,
                judul: "Web Designer",
                deskripsi: "Merancang tampilan dan pengalaman website yang estetis dan fungsional untuk berbagai kebutuhan.",
            },
        ],
    },
    {
        id: 4,
        img: imagesData.cover_divisi_game, 
        singkatan: "game",
        divisi: "Game Development",
        deskripsi: "Mempelajari pembuatan game platformer 3D menggunakan Roblox Studio.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Pecinta E-Sports <br>
            • Game Developer <br>
            • Indie Developer <br>
            • Tech Enthusiast`,
        href: "/divisi/game",
        imgCover: imagesData.cover_divisi_game,
        accentColor: "#f59e0b",
        deskripsiKegiatan: "Divisi Game Development merupakan divisi yang berfokus pada pembuatan game platformer 3D menggunakan Roblox Studio serta menjadi wadah bagi anggota untuk mengembangkan minat dan keterampilan di bidang game development.",
        judulMateri: "Materi Ajar & Minggu Mabar",
        deskripsiMateri: "Berfokus pada pengembangan game menggunakan game engine untuk mengasah kemampuan anggota, serta menghadirkan Minggu Mabar sebagai sarana rekreasi dan mempererat keakraban.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.game,
                altGambar: "Fungsionaris Game Development",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.game_dokumen1,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 3,
                gambar: imagesData.game_dokumen2,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 4,
                gambar: imagesData.game_dokumen3,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 5,
                gambar: imagesData.game_dokumen4,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
        ],
        itemsMateri: [
            {
                icon: faGears,
                judul: "Roblox Studio",
                deskripsi: "Mempelajari penggunaan Roblox Studio untuk membuat dan mengembangkan game 3D, mulai dari membangun environment, mengatur objek, hingga menerapkan berbagai mekanisme dan interaksi dalam game.",
            },
            {
                icon: faGamepad,
                judul: "Minggu Mabar",
                deskripsi: "Sesi untuk melepas penat sekaligus mempererat kebersamaan antaranggota melalui berbagai permainan seperti MLBB, PUBG, dan Roblox. Selain itu, sesi ini juga menjadi wadah mengembangkan potensi anggota di bidang E-Sports.",
            },
        ],
        karya: [
            {
                gambar: imagesData.game_dokumen2,
                judul: "Game 3D di Roblox",
                deskripsi: "Pembuatan world dan game interaktif di platform Roblox Studio dengan scripting Lua dasar.",
                tag: "Roblox Studio",
            },
            {
                gambar: imagesData.game_dokumen3,
                judul: "Desain Level & Assets",
                deskripsi: "Perancangan level game dan pembuatan assets visual untuk mendukung pengembangan game.",
                tag: "Game Design",
            },
        ],
        prospekKarir: [
            {
                icon: faGamepad,
                judul: "Game Developer",
                deskripsi: "Kemampuan dalam membuat gameplay, mengembangkan sistem permainan, dan menyusun keseluruhan game dapat menjadi dasar untuk berkarier sebagai Game Developer.",
            },
            {
                icon: faGears,
                judul: "Roblox Developer",
                deskripsi: "Pengalaman menggunakan Roblox Studio dan scripting dapat membantu dalam membuat, mengembangkan, serta mengelola game dan berbagai fitur di platform Roblox.",
            },
            {
                icon: faPalette,
                judul: "Game Designer",
                deskripsi: "Proses menentukan konsep game, gameplay, mekanik, hingga tantangan yang akan dimainkan dapat melatih kemampuan dalam merancang pengalaman bermain yang menarik.",
            },
            {
                icon: faLayerGroup,
                judul: "Level Designer",
                deskripsi: "Pengalaman membuat map, menyusun area permainan, dan menempatkan berbagai obstacle dapat menjadi bekal untuk merancang level yang sesuai dengan konsep dan alur permainan.",
            },
            {
                icon: faCode,
                judul: "Gameplay Programmer",
                deskripsi: "Pembelajaran scripting dan pembuatan berbagai fitur dalam game dapat menjadi dasar untuk mengembangkan mekanik, interaksi, serta sistem yang digunakan dalam sebuah permainan.",
            },
        ],
    },
]


export default divisiData;
