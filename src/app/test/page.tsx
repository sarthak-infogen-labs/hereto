import LinkHeader from "@/components/headers/LinkHeader";
import Image from "next/image";
import React from "react";
import {
  facebookLogo,
  gmailLogo,
  linkedinLogo,
  xLogo,
} from "../../../public/images";
import { cn } from "@/lib/utils";

const page = () => {
  const contentItems = [
    { id: 1, text: "What does the chatbots do ?", isActive: true },
    { id: 2, text: "What does the chatbots do ?", isActive: false },
    { id: 3, text: "AI chatbots algorithms ?", isActive: false },
    { id: 4, text: "AI chatbots algorithms ?", isActive: false },
    {
      id: 5,
      text: "What's the best programming language for an AI chatbot?",
      isActive: false,
    },
  ];

  // Social media sharing icons data
  const socialIcons = [
    { id: 1, alt: "Linkedin", src: linkedinLogo },
    { id: 2, alt: "Capa", src: xLogo },
    { id: 3, alt: "Group", src: gmailLogo },
    { id: 4, alt: "Frame", src: facebookLogo },
  ];

  return (
    <div className="main-container-width global-padding">
      <LinkHeader
        items={[
          { label: "Insights", href: "/insights" },
          { label: "Article", href: "/insights/article" },
        ]}
        activeIndex={0}
      />

      <div className="mt-[24px] flex gap-[40px]">
        {/* Content Section with Sticky Behavior - FIXED */}
        <div className="lg:w-[288px] self-start sticky top-24 hidden lg:block">
          <div className="flex flex-col min-h-[400px] justify-between p-5 rounded-xl border border-solid border-neutral-800 text-white">
            <div className="flex flex-col items-start gap-[30px]">
              <div className="w-fit text-[14px] text-[#B2A8BE] font-normal tracking-[0] leading-[46px] whitespace-nowrap">
                Contents
              </div>

              <div className="flex flex-col items-start gap-1.5">
                {contentItems.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      `flex items-start gap-2.5 px-3 py-2.5 w-full rounded-lg cursor-pointer`,
                      item.isActive
                        ? "bg-card-bg border border-solid border-neutral-100"
                        : ""
                    )}
                  >
                    <div className="text-[14px] font-medium text-white">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-2 mt-6">
              <div className="w-fit font-normal text-[#B2A8BE] text-sm tracking-[0] leading-6 whitespace-nowrap">
                Share On
              </div>

              <div className="flex items-center gap-3">
                {socialIcons.map((icon) => (
                  <div
                    key={icon.id}
                    className="flex items-center justify-center w-[26px] h-[26px] p-0.5 bg-[#190f24] rounded-sm cursor-pointer"
                  >
                    <Image
                      width={24}
                      height={24}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex-1 bg-blur-gradient-border !rounded-[12px] flex flex-wrap text-white py-6 px-6 min-h-screen">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            libero laborum officia nesciunt numquam voluptatem optio eligendi
            suscipit. Quas ea illo iste minima dicta perferendis similique
            quisquam nesciunt molestias! Id hic obcaecati illum, doloremque
            dolorum ipsa aliquid.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            commodi nisi, laboriosam iste placeat animi quae accusamus! Repellat
            voluptatem enim dolorum, odit modi necessitatibus nulla error vero
            laudantium possimus nesciunt ipsam voluptate ab similique
            consectetur perspiciatis repellendus illum harum, pariatur dicta
            tempore autem!
          </p>
          <p className="mb-4">
            Sunt nisi, dignissimos id deleniti obcaecati enim provident velit,
            quos fugit nihil quis porro. Quam, dolorem cumque ut voluptate
            saepe, voluptas tenetur quos aliquid rem ea deserunt natus cum sed
            officiis beatae eos culpa rerum assumenda exercitationem. Expedita
            illo reiciendis asperiores, praesentium obcaecati eligendi magnam.
          </p>
          <p className="mb-4">
            Eum quo culpa dignissimos architecto quia modi dolore ipsam mollitia
            beatae fugit inventore? Voluptate rem, in veritatis ipsam harum
            aperiam maxime a quam culpa officia voluptas totam ipsum quis
            nostrum illo. Hic nisi commodi, sint ipsum, quasi illo, molestiae
            repudiandae iste consequuntur dicta quo! Officia aut, necessitatibus
            repellendus aperiam molestias incidunt, sunt doloremque omnis
            impedit ratione.
          </p>
          {/* Added more content to make the page scrollable for testing the sticky behavior */}
          <p className="mb-4">
            Additional content to ensure page scrolls. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Earum libero laborum officia
            nesciunt numquam voluptatem optio eligendi suscipit. Quas ea illo
            iste minima dicta perferendis similique quisquam nesciunt molestias!
          </p>
          <p className="mb-4">
            Additional content to ensure page scrolls. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Earum libero laborum officia
            nesciunt numquam voluptatem optio eligendi suscipit. Quas ea illo
            iste minima dicta perferendis similique quisquam nesciunt molestias!
          </p>
          <p>
            Additional content to ensure page scrolls. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Earum libero laborum officia
            nesciunt numquam voluptatem optio eligendi suscipit. Quas ea illo
            iste minima dicta perferendis similique quisquam nesciunt molestias!
          </p>
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
      </div>
    </div>
  );
};

export default page;
