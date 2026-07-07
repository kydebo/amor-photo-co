export default function Monogram() {
  return (
    <div className="relative h-40 w-40 rounded-full border border-[#D8CEC4] flex items-center justify-center opacity-70">
      <div className="absolute inset-3 rounded-full border border-[#D8CEC4]"></div>

      <p className="absolute top-5 text-[10px] uppercase tracking-[0.35em] text-[#B9AA9D]">
        Love in its truest light
      </p>

      <div className="font-heading text-[#B9AA9D] text-4xl leading-none text-center">
        A
        <div className="h-px w-10 bg-[#B9AA9D] my-2"></div>
        P
      </div>

      <p className="absolute bottom-5 text-[10px] uppercase tracking-[0.35em] text-[#B9AA9D]">
        Est. 2024
      </p>
    </div>
  );
}