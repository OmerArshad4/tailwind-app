export default function StatusCard({
  title,
  value,
  subtitle,
  icon,
  badge,
  color = "#020817",
  dot,
}) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm px-5 py-4 w- gap-1">
      <div className="flex items-start justify-between">
        <p className="font-dm font-normal text-[14px] leading-[20px] tracking-[-0.35px] text-[#020817]">
          {title}
        </p>
        {icon && <div>{icon}</div>}
        {dot && (
          <span className="h-2 w-2 rounded-full bg-green-500 mt-1"></span>
        )}
      </div>

      <p className={`font-dm font-normal text-[24px] leading-[32px]  ${color}`}>
        {value}
      </p>

      <div className="flex items-center justify-between mt-1">
        <p className="font-dm font-normal text-[12px] leading-[16px]  text-[#64748B]">
          {subtitle}
        </p>
        {badge && (
          <span className="text-xs text-green-600 border border-green-500 bg-green-50 rounded-full px-2 py-[2px] font-medium">
            ● {badge}
          </span>
        )}
      </div>
    </div>
  );
}

//   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
//     <StatusCard
//   title="Latest Upload"
//   value="Today, 3:35 PM"
//   subtitle="256 customers queued"
// icon={<FaRegFolderClosed className="text-gray-400 text-xl" />}

// />

//       </div>
