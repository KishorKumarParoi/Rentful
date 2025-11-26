"use client"
import Image from 'next/image'
import { motion } from "motion/react"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    return (
        <section className="relative h-[80vh] md:h-screen">
            {/* Background image */}
            <Image
                src="/landing-splash.jpg"
                alt="Rentful Rental Platform Hero Section"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Dark overlay (non-interactive) */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" aria-hidden="true" />

            {/* Content positioned one-third from top, centered */}
            <div className="absolute inset-x-0 top-1/3 z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Start your journey to finding the perfect place to call home
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Explore our wide range of rental properties tailored to your lifestyle.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <div className="flex w-full max-w-lg">
                            <Input
                                type="text"
                                placeholder="Search by city, neighborhood or address"
                                className="w-full rounded-none rounded-l-xl border-none bg-white h-12 text-base"
                            />
                            <Button className="rounded-none rounded-r-xl cursor-pointer bg-secondary-600 hover:bg-secondary-500 text-white h-12">
                                Search
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection