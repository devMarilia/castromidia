import WhatsAppButton from "./WhatsAppButton";

const CTAWhatsapp = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      {/* CTA principal */}
      <WhatsAppButton
        text="Entre em contato"
        arrow
        className="inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-extrabold shadow-[0_18px_40px_rgba(201,168,76,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(201,168,76,0.34)] md:text-base"
      />
    </div>
  );
};

export default CTAWhatsapp;
