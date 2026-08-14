import imagesData from "../data/imgImports"

function Footer() {
    //tampilan
    return (


        <footer className="bg-hitam block md:relative">
            <div className="mx-auto w-navfot p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 md:w-[45%] flex flex-col justify-start me-5">
                        <div className="flex">
                            <div>
                                <img src={imagesData.LOGO_PNB_PUTIH} className="h-12 me-3" alt="Logo PNB" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <img src={imagesData.LOGO_UKM_PUTIH} className="h-12 me-3" alt="Logo UKM" loading="lazy" decoding="async" />
                            </div>
                        </div>

                        <div className="text-justify mt-3 text-white">
                            <p>Unit Kegiatan Mahasiswa (UKM) Computer Club KBM PNB adalah wadah bagi mahasiswa Politeknik Negeri Bali yang memiliki minat dan bakat dalam bidang teknologi informasi dan komputer.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:gap-16 gap-6 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Navigation</h2>
                            <ul className="text-white font-light">
                                <li className="mb-4">
                                    <a href="/#beranda" className="hover:underline">Beranda</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/#tentang" className="hover:underline">Tentang Kami</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/#divisi" className="hover:underline">Divisi</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/#proker" className="hover:underline">Program Kerja</a>
                                </li>
                                <li>
                                    <a href="/#fungsio" className="hover:underline">Fungsionaris</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-white font-light">
                                <li className="mb-4 flex items-center text-white">
                                    <i className="fa-brands fa-instagram me-2 text-lg"></i>
                                    <a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" className="hover:underline lg:-mt-[0.5px]" target="_blank">Instagram</a>
                                </li>
                                <li className="mb-4 flex items-center text-white">
                                    <i className="fa-brands fa-tiktok me-2 text-lg"></i>
                                    <a href="https://www.tiktok.com/@ukmcomputerclub?_t=8ohE7tbwgni&_r=1" className="hover:underline" target="_blank">Tiktok</a>
                                </li>
                                <li className="flex items-center text-white">
                                    <i className="fa-brands fa-youtube me-2 text-lg"></i>
                                    <a href="https://youtube.com/@ukmcomputerclub?si=58xhcjuwbTmeQcOA" className="hover:underline" target="_blank">Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact Us</h2>
                            <ul className="text-white font-light">
                                <a href="https://wa.me/628814667057" className="group" target="_blank">
                                    <li className="mb-4 flex items-center">
                                        <i className="fa-brands fa-whatsapp me-2"></i>
                                        <p className="group-hover:underline">Ria</p>
                                    </li>
                                </a>
                                <a href="https://wa.me/6281339415314" className="group" target="_blank">
                                    <li className="flex items-center">
                                        <i className="fa-brands fa-whatsapp me-2"></i>
                                        <p className="group-hover:underline">Ayuhmi</p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">© 2026 <span>UKM Computer Club</span>.</span>

                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" target="_blank" className="text-white hover:text-primary">
                            <i className="fa-brands fa-instagram text-lg"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@ukmcomputerclub?_t=8ohE7tbwgni&_r=1" target="_blank" className="text-white hover:text-primary ms-5">
                            <i className="fa-brands fa-tiktok text-lg"></i>
                            <span className="sr-only">Tiktok</span>
                        </a>
                        <a href="https://youtube.com/@ukmcomputerclub?si=58xhcjuwbTmeQcOA" target="_blank" className="text-white hover:text-primary ms-5">
                            <i className="fa-brands fa-youtube text-lg"></i>
                            <span className="sr-only">YouTube</span>
                        </a>
                        <a href="https://linkedin.com/company/ukm-computerclub" target="_blank" className="text-white hover:text-primary ms-5">
                            <i className="fa-brands fa-linkedin text-lg"></i>
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer