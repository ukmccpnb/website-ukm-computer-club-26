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
                gambar: imagesData.office_dokumen1,
                judul: "Laporan Keuangan Digital",
                deskripsi: "Pembuatan laporan keuangan interaktif menggunakan Microsoft Excel dengan visualisasi grafik dan dashboard.",
                tag: "Microsoft Excel",
            },
            {
                gambar: imagesData.office_dokumen2,
                judul: "Presentasi Bisnis",
                deskripsi: "Pembuatan presentasi profesional dengan template custom menggunakan Microsoft PowerPoint.",
                tag: "Microsoft PowerPoint",
            },
            {
                gambar: imagesData.office_dokumen3,
                judul: "Dokumen Kolaboratif",
                deskripsi: "Pengelolaan dokumen bersama menggunakan Google Workspace untuk efisiensi kerja tim.",
                tag: "Google Workspace",
            },
        ],
        prospekKarir: [
            {
                icon: faChartBar,
                judul: "Data Analyst",
                deskripsi: "Menganalisis data bisnis menggunakan spreadsheet dan tools visualisasi untuk menghasilkan insight yang berharga.",
            },
            {
                icon: faBriefcase,
                judul: "Administrative Staff",
                deskripsi: "Mengelola dokumen, membuat laporan, dan mengkoordinasikan pekerjaan kantor secara efisien.",
            },
            {
                icon: faDatabase,
                judul: "Office Manager",
                deskripsi: "Memimpin operasional kantor dan memastikan alur kerja berjalan efektif menggunakan tools digital.",
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
                gambar: imagesData.vcd_dokumen1,
                judul: "Desain Poster Event",
                deskripsi: "Pembuatan poster dan materi visual untuk acara IntechFest dengan identitas visual yang kuat.",
                tag: "Affinity Designer",
            },
            {
                gambar: imagesData.vcd_dokumen2,
                judul: "UI/UX Prototype",
                deskripsi: "Perancangan prototype antarmuka aplikasi mobile menggunakan Figma dengan prinsip user-centered design.",
                tag: "Figma",
            },
            {
                gambar: imagesData.vcd_dokumen3,
                judul: "Brand Identity",
                deskripsi: "Pengembangan identitas visual lengkap termasuk logo, palet warna, dan panduan brand untuk UKM Computer Club.",
                tag: "Affinity & Figma",
            },
        ],
        prospekKarir: [
            {
                icon: faPenNib,
                judul: "UI/UX Designer",
                deskripsi: "Merancang pengalaman dan antarmuka pengguna yang intuitif dan menarik untuk aplikasi digital.",
            },
            {
                icon: faPalette,
                judul: "Graphic Designer",
                deskripsi: "Membuat materi visual untuk kebutuhan branding, marketing, dan komunikasi perusahaan.",
            },
            {
                icon: faFilm,
                judul: "Content Creator",
                deskripsi: "Menghasilkan konten visual berkualitas tinggi untuk platform digital dan media sosial.",
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
                gambar: imagesData.web_dokumen1,
                judul: "Website UKM Computer Club",
                deskripsi: "Pengembangan website resmi UKM Computer Club menggunakan React.js dan Tailwind CSS yang responsif.",
                tag: "React.js",
            },
            {
                gambar: imagesData.web_dokumen2,
                judul: "Landing Page Event",
                deskripsi: "Pembuatan landing page untuk acara IntechFest dengan animasi modern dan desain yang menarik.",
                tag: "HTML & CSS",
            },
            {
                gambar: imagesData.web_dokumen3,
                judul: "Portfolio Website",
                deskripsi: "Pengembangan website portfolio anggota divisi sebagai hasil akhir pelatihan web development.",
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
        deskripsiMateri: "Berfokus pada pembuatan dan pengembangan game menggunakan game engine untuk mengembangkan kemampuan dalam merancang dan membangun game.",
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
        ],
        itemsMateri: [
            {
                icon: faGears,
                judul: "Roblox Studio",
                deskripsi: "Mempelajari penggunaan Roblox Studio untuk membuat dan mengembangkan game 3D, mulai dari membangun environment, mengatur objek, hingga menerapkan berbagai mekanisme dan interaksi dalam game.",
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
                deskripsi: "Membuat dan mengembangkan game dari konsep hingga produk jadi menggunakan berbagai game engine.",
            },
            {
                icon: faRocket,
                judul: "Indie Developer",
                deskripsi: "Mengembangkan game secara mandiri atau dalam tim kecil dan memasarkannya ke platform distribusi game.",
            },
            {
                icon: faPalette,
                judul: "Game Designer",
                deskripsi: "Merancang mekanik gameplay, level, dan pengalaman bermain yang menarik dan menyenangkan.",
            },
        ],
    },
]


export default divisiData;