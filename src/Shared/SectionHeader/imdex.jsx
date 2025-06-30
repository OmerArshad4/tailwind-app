const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1
        className="
    text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]
    leading-[32px] sm:leading-[34px] md:leading-[36px] lg:leading-[36px]
    font-semibold text-[#111827] font-oswald
  "
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-[16px] leading-[20px] font-normal text-[#4B5563] font-dmSans mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
