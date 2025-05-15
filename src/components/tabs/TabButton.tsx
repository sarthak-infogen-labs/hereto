export default function TabButton({ id, label, isActive, onClick }: any) {
  return (
    <div className="">
      <button
        onClick={() => onClick(id)}
        className={`text-[#F5F5F5] whitespace-nowrap cursor-pointer font-normal text-[15px] leading-6 px-4.5 py-1.5 rounded-full  hover:bg-[#1B192A] hover:shadow-[inset_0_1px_4px_rgba(137,133,168,0.4),inset_0_-1px_2px_rgba(137,133,168,0.4)]
                  ${
                    isActive
                      ? "border-[0.6px] border-[#F5F5F5] bg-[#1B192A] shadow-[inset_0_1px_4px_rgba(137,133,168,0.4),inset_0_-1px_2px_rgba(137,133,168,0.4)]"
                      : "bg-transparent"
                  }
              `}
      >
        {label}
      </button>
    </div>
  );
}
