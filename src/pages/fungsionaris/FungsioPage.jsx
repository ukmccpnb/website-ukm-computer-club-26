// import Navbar from "../../component/Navbar";
// import CardFungsio from "../../component/CardFungsio";
// import intiData from '../../data/fungsio/inti';
// import WebData from '../../data/fungsio/web';
// import OfficeData from '../../data/fungsio/office';
// import GameData from '../../data/fungsio/game';
// import VcdData from '../../data/fungsio/vcd';

// function FungsioPage(){
//     return(
//         <div className="relative">
//             <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed bg-bottom"/>
            
//             <Navbar />

//             <section className="py-32">
//                 <h1 className="text-center font-semibold text-3xl uppercase" data-aos="fade-up">Fungsionaris UKM Computer Club</h1>

//                 <div className="w-konten mx-auto mt-20" data-aos="fade-up">
//                     <div className="lg:flex items-center">
//                         <div className="border border-black w-full"></div>
//                         <h5 className="text-xl font-semibold lg:w-[55%] text-center uppercase">Fungsionaris Inti UKM Computer Club</h5>
//                         <div className="border border-black w-full"></div>
//                     </div>

//                     <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
//                         {intiData.map((Data) =>(
//                             <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="w-konten mx-auto mt-20" data-aos="fade-up">
//                     <div className="lg:flex items-center">
//                         <div className="border border-black w-full"></div>
//                         <h5 className="text-xl font-semibold lg:w-[60%] text-center uppercase">Fungsionaris Divisi Office</h5>
//                         <div className="border border-black w-full"></div>
//                     </div>

//                     <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
//                         {OfficeData .map((Data) =>(
//                             <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="w-konten mx-auto mt-20" data-aos="fade-up">
//                     <div className="lg:flex items-center">
//                         <div className="border border-black w-full"></div>
//                         <h5 className="text-xl font-semibold lg:w-[135%] text-center uppercase">Fungsionaris Divisi Visual Communication Design</h5>
//                         <div className="border border-black w-full"></div>
//                     </div>

//                     <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
//                         {VcdData .map((Data) =>(
//                             <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="w-konten mx-auto mt-20" data-aos="fade-up">
//                     <div className="lg:flex items-center">
//                         <div className="border border-black w-full"></div>
//                         <h5 className="text-xl font-semibold lg:w-[95%] text-center uppercase">Fungsionaris Divisi Web Development</h5>
//                         <div className="border border-black w-full"></div>
//                     </div>

//                     <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
//                         {WebData .map((Data) =>(
//                             <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="w-konten mx-auto mt-20" data-aos="fade-up">
//                     <div className="lg:flex items-center">
//                         <div className="border border-black w-full"></div>
//                         <h5 className="text-xl font-semibold lg:w-[98%] text-center uppercase">Fungsionaris Divisi Game Development</h5>
//                         <div className="border border-black w-full"></div>
//                     </div>

//                     <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
//                         {GameData .map((Data) =>(
//                             <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
//                             />
//                         ))}
//                     </div>
//                 </div>

//             </section>
//         </div>
//     )
// }

// export default FungsioPage

// KODE BARU
import Navbar from "../../component/Navbar";
import CardFungsio from "../../component/CardFungsio";
import intiData from '../../data/fungsio/inti';
import WebData from '../../data/fungsio/web';
import OfficeData from '../../data/fungsio/office';
import GameData from '../../data/fungsio/game';
import VcdData from '../../data/fungsio/vcd';

function FungsioPage() {
    const divisiList = [
        { code: "01", title: "Fungsionaris Inti", data: intiData },
        { code: "02", title: "Divisi Office", data: OfficeData, pattern: [3, 3, 2, 2] },
        { code: "03", title: "Divisi Visual Communication Design", data: VcdData },
        { code: "04", title: "Divisi Web Development", data: WebData },
        { code: "05", title: "Divisi Game Development", data: GameData, pattern: [2, 2] },
    ];

    // Helper untuk membagi kartu berdasarkan susunan baris (pattern)
    const renderCardGrid = (data, pattern) => {
        if (!pattern) {
            return (
                <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-10">
                    {data.map((item) => (
                        <CardFungsio key={item.id} img={item.img} />
                    ))}
                </div>
            );
        }

        let currentIndex = 0;
        const rows = pattern.map((count) => {
            const rowData = data.slice(currentIndex, currentIndex + count);
            currentIndex += count;
            return rowData;
        });

        return (
            <div className="flex flex-col items-center gap-8 sm:gap-10">
                {rows.map((rowItems, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center items-center flex-wrap gap-8 sm:gap-10 w-full">
                        {rowItems.map((item) => (
                            <CardFungsio key={item.id} img={item.img} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="relative min-h-screen text-slate-900 font-sans selection:bg-[#96C0FF] selection:text-[#0053FA]">
            {/* Background Ornamen Asli */}
            <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed bg-bottom bg-cover opacity-80 pointer-events-none" />

            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                
                {/* HERO HEADER */}
                <header className="mb-20 flex flex-col items-center justify-center text-center" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0053FA] drop-shadow-sm">
                        Fungsionaris
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1576FF] tracking-wider uppercase mt-1 drop-shadow-sm">
                        UKM Computer Club
                    </h2>

                    {/* Garis Aksen Polos */}
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#0053FA] to-[#4090FF] mt-4 rounded-full shadow-sm"></div>
                </header>

                {/* SECTION DIVISI */}
                <div className="space-y-20">
                    {divisiList.map((divisi) => (
                        <section key={divisi.code} className="w-full" data-aos="fade-up">
                            
                            {/* Header Divisi */}
                            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-10 pb-3 border-b-2 border-[#96C0FF] text-center sm:text-left">
                                <span className="text-lg sm:text-xl font-mono font-bold text-[#1576FF]">
                                    {divisi.code} /
                                </span>
                                <h3 className="text-base sm:text-xl font-extrabold uppercase tracking-wider text-[#0053FA]">
                                    {divisi.title}
                                </h3>
                                <div className="flex-1 h-[1px] bg-[#96C0FF]/60 hidden sm:block"></div>
                                <span className="text-xs font-mono text-slate-600 font-semibold hidden sm:block">
                                    [{divisi.data.length} MEMBERS]
                                </span>
                            </div>

                            {/* Render Layout Grid Berdasarkan Pattern */}
                            {renderCardGrid(divisi.data, divisi.pattern)}

                        </section>
                    ))}
                </div>

            </main>
        </div>
    );
}

export default FungsioPage;