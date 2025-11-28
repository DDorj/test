'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProductImageViewerProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  productName: string
}

export default function ProductImageViewer({
  images,
  currentIndex,
  isOpen,
  onClose,
  productName,
}: ProductImageViewerProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(currentIndex)
      setScale(1)
      setPosition({ x: 0, y: 0 })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, activeIndex, images.length])

  // Touch gestures
  useEffect(() => {
    if (!isOpen || !imageRef.current) return

    let touchStartX = 0
    let touchStartY = 0
    let initialDistance = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      } else if (e.touches.length === 2) {
        initialDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        const newScale = Math.max(1, Math.min(4, scale * (currentDistance / initialDistance)))
        setScale(newScale)
        initialDistance = currentDistance
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 1) {
        const touchEndX = e.changedTouches[0].clientX
        const touchEndY = e.changedTouches[0].clientY
        const deltaX = touchEndX - touchStartX
        const deltaY = touchEndY - touchStartY

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            handlePrevious()
          } else {
            handleNext()
          }
        }
      }
    }

    const element = imageRef.current
    element.addEventListener('touchstart', handleTouchStart, { passive: false })
    element.addEventListener('touchmove', handleTouchMove, { passive: false })
    element.addEventListener('touchend', handleTouchEnd)

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isOpen, scale])

  const handlePrevious = useCallback(() => {
    if (images.length > 1) {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [images.length])

  const handleNext = useCallback(() => {
    if (images.length > 1) {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [images.length])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      setScale((prev) => Math.max(1, Math.min(4, prev + delta)))
    },
    []
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale > 1) {
        setIsDragging(true)
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
      }
    },
    [scale, position]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, dragStart, scale]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose]
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Product image viewer"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 text-white hover:rotate-90"
        aria-label="Close viewer"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 text-white opacity-0 hover:opacity-100 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 text-white opacity-0 hover:opacity-100 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      )}

      {/* Image Container */}
      <div
        ref={imageRef}
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12 group"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <div
          className="relative w-full h-full max-w-7xl max-h-full animate-in zoom-in duration-300"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          <Image
            src={images[activeIndex]}
            alt={`${productName} - Image ${activeIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={100}
            priority
            unoptimized={images[activeIndex].includes('scene7.com')}
          />
        </div>
      </div>

      {/* Zoom Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="hidden sm:inline">Scroll to zoom • </span>
        <span className="sm:hidden">Pinch to zoom • </span>
        {scale > 1 ? 'Drag to pan' : 'Click image to zoom'}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90vw] overflow-x-auto scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setScale(1)
                setPosition({ x: 0, y: 0 })
              }}
              className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                index === activeIndex
                  ? 'border-white scale-110'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
                unoptimized={image.includes('scene7.com')}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

