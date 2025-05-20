interface TechItemProps {
  name: string;
  src: string;
}

export const TechItem = ({ name, src }: TechItemProps) => {
  return (
    <div className="self-stretch flex items-center gap-2.5 overflow-hidden my-auto p-0.5">
      <img
        src={src}
        alt={`${name} logo`}
        className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto"
      />
      <div className="text-[#B2A8BE] text-[18px] font-semibold leading-[26px] tracking-[0.36px] self-stretch my-auto">
        {name}
      </div>
    </div>
  );
};

export default function TabContent({
  technologies,
}: {
  technologies: {
    name: string;
    src: string;
  }[];
}) {
  return (
    <section
      aria-label="Supported Technologies"
      className="flex flex-col items-center text-lg text-[#B2A8BE] font-semibold text-center tracking-[0.36px] leading-none justify-center"
    >
      <div className="flex w-[1338px] max-w-full items-center gap-10 justify-center flex-wrap">
        {technologies.map((tech, index) => (
          <TechItem key={index} name={tech.name} src={tech.src} />
        ))}
      </div>
    </section>
  );
}
