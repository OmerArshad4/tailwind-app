const InfoBlock = ({ title, fields }) => {
  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-800">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-medium">{field.label}</span>
            <span>{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;
