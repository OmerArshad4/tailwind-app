

export default function ActionCard({
  icon,
  title,
  description,
  buttonText,
  buttonVariant = "primary",
  onClick,
  iconColor = "text-gray-700",
}) {
  return (
    <div  className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm px-5 py-4 w- gap-1">
      <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
        {icon}
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button
        onClick={onClick}
       className={
  buttonVariant === "primary"
    ? "w-full text-sm font-medium py-2 rounded transition bg-teal-700 hover:bg-teal-800 text-white"
    : "w-full text-sm font-medium py-2 rounded transition border border-gray-300 hover:border-gray-400 text-gray-800"
}
      >
        {buttonText}
      </button>
    </div>
  );
}
