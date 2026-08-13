// import logo from '../assets/img/logo/LOGO UKM PUTIH.png';
// import tagline from '../assets/img/ornamen/tagline.png';

// function CardFungsio(props){
//     const {img, nama, ig, kata, link} = props;
//     return(
//         <div className="group h-80 w-72 m-1 [perspective:1000px]" data-aos="zoom-in">
//             <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-xl">
//                     <img src={img} className="rounded-xl w-full h-full object-cover scale-150 shadow-xl shadow-hitam/20" alt="Image" loading="lazy" decoding="async" />
//                 </div>

//                 <div className="absolute top-0 left-0 w-full h-1/5 z-10 bg-gradient-to-b from-hitam to-transparent rounded-t-xl [backface-visibility:hidden]"/>
//                 <div className="absolute bottom-0 left-0 w-full h-1/4 z-10 bg-gradient-to-t from-hitam to-transparent rounded-b-xl [backface-visibility:hidden]"/>

//                 <img src={`${tagline}`} alt="Tagline" className="absolute -bottom-1 right-1 w-40 h-16 z-20 [backface-visibility:hidden]" loading="lazy" decoding="async" />
//                 <img src={`${logo}`} alt="Logo" className="absolute top-2 left-2 w-10 h-10 z-20 [backface-visibility:hidden]" loading="lazy" decoding="async" />

//                 <div className="absolute inset-0 h-full w-full rounded-xl bg-hitam px-2 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                     <div className="flex flex-col min-h-full w-full items-center justify-center">
//                         <h1 className="text-2xl font-bold">{nama}</h1>
//                         {/* <hr className="w-1/2 mb-4"/> */}
//                         <p className="text-center w-3/4 text-sm mt-4">{`"${kata}"`}</p>
//                         <div className="flex items-center mt-4">
//                             <i className="fa-brands fa-instagram mx-2"></i> 
//                             <a href={link} className="hover:underline" target="_blank">{ig}</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CardFungsio

// KODE BARU
import card_backface from '../assets/img/logo/CARD BACK FACE.png';

function CardFungsio(props) {
    const { img } = props;

    return (
        <div className="group h-[380px] w-72 m-3 [perspective:1000px]" data-aos="zoom-in">
            <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* SISI DEPAN (FRONT FACE) */}
                <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-xl">
                    <img src={card_backface} 
                        className="w-full h-full object-cover rounded-xl" 
                        alt="Card1" 
                        loading="lazy"
                    />
                </div>

                {/* SISI BELAKANG (BACK FACE) */}
                <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                    <img 
                        src={img} 
                        alt="Card2" 
                        className="w-full h-full object-cover rounded-xl" 
                        loading="lazy" decoding="async" />
                </div>

            </div>
        </div>
    );
}

export default CardFungsio;