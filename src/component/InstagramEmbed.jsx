import { useEffect, useRef } from "react";

function InstagramEmbed({ url }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Load script Instagram embed kalau belum ada
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // Kalau script udah pernah dimuat, proses ulang embed-nya
            window.instgrm.Embeds.process();
        }
    }, [url]);

    return (
        <div ref={containerRef} className="flex justify-center">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "99.375%",
                }}
            ></blockquote>
        </div>
    );
}

export default InstagramEmbed;