import OperationCard from "@/components/cards/OperationCard";

export default function OperationChallengesComponent({
  title,
}: {
  title: string;
}) {
  return (
    <div className="">
      <div className="text-h1-semibold text-[#EEE6FC] md:mb-13 mb-8 text-center">
        {title}
      </div>
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <OperationCard
              title="Fragmented and Inaccessible Data"
              description="Businesses often deal with spoiled data spread across legacy systems, cloud services, APIs, and multiple databases. This fragmentation leads to poor data visibility, integration issues, and inefficiencies in leveraging data for strategic decisions"
            />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <OperationCard
              title="Fragmented and Inaccessible Data"
              description="Businesses often deal with spoiled data spread across legacy systems, cloud services, APIs, and multiple databases. This fragmentation leads to poor data visibility, integration issues, and inefficiencies in leveraging data for strategic decisions"
            />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <OperationCard
              title="Fragmented and Inaccessible Data"
              description="Businesses often deal with spoiled data spread across legacy systems, cloud services, APIs, and multiple databases. This fragmentation leads to poor data visibility, integration issues, and inefficiencies in leveraging data for strategic decisions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
