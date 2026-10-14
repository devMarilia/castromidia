import fotomobile from "../../../public/foto.png";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex items-center overflow-x-hidden px-6 pt-28 pb-12 lg:px-8 xl:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
        <HeroContent />

        <div className="relative flex justify-center xl:justify-end">
          <div className="absolute inset-auto top-[8%] h-[280px] w-[280px] rounded-full bg-gold/20 blur-[110px] md:h-[360px] md:w-[360px] xl:right-[8%] xl:top-[12%] xl:h-[430px] xl:w-[430px]" />
          <img
            src={fotomobile}
            alt="Especialista da Castro Mídia"
            className="relative z-10 w-[88%] max-w-[520px] md:w-[68%] xl:w-full xl:max-w-[640px]"
          />
        </div>
      </div>
    </section>
  );
}
