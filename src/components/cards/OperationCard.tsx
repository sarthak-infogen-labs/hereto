export default function OperationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-[30px] w-full flex flex-col justify-between space-y-6 h-auto bg-[#332C44]/14 border border-[#332C44] rounded-[12px]">
      <h3 className="text-h5 text-[#EEE6FC]">{title}</h3>
      <p className="text-body-sm text-[#EEE6FC]">{description}</p>
    </div>
  );
}
