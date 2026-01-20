"use client";

export function FilmGrain() {
    return (
        <div className="film-grain" aria-hidden="true">
            <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix
                        type="saturate"
                        values="0"
                    />
                </filter>
                <rect
                    width="100%"
                    height="100%"
                    filter="url(#noiseFilter)"
                />
            </svg>
        </div>
    );
}
