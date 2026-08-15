import { useEffect, useRef, useState } from "react";

function CountUp({ value, duration = 2000 }) {
    const [display, setDisplay] = useState("0");
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    // Ambil angka murni dari string (buang titik pemisah ribuan & tanda +)
    const numericValue = parseInt(value.replace(/[.+]/g, ""), 10);
    // Ambil suffix (misal "+") yang nempel di akhir angka
    const suffix = value.replace(/[0-9.]/g, "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime = null;

                    const animate = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        const current = Math.floor(progress * numericValue);
                        setDisplay(current.toLocaleString("id-ID"));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setDisplay(numericValue.toLocaleString("id-ID"));
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [numericValue, duration]);

    return (
        <span ref={ref}>
            {display}{suffix}
        </span>
    );
}

export default CountUp;