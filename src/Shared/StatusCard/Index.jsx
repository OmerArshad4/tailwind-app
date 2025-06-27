
export default function StatusCard({
  title,
  value,
  subtitle,
  icon,
  badge,
  dot
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 w-full max-w-md flex flex-col justify-between gap-2">
      <div className="flex items-start justify-between">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        {icon && <div>{icon}</div>}
        {dot && <span className="h-2 w-2 rounded-full bg-green-500 mt-1"></span>}
      </div>

      <p className="text-xl font-semibold text-gray-900">{value}</p>

      <div className="flex items-center justify-between mt-1">
        <p className="text-sm text-gray-400">{subtitle}</p>
        {badge && (
          <span className="text-xs text-green-600 border border-green-500 bg-green-50 rounded-full px-2 py-[2px] font-medium">
            ● {badge}
          </span>
        )}
      </div>
    </div>
  );
}


// USEAGE IN COMPONENT
//   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
//     <StatusCard
//   title="Latest Upload"
//   value="Today, 3:35 PM"
//   subtitle="256 customers queued"
// icon={<FaRegFolderClosed className="text-gray-400 text-xl" />}
  
// />
  
//       </div>