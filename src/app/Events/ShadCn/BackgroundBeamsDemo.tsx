'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import Footer from '@/app/Home/footer';

export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const router = useRouter();
  const AARVAM_URL = process.env.NEXT_PUBLIC_AARVAM_URL || '#';
  const [hackathon, setHackathon] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/hackathons/aarvam25');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setHackathon(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const banners = hackathon ? [
    {
      id: 1,
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1763835275/WEBSITE_BANNER_oonh4k.png",
      title: "AARVAM '25"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/ddpbtvesl/image/upload/v1763835263/Registration_live_ys8djk.png",
      title: "AARVAM '25"
    }
  ] : [];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <>
      {/* Banner Slider - MATCHED WITH PROGRAMS FILE */}
      <div className='min-h-80 flex items-center justify-center mt-10 rounded-xl my-10 w-full'>
        <div className='container relative mx-auto'>
          <Slider {...sliderSettings}>
            {loading || error ? (
              <div className="relative flex items-center justify-center rounded-2xl w-full h-80 bg-slate-800 text-slate-200">
                {loading ? "Loading event..." : error}
              </div>
            ) : (
              banners.map((b) => (
                <div key={b.id} className="relative flex items-center justify-center rounded-2xl w-full h-80 overflow-hidden">
                  <Image
                    src={b.image}
                    alt="AARVAM Banner"
                    width={1400}
                    height={600}
                    className="object-cover w-full h-full"
                    onClick={() => router.push("/Events/aarvam25")}
                  />
                </div>
              ))
            )}
          </Slider>
        </div>
      </div>

      {/* OFFLINE HACKATHON SECTION — MATCHED WITH TECH TRIO CARD */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Offline Hackathon</h2>

        <div className="grid sm:grid-cols-2 gap-8">

          {/* Card */}
          <div className="rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition">
            <div className="relative h-48 w-full">
              <Image
                src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1763841012/EVENT_ddhbbs.png"
                alt="AARVAM 25"
                fill
                className="object-cover brightness-110"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-slate-900">AARVAM 25'</h3>

              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span>⚡</span> 24-Hours Designathon
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span>👥</span> 90+ Enrolled
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span>📍</span> Karur
              </div>

              <hr className="my-2" />

              <div className="flex items-center justify-between">
                <p className="text-sky-600 font-bold text-lg">₹ 750/-</p>

              <button
                onClick={() => router.push('/Events/aarvam25')}
                className="rounded-full border border-sky-400 px-5 py-2 text-sky-500 font-semibold text-sm hover:bg-sky-50 transition"
              >
                Register Now
              </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
