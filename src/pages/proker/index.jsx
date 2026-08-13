import { useNavigate, useParams } from "react-router-dom";
import prokerData from "../../data/proker/data";
import Dokumentasi from "../../component/Dokumentasi";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProkerPage() {
    const { proker } = useParams();
    const navigate = useNavigate();
    const prokerDetail = prokerData.find((data) => data.singkatan === proker);

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }
    
    const opts= {
    playerVars: {
        controls: 1,
        autoplay: 0,
        iv_load_policy:3,
        playsinline:1,
        fs: 1,
        rel:0,
        disablekb: 0,
        showinfo: 0,
        mute: 0,
        loop: 1,
        playlist: prokerDetail.videoYoutube,
    },
    };

    return (
        prokerDetail ? (
            <div>
                <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed"/>

                <section className="pt-8">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-down">
                        <h1 className="text-center font-semibold text-lg md:text-2xl text-hitam m-auto mt-10 mb-8">Program Kerja</h1>
                        <div className="w-2/5 md:w-1/5 lg:w-1/12 m-auto relative z-10 mb-4">
                            <img src={prokerDetail.logo} className="w-full rounded-ss-lg rounded-se-lg" loading="lazy" decoding="async"></img>
                        </div>
                        <h1 className="text-center font-bold text-xl md:text-4xl md:w-3/5 mx-auto">{prokerDetail.name}</h1>
                        {/* <p className="text-justify font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsi}</p> */}
                    </div>
                </section>

                <section className="pt-16 relative pb-20">
                    <div className="absolute inset-0 z-0"
                        style={{
                        backgroundColor: "#1E1E1E",
                        }}>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto" data-aos="fade-up">
                        <div className="text-justify lg:text-justify font-normal text-sm md:text-base mb-10 w-full md:w-3/4 md:mx-auto" dangerouslySetInnerHTML={{ __html: prokerDetail.deskripsiDetail }}></div>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto flex justify-center flex-wrap lg:flex-nowrap" data-aos="fade-up">
                        {
                            prokerDetail.items.map((item, index) => (
                                <div key={index} className="mb-4 flex flex-col gap-6 lg:gap-10 m-2 max-lg:grow">
                                    <FontAwesomeIcon className="w-full h-14 m-auto text-white" icon={item.icon} />
                                    <p className="text-center font-semibold text-sm md:text-base mb-10 w-full md:w-4/5 md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="lg:bg-secondary max-lg:gap-3 lg:py-5 w-4/5 mx-auto lg:rounded-[3rem] flex flex-col flex-warp lg:flex-row lg:flex-nowrap justify-evenly items-center text-white " data-aos="fade-up">
                        {
                            prokerDetail.facts.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 w-full max-md:py-3 max-lg:bg-secondary max-lg:rounded-[1rem] max-lg:py-2">
                                    <h1 className="text-center font-bold text-xl md:text-6xl m-auto">{item.head}</h1>
                                    <p className="text-center font-semibold text-sm md:text-lg w-full md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="py-8 md:pb-20 relative">
                    <div className="pt-8 pb-4 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-2xl text-secondary m-auto mt-10">Video Pengenalan {prokerDetail.name}</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex aspect-video m-auto relative" data-aos="fade-up">
                        <YouTube videoId={prokerDetail.videoYoutube} className="aspect-video w-full" opts={opts} onReady={onPlayerReady} iframeClassName="w-konten mx-auto h-full lg:rounded-2xl"/>
                    </div>
                    <div className="pt-8 pb-4 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-2xl text-secondary m-auto mt-10">Galeri</h1>
                    </div>
                    <div className="w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">Beberapa Dokumentasi {prokerDetail.name} {prokerDetail.periode}</h1>
                        <p className="text-center font-normal text-sm md:text-base w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsiDokumentasi}</p>
                    </div>
                    {/* <div className="p-2 w-konten mx-auto flex flex-wrap justify-center">
                        {
                            prokerDetail.dokumentasi.map((item, index) => (
                                <div key={index} className="w-96 m-1" data-aos="fade-up">
                                    <img src={item.path} alt={item.alt} className="w-full h-full object-cover rounded-md" loading="lazy" decoding="async" />
                                </div>
                            ))
                        }
                    </div> */}
                    <div className="lg:w-full">
                        <Dokumentasi image1={prokerDetail.dokumentasi1.path} alt1={prokerDetail.dokumentasi1.alt} image2={prokerDetail.dokumentasi2.path} alt2={prokerDetail.dokumentasi2.alt} image3={prokerDetail.dokumentasi3.path} alt3={prokerDetail.dokumentasi3.alt} image4={prokerDetail.dokumentasi4.path} alt4={prokerDetail.dokumentasi4.alt} image5={prokerDetail.dokumentasi5.path} alt5={prokerDetail.dokumentasi5.alt} image6={prokerDetail.dokumentasi6.path} alt6={prokerDetail.dokumentasi6.alt} image7={prokerDetail.dokumentasi7.path} alt7={prokerDetail.dokumentasi7.alt} image8={prokerDetail.dokumentasi8.path} alt8={prokerDetail.dokumentasi8.alt} image9={prokerDetail.dokumentasi9.path} alt9={prokerDetail.dokumentasi9.alt}/>
                    </div>
                </section>
            </div>
        ) : navigate("/error")
    );
}

export default ProkerPage;