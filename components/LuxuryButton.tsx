type LuxuryButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text" | "olive" | "periwinkle";
};

export default function LuxuryButton({
  href,
  children,
  variant = "solid",
}: LuxuryButtonProps) {
  const base =
    "inline-block uppercase tracking-[0.4em] text-[11px] transition duration-700 ease-out";

  const styles = {
    solid:
      "bg-[#6B2232] text-[#F8F3EB] px-9 py-4 hover:bg-[#CFA5A3] hover:text-[#6B2232] hover:shadow-[0_18px_45px_rgba(107,34,50,0.18)]",

    outline:
      "border border-[#7A8261] text-[#7A8261] px-9 py-4 hover:bg-[#7A8261] hover:text-[#F8F3EB] hover:shadow-[0_18px_45px_rgba(122,130,97,0.16)]",

    text:
      "border-b border-[#9AA6D3] text-[#6B2232] pb-2 hover:text-[#9AA6D3] hover:border-[#7A8261]",

    olive:
      "bg-[#7A8261] text-[#F8F3EB] px-9 py-4 hover:bg-[#9AA6D3] hover:text-[#F8F3EB] hover:shadow-[0_18px_45px_rgba(122,130,97,0.18)]",

    periwinkle:
      "bg-[#9AA6D3] text-[#F8F3EB] px-9 py-4 hover:bg-[#7A8261] hover:text-[#F8F3EB] hover:shadow-[0_18px_45px_rgba(154,166,211,0.22)]",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}