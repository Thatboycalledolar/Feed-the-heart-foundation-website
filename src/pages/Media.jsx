import { useParams } from "react-router-dom"
import { galleryItems } from "../data/GaleryItems.js"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Media() {
    const { id } = useParams()
    const media = galleryItems.find((item) => item.id === id)

    // State to track selected image index (null when modal is closed)
    const [selectedIndex, setSelectedIndex] = useState(null)

    // Touch swipe states for mobile
    const [touchStartX, setTouchStartX] = useState(0)
    const [touchEndX, setTouchEndX] = useState(0)

    if (!media) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <h1 className="text-2xl font-bold">Media not found</h1>
            </div>
        )
    }

    // Previous Image Handler
    const handlePrev = (e) => {
        if (e) e.stopPropagation() // Prevents backdrop click event
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? media.media.length - 1 : prevIndex - 1
        )
    }

    // Next Image Handler
    const handleNext = (e) => {
        if (e) e.stopPropagation() // Prevents backdrop click event
        setSelectedIndex((prevIndex) =>
            prevIndex === media.media.length - 1 ? 0 : prevIndex + 1
        )
    }

    // Close Modal Handler
    const handleClose = () => {
        setSelectedIndex(null)
    }

    // Mobile Touch Gesture Handlers
    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX)
        setTouchEndX(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return
        const distance = touchStartX - touchEndX
        const minSwipeDistance = 50 // Minimum swipe distance in px to trigger action

        if (distance > minSwipeDistance) {
            // Swiped Left -> Go to Next image
            handleNext()
        } else if (distance < -minSwipeDistance) {
            // Swiped Right -> Go to Previous image
            handlePrev()
        }

        // Reset touch points
        setTouchStartX(0)
        setTouchEndX(0)
    }

    return (
        <div className="flex flex-col items-center mt-12 md:mt-24 mb-30 justify-center gap-12 px-8 md:px-12 w-full max-w-[1200px]">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-12 md:mb-24">
                <h1 className="font-header text-center leading-12 md:leading-18 tracking-tighter font-medium mb-4 md:mb-8 text-[48px] md:text-[64px]">
                    {media.name}
                </h1>
                <div className="flex items-center gap-4">
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold opacity-60 text-[var(--color-black)]">
                        {media.location}
                    </p>
                    <div className="w-[2px] h-[20px] bg-black/50"></div>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold opacity-60 text-[var(--color-black)]">
                        {media.date}
                    </p>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-[1200px] gap-4 md:gap-8">
                {media.media.map((item, index) => (
                    <img
                        key={item}
                        src={item}
                        alt={media.name}
                        onClick={() => setSelectedIndex(index)}
                        className="rounded-lg w-full h-[220px] md:h-[260px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                ))}
            </div>

            {/* Lightbox / Overlay Modal */}
            {selectedIndex !== null && (
                <div
                    onClick={handleClose}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 select-none"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer z-10"
                        aria-label="Close modal"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 text-white bg-black/50 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={36} />
                    </button>

                    {/* Image Container with Touch Swipe support */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center touch-pan-y"
                    >
                        <img
                            src={media.media[selectedIndex]}
                            alt={`${media.name} ${selectedIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl pointer-events-none md:pointer-events-auto"
                        />
                        <p className="text-white/80 text-sm mt-3 font-medium">
                            {selectedIndex + 1} / {media.media.length}
                        </p>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 text-white bg-black/50 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={36} />
                    </button>
                </div>
            )}
        </div>
    )
}
