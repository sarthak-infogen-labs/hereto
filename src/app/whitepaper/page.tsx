import LinkHeader from "@/components/headers/LinkHeader";
import Chip from "@/components/ui/chip";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="main-container-width global-padding">
      <div className="mt-[40px]">
        <LinkHeader
          items={[
            { label: "Insights", href: "/insights" },
            { label: "Whitepaper", href: "/whitepaper" },
          ]}
          activeIndex={0}
        />
      </div>
      <div className="mt-[32px] flex gap-[40px] max-md:flex-col lg:flex-row py-3 min-h-[584px]  ">
        {/* Main Content Section */}
        <div className=" xs:w-full lg:w-7/12  flex flex-wrap text-white  h-full">
          <div className="mb-[20px]">
            <div className="flex justify-between w-full mb-[10px]">
              <div className="text-caption !text-[#F5F5F5]">
                Written By Damon Salvatore{" "}
              </div>
              <div className="text-caption !text-[#B2A8BE]">
                September, 2024 | 9 min read
              </div>
            </div>
            <div className="text-h3-medium text-[#F5F5F5]">
              Mastering Telecom Infrastructure: Cloud vs. Off-Cloud Strategies.
            </div>
            <div className="flex gap-[10px] mt-[13px] ">
              <Chip content="AI and Machine Learning" bgColor="rgba(51, 44, 68, 1)" />
              <Chip content="AR SDKs"  bgColor="rgba(51, 44, 68, 1)"/>
            </div>
          </div>
          <p className="mb-4">
            This white paper explores the significance of integrating Extended
            Reality (XR) into healthcare education and clinical practice, aiming
            to enhance the learning experience for healthcare professionals and
            improve patient outcomes. XR technologies such as virtual reality
            (VR), augmented reality (AR), and mixed reality (MR) offer immersive
            and interactive tools for medical training, surgical simulations,
            patient education, and telemedicine. By embracing XR, healthcare
            institutions can revolutionize education and clinical practice,
            leading to more efficient, safer, and cost-effective healthcare
            delivery.
          </p>
          <p className="mb-4">
            As the demand for remote healthcare solutions continues to grow, the
            integration of AR/VR technologies is becoming an essential component
            of the healthcare industry, driving efficiency, safety, and
            cost-effectiveness in patient care delivery.
          </p>
          {/* Added more content to make the page scrollable for testing the sticky behavior */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quae
          incidunt a magnam distinctio amet maiores nam assumenda corporis
          expedita eligendi libero, accusantium sed id maxime similique magni
          minima dignissimos totam sit quos et eveniet! Doloremque vel illum
          perspiciatis fugit aspernatur. Distinctio laborum ea ipsa voluptatum
          labore totam ipsam eum excepturi iure quisquam magni, nulla
          repudiandae error corporis vel quos porro quam facilis fugit accusamus
          animi cumque. Est illo facere animi repudiandae esse voluptas, dolores
          praesentium deleniti laudantium laborum error, temporibus quibusdam
          exercitationem consequatur quam accusantium sequi cum fugiat, harum
          soluta nam nobis. Sed suscipit, animi repellendus sunt facilis ut
          repellat, blanditiis dignissimos, omnis unde cupiditate natus. Quo,
          dicta! Blanditiis aperiam voluptatem libero, quaerat eum, sapiente quo
          reprehenderit aliquid tempore adipisci repellendus ratione praesentium
          asperiores! Commodi perferendis alias odit cum reprehenderit nulla
          quis sequi neque totam sapiente labore illum eos, fuga perspiciatis
          quaerat ratione quas similique vero minus, ex delectus quo a! Officia
          corrupti dolor atque ab labore maiores quod. Quaerat tempora
          perspiciatis magnam nesciunt molestiae exercitationem sequi beatae,
          nam soluta voluptas debitis cumque quod quis hic aliquam vero fugit
          eos tempore nisi autem dolor unde ex. Libero, reprehenderit
          consequatur. Ipsum blanditiis esse temporibus a repellendus libero
          quasi aut vitae quod eaque, non sed saepe iste fugiat deserunt est
          unde quas adipisci reiciendis sunt illum dolores. Eos laboriosam
          obcaecati incidunt quaerat, quas veritatis repellendus tempore
          blanditiis, suscipit, accusantium animi ab. Architecto nulla eligendi
          non alias nostrum ipsum placeat minus sapiente vero! Minima quo
          eveniet sint doloremque! Tempora, quisquam eius! Maiores modi quas,
          nam obcaecati earum veritatis ab animi neque illum placeat temporibus
          at accusantium, eos optio eum qui. Qui, cupiditate necessitatibus
          perspiciatis corrupti possimus rerum officiis molestiae aliquid sint
          explicabo dolor magnam quaerat quidem velit eum dignissimos non.
          Provident, quas excepturi aperiam cum unde voluptates deserunt officia
          velit aliquam nihil, repellat est dolor. Vel hic modi aspernatur sit
          ipsam odit, rem laborum aliquid deleniti. Corrupti illum rem debitis
          omnis blanditiis rerum provident, veniam labore assumenda dolorum
          alias dolores ut perferendis at voluptate necessitatibus? Nostrum quos
          aliquam, nam pariatur unde impedit ut ratione dolor sed minus quisquam
          ullam nesciunt, amet dolore quia ducimus id. Eveniet, assumenda
          deleniti fuga nobis esse, quos labore totam eligendi, quae veniam eos
          quibusdam quam quasi minima! Odit illo quasi eius iure rerum deleniti
          tempore explicabo corporis ex nemo! Optio neque, at explicabo
          voluptates, culpa architecto sapiente eius voluptate odit eveniet
          officia error praesentium, voluptatem libero dolor. Quidem nisi
          aliquam fuga alias fugit ut cum quas quo repudiandae at ipsum officiis
          saepe hic ex, dolores reprehenderit. Doloremque, voluptatum quidem.
          Eaque, ipsa enim commodi voluptate illum suscipit vero quasi nisi quo
          deserunt aperiam dolorem. Atque, minima eius quisquam laudantium
          voluptate expedita nostrum iusto nobis sint voluptates. Deleniti
          veniam vel consequuntur rem quibusdam quis quia et, nobis hic! Iste
          adipisci perferendis assumenda vitae explicabo tempora, est officiis.
          Nostrum sint sit tempore architecto provident, numquam iure?
          Doloremque ad velit, dignissimos reiciendis cumque quam atque nisi
          totam molestias architecto quae corrupti? Quam neque id obcaecati
          iusto eos quia error nihil ducimus eligendi consectetur quo in ad
          eveniet quasi maiores, itaque et esse, possimus mollitia? Recusandae,
          debitis atque. Natus laudantium excepturi accusamus repellat
          voluptatum. Quas quaerat praesentium molestiae laborum magni amet vero
          a. Temporibus consectetur quas id a iste fugit sed dolorum, laudantium
          nostrum repellendus qui, dolores sequi. Doloremque dicta, ea nostrum
          non vero libero explicabo culpa, sint sapiente aliquam inventore
          aliquid! Quisquam iusto nostrum minima corporis, quasi ex nemo tempora
          reprehenderit debitis voluptatem iure labore quaerat unde praesentium
          quas cupiditate molestias accusantium voluptate omnis sunt eaque,
          minus quae? Repudiandae fuga provident veniam, suscipit magni ea
          maiores aut aperiam? Explicabo distinctio odit minus veniam officiis
          doloremque nihil dicta debitis porro culpa quaerat, minima natus quia
          enim atque eligendi dignissimos. Exercitationem veniam quos, delectus
          eligendi praesentium voluptates modi enim quisquam ad maiores a
          dolores in sapiente labore vero alias saepe natus molestias
          perspiciatis incidunt officiis qui dolorum quis asperiores! Debitis
          deserunt illum dolor vero, officia voluptas accusamus asperiores a
          voluptatem maxime error temporibus libero molestiae quisquam ullam
          ipsa quaerat, delectus amet beatae culpa. Labore praesentium, ipsam
          obcaecati aliquid excepturi tempora quam dicta aut molestias expedita
          suscipit quod voluptatem debitis? Aut, corporis assumenda similique
          iure, ipsa ab, cum molestiae provident dicta asperiores debitis minus
          doloribus ut consectetur. Consequuntur, iure eaque ducimus hic
          doloremque nihil reiciendis aut dolorum deleniti nulla incidunt facere
          ea. Minus natus dolore optio iure est eveniet aliquid laborum, porro
          aliquam, incidunt libero unde. Velit provident esse odit doloremque
          sunt soluta ex molestiae saepe quam aperiam doloribus recusandae illo
          temporibus earum, cupiditate dignissimos numquam impedit sapiente
          aspernatur quisquam architecto possimus quas? Quisquam enim placeat
          neque totam rerum recusandae nulla doloribus quos autem nihil, animi
          perspiciatis laudantium repellendus omnis cum repellat natus vitae
          officia numquam fugit! Voluptate at porro fugiat et voluptates, sequi
          architecto iusto exercitationem ratione ex voluptatum deleniti
          distinctio dolor, earum maxime vel ea ut itaque numquam! Tempore
          ducimus ad, hic maiores nulla nobis cupiditate eligendi facilis maxime
          nemo, eum ullam dolores, deserunt adipisci eaque? Esse tenetur
          molestias ea amet assumenda, minus expedita ipsa repellat. Modi esse
          optio, eligendi totam earum voluptatibus iste exercitationem a
          officia, provident in cum! Error et omnis mollitia voluptatum aut
          exercitationem eius officia modi, ex commodi cum maiores nisi magnam
          voluptas, ea distinctio culpa dolore officiis saepe sit dicta
          perspiciatis delectus? Nobis nam similique modi, excepturi quibusdam
          sunt, atque id alias ipsum, doloremque quo odio. Corporis quod rem
          sunt velit maiores voluptatem reprehenderit ex alias non temporibus
          aliquid quam possimus tenetur modi et, earum totam inventore
          laboriosam amet id delectus! Commodi cupiditate aliquam provident
          optio ex illo magnam beatae saepe laudantium sequi quis voluptate
          delectus rem repudiandae voluptatem facilis debitis, sed iste
          consequuntur vero? Sapiente ipsum enim soluta laborum! Incidunt quo
          ducimus iure doloremque eos accusantium facilis sunt, in optio
          officia. Repudiandae vitae consectetur harum eligendi officia eos
          alias quas animi, iste similique nesciunt mollitia sit culpa voluptate
          nisi autem at voluptatem numquam cupiditate ex nam magni! Totam esse
          laborum itaque aspernatur fugit eius cum omnis id delectus officiis
          repellendus cumque quibusdam, autem fuga, sunt molestiae!
        </div>

        {/* Content Section with Sticky Behavior - FIXED */}
        <div className=" max-md:w-full lg:w-5/12 self-start sticky top-24 h-full  ">
          <div className="flex flex-col min-h-[400px]  p-[30px] rounded-xl border border-solid border-neutral-800 text-white box-border  ">
            <form>
              <div className="flex flex-col  gap-[30px]">
                <div className=" flex justify-center w-full text-[14px] text-h6 text-[#F5F5F5]    whitespace-nowrap">
                  Download the Whitepaper
                </div>

                <div className="flex flex-col w-full items-start gap-[30px]  ">
                  <Input type="text" placeholder="Full Name" required />
                  <Input type="text" placeholder="Email" required />
                  <Input type="text" placeholder="Company" />
                  <Input type="text" placeholder="Phone Number" />
                </div>
                <div className="flex flex-row  gap-[12px] max-md:items-start items-center  ">
                  <input
                    type="checkbox"
                    className="border w-[20px] h-[20px] appearance-none bg-transparent px-2   checked:after:content-['✔'] checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full checked:after:w-full"
                  />
                  <div className=" text-label !text-[#B2A8BE]">
                    I consent to processing of my personal data entered above.
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="text-[16px] font-normal border border-[#F5F5F5] rounded-[6px] p-2 w-[234px] h-[44px] ">
                    Download White-paper
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
