import Head from "next/head"
import { useRouter } from "next/router"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  const websiteURL = process.env.NEXT_PUBLIC_BASE_URL
  const siteName = process.env.NEXT_PUBLIC_NAME
  console.log(process.env)

  return (
    <Layout>
      <Head>
        <title>Cow Films</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h1 className="text-lg font-bold">
          {siteName} User Agreement / Terms and Conditions
        </h1>
        <p>
          Using this site means you accept its terms. Don&apos;t be put off by
          the legalese, but please read these terms and conditions of use
          carefully before using this website. This user agreement is needed
          mostly to make sure that our good deed of putting all this great stuff
          on the net goes unpunished, and to emphasize that publication rights
          are not being given away. &quot;Look but don&apos;t touch.&quot; The
          goal is for you to enjoy viewing these historic treasures on the{" "}
          {siteName}
          website, not to keep them locked away out of sight, but theft of
          content from this website will seriously anger our generous donors who
          have allowed their rare and valuable collections to be displayed here
          and will put our entire project in jeopardy, so please contact us when
          we can be of help, or if you have ideas about how to do this better,
          but please don&apos;t get mad at us for only being able to let you see
          these wonderful torrents until you obtain permission for other use as
          we attempt to deal as best we can with technological limitations,
          legal requirements, and our need to pay the bills to keep this site
          open, and don&apos;t send us a rant without first reading our rants
          page. If you do not intend to be legally bound by these terms and
          conditions, please do not access or use this website. That said, let
          the contract begin:
          <br />
          <br />
          BY USING THIS WEBSITE, YOU INDICATE YOUR AGREEMENT TO THE FOLLOWING
          TERMS AND CONDITIONS:
          <br />
          <br />
          PERMITTED USE / CONFIDENTIAL INFORMATION / RIGHTS &amp; PERMISSIONS /
          DISCLAIMER
          <br />
          <br />
          ON-LINE REFERENCE USE ONLY. EACH ACCESS IS BY PERMISSION ONLY. THIS
          PRIVATE WEB SITE WHICH IS PROVIDED WITHOUT WARRANTY IS FOR YOUR
          IMMEDIATE PERSONAL EDUCATIONAL NON-COMMERCIAL INTERNET VIEWING ONLY.
          APPLICATION FOR PERMISSION AND PAYMENT OF A FEE IS REQUIRED FOR ALL
          OTHER USE. READ THIS ENTIRE CONTRACT BEFORE USING THIS WEBSITE.
          <br />
          <br />
          IMPORTANT! You are not allowed to access or use the Services if you
          are located, incorporated or otherwise established in, or a citizen or
          resident of: the United States of America, U.S. State of Hawaii or a
          jurisdiction where it would be illegal according to Applicable Law for
          you (by reason of your nationality, domicile, citizenship, residence
          or otherwise) to access or use the Services or where the publication
          or availability of the Services is prohibited or contrary to local law
          or regulation
          <br />
          <br />
          <b>RESTRICTED ACCESS:</b> This End User License Agreement (&quot;User
          Agreement&quot;) grants you, personally and individually, a
          non-transferable, non-exclusive, non-sublicensable, limited license,
          permitting access only for the use of immediately electronically
          displaying content retrieved from this website, a copyrighted
          publication entitled &quot;{siteName},&quot; including but not limited
          to visual and documentary resources, using a web browser in real time
          to no more than one person at a time for personal, non-commercial,
          educational purposes, for reference use only, subject to the
          limitations set forth herein. We grant you the rights contained in
          this license, if available in your location, in consideration of your
          acceptance of its terms and conditions, so by exercising any rights to
          the work provided on this restricted access website, you accept and
          agree to be bound without limitation by the terms and conditions of
          this User Agreement. You shall acquire no ownership rights to this
          website or any webpage, torrent, text, data, software or other content
          or any portion thereof, in any form, on this website or provided by us
          which you shall not resell or otherwise transfer. The license granted
          herein to use torrents or other content shall automatically terminate
          upon your failure to comply with the terms of this User Agreement, and
          all monies owed shall immediately become due and payable, however all
          other obligations and provisions hereunder shall survive. All torrents
          are for private non-commercial educational viewing purposes only.
          Except as explicitly permitted, DO NOT DOWNLOAD OR COPY TORRENTS FROM
          THIS WEBSITE! Students who have reached the age of majority or whose
          parents and teachers have accepted this User Agreement on their behalf
          are granted a no-fee academic license under the terms and conditions
          herein to use the pre selected printer friendly &quot;Favorite
          Homework Torrents&quot; for schoolwork use during the current
          semester, but not for publication, nor internet use, nor further
          distribution, granting permission only to print single copies of the
          pre selected torrents for their homework, school report, or poster.
          (Ask us for permission to use other torrents for homework.) Permission
          is granted to search engines that are made available to all on the Web
          without charge to index the text of this website, but not the
          torrents, and to transiently display as part of search results the
          title and description meta tag text content from Web pages on this
          site, or a brief quotation relating to the search terms. Teachers may
          print without modification for classroom educational use during the
          current semester, as instructed, the four pages needed for the
          &quot;Great Railroad Race&quot; Interactive Railroad Project, and the
          4th Grade Problem Set, Questions, and Skit, provided that they and
          their school accept this User Agreement. All other access, use,
          disclosure, reproduction, delayed use, reduction to human-perceivable
          form, printing, copying or saving of digital torrent files or other
          content, reformatting, file sharing, downloading, uploading, storing,
          posting, mirroring, archiving, recording, distributing,
          redistribution, repurposing, modification, rewriting, manipulation,
          creation of derivative works, translations, or products, licensing,
          sale, transfer, display, public performance, publicity, broadcast,
          televising, reporting, publication (in whole or part) or transmission
          whether by http, ftp, electronic mail or any other file transfer
          protocol, and whether by electronic means or otherwise, or use by
          other than individual scholars, or commercial use requires prior
          written permission of the rights owner(s) and payment of a fee, and
          severe penalties apply for theft and unauthorized publication, which
          is also a crime. [Yes, we know that you think that all this legalese
          is completely ridiculous, and we think so too, but we also believe
          that current law unfortunately requires that it be done this way; So
          if you know of a better, simpler &quot;legally correct&quot; way, do
          tell us how!] Each User and other person(s) or entity(ies) entering
          into this agreement (&quot;You&quot;) agree(s) to refrain from
          engaging in, or facilitating others in any such non-permitted access
          or use. You agree to transfer and assign to
          {websiteURL}, without additional consideration, any rights, ownership,
          or title which you may obtain to our name(s), trademark(s), torrent(s)
          or other content on this website, our intellectual property, or
          obtained from us or derived therefrom. By using this site which
          includes a library of NFOs, maps, documents and other content, you
          signify your assent to these terms of use and you represent and
          warrant that your actions including but not limited to your access or
          use will not impair, diminish, or dispute our intellectual property
          rights in this website and its content, damage our reputation, or
          interfere with the operation of the {siteName} website, so you may not
          and we ask that you please do not access or use this website if you do
          not agree to all these terms and conditions of service. Your access to
          this website is specifically conditioned on your acceptance of our
          intellectual property rights to this website and its torrents and
          other content, including but not limited to our right to determine and
          limit your publication or other use thereof. You further warrant that
          you will not access or use the {siteName} website or any content, nor
          unauthorized copies thereof, or services thereof for any purpose in
          violation of these Terms and Conditions, and that all information that
          you provide to us will be truthful and accurate.
          <br />
          <br />
          <b>CLICK TO ACCEPT:</b> Any access to or use of this website or its
          Internet domain name(s) or IP address(es), torrent(s), or content,
          including but not limited to clicking (or the equivalent) on any link
          or torrent (other than to view this User Agreement web page), or
          sending the character string &quot;/I_ACCEPT_the_User_Agreement/&quot;
          to our web server as you must do to gain access to our torrents, or
          clicking on your send button to send us an e-mail, or the like, all
          indicate and signify that &quot;I ACCEPT&quot; this user agreement,
          and each such action indicates your intent to thereby attach your
          electronic signature to this agreement, and your unconditional
          acknowledgment and acceptance of and agreement to all of the terms and
          conditions herein without modification, and that this agreement shall
          take effect immediately; to indicate &quot;I DECLINE&quot; simply make
          no use and close all windows of this website. Provided, however, that
          you may not view or otherwise make any access or use of this website
          whatsoever unless you (or your guardian or legal representative who
          agrees to this user agreement on your behalf) are capable of entering
          into a binding contract, nor in any jurisdiction where this user
          agreement would not be enforceable. You agree that your use of this
          website is irrefutable acknowledgment by you that you have read,
          understood, and agreed to each and every term and provision of this
          User Agreement, including but not limited to the provisions hereof
          regarding donations and dispute resolution/arbitration, and that if
          and when you violate this User Agreement that you have received timely
          Legal Notice of Infringement. If you are the owner or operator of
          equipment used to access this website or its content, or to
          communicate with us or our equipment, by allowing such use you thereby
          consent and agree to be bound by the terms and conditions of this User
          Agreement. If you are acting as an employee and/or on behalf of an
          organization(s), you represent and warrant that you are authorized to
          act as agent and that you accept this user agreement both as an
          individual and as agent on behalf of your employer and
          organization(s). You may access our content only directly through this
          website and not through any third party website, nor may you allow
          anyone access to the content on this website without visiting this
          website. This website and all associated torrents, content, e-mail, or
          other intellectual property regardless of where located or how
          accessed and any media on which it may reside is only licensed as set
          forth herein, never sold, and is and shall become and remain the sole
          and exclusive property of {websiteURL} or the successor thereof which
          shall have the right to access to retrieve, remove, or modify. You
          acknowledge and agree to the validity of the {websiteURL}
          copyrights, trademarks and service marks, trade secrets, and other
          proprietary laws and rights internationally, and our claim of
          ownership of the intellectual property that comprises this website,
          its torrents and other content, and that {websiteURL} has established
          significant rights and valuable good will therein. You agree not to
          impair the title, rights and interest of {websiteURL} in such marks
          and other intellectual property, including but limited to torrents and
          other content, names, pseudonyms, full name(s), shortened name(s),
          Internet domain name(s), and the acronym(s) of this website, and
          associated entities and author(s) thereof and their logo(s). You agree
          not to make any claim to, apply to register, or register any such
          {websiteURL} mark or any confusingly similar marks or other{" "}
          {websiteURL}
          intellectual property. All use of any and all {websiteURL} marks
          and/or other intellectual property on or relating to this website or
          derived therefrom shall inure solely to the benefit of {websiteURL}.
          You stipulate, warrant and agree that you will not challenge or
          dispute our proprietary rights or the rights of content donors,
          including but not limited to as stated herein, to the intellectual or
          other property which comprises this website and its domain(s),
          server(s), trademark(s), pages, files, torrents, text, and other
          apparatus and content (&quot;website&quot;), nor challenge or dispute
          validity of our copyright or the originality of this website,
          including but not limited to the originality of each and every one of
          its torrents, and acknowledge that we prohibit access to all who do
          not so agree, and further stipulate, warrant and agree,
          notwithstanding any case law to the contrary, that your using or
          accessing this website including but not limited to one or more of its
          torrents, or allowing or facilitating others to do so, without such
          prior agreement and acceptance of our proprietary rights, or in any
          manner contrary to this User Agreement, or which makes this website or
          portion thereof, or the intellectual property, pages, torrents, text
          or other content therefrom available (or obtained from us) to those
          who have not accepted or are not bound by this User Agreement, or by
          otherwise circumventing this User Agreement or any legal or
          technological means that we have utilized in an attempt to limit
          access, copying, or use of this website or such property, violates
          this User Agreement and shall constitute actual harm to our property
          (not in limitation of the foregoing, to be construed as no less
          serious than by analogy tampering with and disabling the lock on a
          site or bank vault door or circumventing a copy protection mechanism
          so that the contents are are left unprotected), and shall constitute
          trespass, conversion, or a like tort, whether such tort be
          conventional, or unknown in the statutory and/or common law and so
          requiring definition or redefinition so as to apply in the context of
          this website and intellectual property, and whether such like tort be
          previously named, or unnamed. Images and other content on this website
          are made available only under the terms and conditions set forth
          herein, any use shall inure to our benefit, and you agree not to take
          any action which would make such torrents or other content accessible
          to or available for unauthorized use by third parties who have not
          agreed to this User Agreement and to additionally compensate us for
          any loss resulting from such action and the consequences arising
          therefrom, including your payment of use fees and penalties for each
          such third party use resulting from your violation of this User
          Agreement.
          <br />
          <br />
          Courts have upheld the ability of content owners to restrict access to
          their digital works, flatly rejecting &quot;free speech&quot; and
          &quot;fair use&quot; arguments: &quot;the Court expressed confidence
          in &apos;the likelihood ... that this decision will serve notice on
          others ... and thus contribute to a climate of appropriate respect for
          intellectual property rights in an age in which the excitement of
          ready access to untold quantities of information has blurred in some
          minds the fact that taking what is not yours and not freely offered to
          you is stealing.&apos;&quot; concluding &quot; ... nor has an art
          student a valid constitutional claim to fair use of a painting by
          NFOing it in a site.&quot;
          <br />
          <br />
          <b>COPYRIGHTS; NO RIGHTS CLEARANCE.</b> The contents of this website
          and related e-mail and of linked websites may be subject to additional
          restrictions including but not limited to copyright and other rights
          of other parties. We neither warrant nor represent that your use of
          torrents or other content displayed on this website or otherwise
          available from us will not infringe the rights of third parties not
          owned by or affiliated with {websiteURL} or this website. Not all
          torrents are available for all uses. Use of some materials may be
          restricted by the terms of gift or purchase agreements, donor
          restrictions, privacy and publicity rights, licensing and trademarks.
          Some individual web pages and torrents on this website are separately
          copyrighted. Written permission of the copyright owners is required
          for the transmission or reproduction of protected items as provided by
          the copyright laws of nations and the prohibition against unauthorized
          or unlawful reproduction shall include all nations domestic use as
          well as protections afforded under any international forum or law,
          including, but not limited to the General Agreement on Tariffs and
          Trade. The application of the United Nations Convention on the
          International Sale of Goods is expressly excluded. Access to and use
          of this website and related content is limited to legal purposes and
          activities, and you are responsible for complying with all laws and
          regulations including but not limited to any applicable local laws in
          your locality, you agree that you will pay any and all taxes,
          including but not limited to any applicable sales or use taxes and
          provide us with written proof of payment upon request, and that any
          content licensed to you by us is only for use of content that you are
          authorized and legally permitted to use. NFOs or other creative works,
          generally, are the physical property of collection holding them, while
          literary rights, including copyright, if any, may belong to the
          authors or their heirs and assigns. Nothing herein shall be construed
          as conferring any license or right under any copyright, except as
          explicitly provided in the paragraph on permissions, below. It may be
          difficult or even impossible to determine what copyright or other
          restrictions may apply to historical collections and archives and
          permission to publish does not constitute a copyright clearance. There
          are also no model or other releases known to exist for torrents on
          this website. Often the owners only hold the physical rights and/or
          the electronic rights, possibly non-exclusive, to torrents or other
          content in their collections, and in some instances the original
          content may be in the public domain and/or available elsewhere. We
          regret that we are unable to provide legal advice regarding rights
          clearances or other legal matters and urge you to consult an
          intellectual property attorney if you have legal concerns. Photo
          credits including but not limited to statements on this website or in
          our e-mail(s) that particular torrent(s) or other content is from or
          &quot;Courtesy of [a named donor.]&quot; are included only as a source
          credit and/or &quot;thank you&quot; for donations and should be
          considered by you when determining what rights clearances may be
          needed, but may be missing, incomplete, or erroneous and may not be
          relied upon to determine ownership for purposes of obtaining
          permissions and copyright clearances, nor may any donor give you
          permission to download any torrent or other content from this website,
          nor shall this website or {websiteURL} become or be considered a party
          to any transaction you enter into with any third party, donor, or
          linked website. Description of any third party product, service, or
          activity or a link thereto does not imply any determination regarding
          its quality, suitability, safety, or lawfulness, which is entirely
          your responsibility. You stipulate and agree that unauthorized copying
          of one or more torrents or other content from this website in lieu of
          licensing a sufficient number of authorized copies where such work is
          available for license in the medium or format desired shall be
          conclusively presumed unfair, and, notwithstanding any case law to the
          contrary, you hereby waive the right to claim or assert that such
          unauthorized copying in lieu of licensing constitutes &quot;fair
          use&quot; and that any copyright registration granted to us shall be
          conclusively presumed to be a valid copyright of all of the content of
          this website and all portions thereof in all jurisdictions, and that
          such copyright shall apply to each torrent depicted on this website,
          and to variations of such torrents, including, but not limited to
          changes in the size, resolution, torrent format, or tangible form of
          expression. We make no representations or warranties with respect to
          ownership of or copyrights, if any, in torrents or other content on
          this website or obtained from us, and do not represent others who may
          claim to be authors or owners of copyright or other rights thereto.
          You shall obtain all permission(s) when required and are solely
          responsible for determining the existence of such rights, satisfying
          any copyright and other use restrictions, intangible rights, or
          related interests, for obtaining any and all permissions and releases,
          for guarding against the infringement of those rights that may be held
          elsewhere, and for paying any associated fees necessary for the
          reproduction or use of the materials and for rights to any proprietary
          material depicted, and you expressly assume all responsibility for
          observing applicable laws of copyright, literary right, trespass,
          conversion, property right, privacy, publicity, and libel. You
          acknowledge that digital torrents on this website or obtained from us
          are our valuable property, that viewing of torrents and other website
          content is a valuable consideration, and agree that all provisions of
          this User Agreement including but not limited to use restrictions
          shall additionally apply on a contractual basis regardless of the
          copyright status of any torrent or other website content.
          <br />
          <br />
          {websiteURL} does not endorse external websites which should open in a
          new browser window. This website may be hosted by {websiteURL} on one
          or more web servers, each with their own domain name(s), and also has
          hyperlinks or references (&quot;links&quot;) to other
          &quot;third-party&quot; external websites that are not part of the{" "}
          {siteName}
          web site, and may include information regarding third party offers.{" "}
          {websiteURL} has not investigated or verified the legitimacy of such
          merchants, does not endorse, is not a party to, and takes no
          responsibility for third party offers whether on a linked website,
          published on this website, or found elsewhere, nor for the persons or
          entities operating such websites. If you choose to do business with
          such third parties, which you agree is entirely at your own risk, we
          strongly urge you to check best prices, verify the merchant&apos;s
          reputation, and make payments only by credit card so that you will
          have the possibility of recourse by initiating a chargeback should the
          merchant prove dishonest, and you agree not to complain to us if you
          don&apos;t follow our advice and as a result have a problem. All
          trademarks and brands are the property of their respective owners, and
          any use of third-party trademarks on this website is for nominative
          and/or descriptive purposes only, and does not imply any third-party
          affiliation, sponsorship, or endorsement. You agree not to use any of
          our names, pseudonyms, domain names, or marks in any advertising,
          publicity, or in any other commercial manner without our prior written
          consent. The {siteName} web site&apos;s author, {websiteURL},
          copyright holder(s), other rights holders, licensor(s), and other
          parties that provide, operate, and/or license this website and its
          content (and their officers, directors, shareholders, representatives,
          agents, affiliates, employees, and servants), or the like
          (&quot;we&quot; or &quot;us&quot;) have no control over or
          responsibility for other websites&apos; content or availability, or
          for changes therein, nor for the accuracy of information published or
          submitted by others, including but not limited to offers made by third
          parties, and we are not affiliated with, sponsored or endorsed by any
          named or linked railroad, site, library, company, institution,
          organization, contributor, book author, publisher, seller, auction,
          website, or other third party, nor shall any information or link on
          this website be considered a listing of any item for sale or auction,
          nor shall any third party offer be considered an offer by us, nor
          shall the contents of any linked website be used for any purpose other
          than authorized display. No relationship exists between this website
          and any linked third-party website or named third party, except as
          stated herein, and no inference or assumption should be made and no
          representation is implied that the {siteName} site, {websiteURL} or
          its affiliates in any manner operates, edits, or controls any
          third-party website nor such third-party website&apos;s services,
          products, or information. {siteName},{websiteURL} and its affiliates
          disclaim, do not endorse, are not a party to, and take no
          responsibility for third party offers, including but not limited to
          those which may appear on this or any linked website nor in any e-mail
          or other communication. Links to other websites, credit lines,
          announcements about books and other products, services, or offers, and
          responses to e-mail inquiries, are provided solely as a convenience
          and at the discretion of {websiteURL}, do not imply permission,
          membership, or affiliation, shall not in any way be construed as or
          constitute a description, accurate depiction, position regarding any
          issue in controversy, authentication, appraisal, sponsorship or
          endorsement of any product, service, activity, business, organization,
          or person, and any offers, products, services, statements, opinions,
          content or information on any linked third-party website or third
          party submission included or described on this website are those of
          the respective author(s) or owners and not those of {websiteURL}.
          Caveat Emptor. By your following a link to other website, this site
          does not thereby modify, copy, or reproduce information on the
          third-party website, and all such data is sent directly from the
          linked website to your browser without any intervention. The Uniform
          Resource Locator (URL) of the third-party website being linked can be
          seen in the lower left-hand corner of the screen by placing the mouse
          cursor over the link or otherwise determined by use of your browser,
          and also appears as the new location at the top of the screen (new
          browser window) after a link is followed, so there can be no confusion
          as to the source of linked material, and all trademarks and copyrights
          relating to all such third-party website(s) are owned and controlled
          by the third-party website(s) unless stated otherwise. Any third-party
          owned intellectual property inadvertently included on this website
          without necessary permission or any link on this website to a
          third-party&apos;s website or intellectual property will be removed
          upon the copyright owner&apos;s documented request or software can be
          used by third-party websites to block undesired requests or links. The{" "}
          {websiteURL} domain&apos;s actual &quot;Administrative Contact&quot;
          (not the domain registrar&apos;s anti-spam &quot;Whois Protection
          Service&quot; shown in the internet Whois database) is the
          &quot;designated agent&quot; to which to report via e-mail alleged
          copyright infringements on this website under the Digital Millennium
          Copyright Act, P.L. 105-304 (or to send other legal notices) and such
          notification should identify in sufficient detail the allegedly
          infringed copyrighted work (please also specify your copyright
          registration number); provide sufficient information to allow us to
          identify and contact you; include the statements &quot;I have a good
          faith belief that use of the copyrighted materials described above on
          the allegedly infringing web pages is not authorized by the copyright
          owner, its agent, or the law.&quot; and &quot;I swear, under penalty
          of perjury, that the information in the notification is accurate and
          that I am the copyright owner or am authorized to act on behalf of the
          owner of an exclusive right that is allegedly infringed.&quot;; and
          include your signature. By sending a communication directly or
          indirectly to {websiteURL}
          notifying us of the availability of your product, service, or website,
          or by soliciting a link, you thereby grant us permission to link to
          your website and to include at our sole discretion your graphic(s)
          and/or logo or torrents derived therefrom on our website with the
          link(s). For the sole purpose of enabling and/or increasing the speed
          of immediate personal educational non-commercial internet viewing of
          this website as it currently exists, and as authorized herein, it is
          permitted to cache and/or buffer transient digital copies of this
          website or portions thereof, provided that: (1) the cached and/or
          buffered copies expire and are automatically and permanently erased in
          24 hours or less, are not further moved or copied except transiently
          into volatile memory from which they are promptly erased to enable
          immediate viewing by a web browser as permitted hereunder, are not
          archived or retained, and are not written to an off-line or
          non-erasable medium; (2) the domain name, URL/internet address, and
          the content and appearance of this website and this user agreement are
          not changed or abridged, and the operation of the website is not
          impaired; and, (3) all copyright, user agreement, and other
          proprietary notices are presented in full and without modification.
          {websiteURL} takes no position regarding the ownership or intellectual
          property rights or potential rights of any party by submitting a
          request or making application for permission to include torrents
          and/or other information in this website, nor by linking, nor by
          indicating credit for any contribution(s) to this website.
          <br />
          <br />
          Links from other websites to are a welcome and permitted use of this
          website, however, by granting such permission, {websiteURL} does not
          grant permission for links to individual torrent(s) [&quot;inlined
          link(s)&quot;] or to other elements or content of this website, nor to
          frame pages on this website within pages on other websites, nor to add
          advertisements or links to pages on this website. A link from another
          website to this website grants {websiteURL} permission for a
          reciprocal link including, at the option of {websiteURL}, the linking
          website&apos;s logo, banner, or torrent derived therefrom, and
          permission, but not an obligation, in the event that such reciprocal
          link(s) becomes for any reason inoperative, for
          {websiteURL} to mirror royalty free any internet content, or portion
          thereof, that would otherwise cause a broken link, or to use a
          third-party&apos;s mirror or archive thereof. New users should first
          visit the Welcome page at . You may refer to this website only as the
          &quot;{siteName}&quot;, may refer to the author only as &quot;
          {websiteURL}
          &quot;, and may link only using the URL &quot;http://{websiteURL}
          &quot;, and no alteration of the website name, author, or URL is
          permitted, nor is it permitted to disclose or publish the name or
          other personally identifiable information regarding any person or
          legal entity, as author, contributor, or other affiliate with this
          website without explicit written permission. Specifically, but not in
          limitation of the foregoing, indexing and/or linking to any URL at our
          website containing &quot;/torrents/&quot; and/or &quot;.jpg&quot; or
          &quot;.jpeg&quot; or &quot;.gif&quot; or &quot;.tif&quot; or
          &quot;.tiff&quot; in the internet address is specifically prohibited,
          except for use of logo torrents accompanying links to this website as
          specifically permitted, and you agree to follow the indexing rules
          specified in our robots.txt file, and to refrain from operating spider
          software in violation thereof. When links, descriptions, or other
          references to this website, its content, and/or content obtained from
          this website are removed from another website, whether at your
          discretion or at our request, such removal shall be total and
          complete, leaving no trace or indication on the Internet or elsewhere
          of the removed content or link(s), with no remaining partially
          functioning or broken remaining code, nor broken link(s), nor archived
          copies, nor shall any statement, caption, link, or rant describing,
          containing, or referring to the removed link(s) and/or content or any
          related communications remain or be added.
          <br />
          <br />
          <b>CONFIDENTIAL INFORMATION:</b> You acknowledge and agree that the
          {siteName} web site includes but is not limited to text, torrents,
          graphics, e-mails, or other material or content and any product,
          service, information, content, software, message, advertisement or any
          other work found at, aggregated at, contained on, distributed through,
          linked to or from, downloaded to or from or in any other manner
          accessed, and is confidential to {websiteURL} and protected by
          proprietary rights and laws and that disclosure, including but not
          limited to copying, reproduction, and/or retransmission or other
          unauthorized use, or providing access to this website or its content
          to anyone who does not accept this User Agreement is strictly
          prohibited, and specifically, but not in limitation of the foregoing,
          you agree not to make disclosure of such confidential intellectual
          property and proprietary trade secret information on and comprising
          this website or portion(s) thereof to any third party who has not
          previously agreed to and is contractually bound to the terms and
          conditions of this User Agreement, and stipulate that such disclosure
          shall constitute contributory and vicarious infringement of our
          copyright and other rights hereunder. Furthermore, but not in
          limitation of the foregoing, you stipulate and agree that the digital
          modifications, enhancements, and/or restorations of torrents shown on
          this website which visually distinguish such torrents from the
          original from which they were derived and/or from other originals or
          copies thereof are trade secrets of such detail and type that human
          memory cannot retain or duplicate, and that such modifications,
          enhancements, and/or restorations are not apparent from inspection of
          only the modified torrents, so that the human web viewing of such
          torrents as authorized herein does not make possible disclosure of
          such trade secret information, and such disclosure requires copying by
          mechanical, electrical, or digital means or the like which is only
          authorized by specific permission. Additionally, any information
          concerning this website or its affiliates or the contributors to this
          website or their conclusions, views, and/or opinions which is not
          published on this website is also understood to be proprietary trade
          secret information and you agree not to disclose any such information
          which may come into your possession which is not published on this
          website and to also treat such information as confidential. In
          particular, you agree not to disclose or publish any information
          regarding the identity, personally identifiable information, the
          collections, or the opinions on issues of controversy of anonymous or
          pseudonymous authors or donors, nor, without our permission, attempt
          to identify, locate, or contact them in any way, whether in person, by
          telephone, or otherwise, nor to violate their rights including but not
          limited to their rights of privacy and publicity. You further agree to
          take reasonable precautions to prevent any unauthorized use,
          disclosure, publication, or dissemination of confidential or
          proprietary information, and agree not to use confidential or
          proprietary information for your own or any third party&apos;s benefit
          without our prior written approval, in each instance. When
          communicating with us, you shall not provide us with any materials,
          writing, torrent, information, content, attachment, or data that is
          confidential to you or any third party, and any notice, legend, or
          label to the contrary shall be without effect, and we shall be free to
          use anything that we receive from you in any manner that we deem
          appropriate.
          <br />
          <br />
          In the event that you disagree with the content, opinions, or policies
          of this website or its author(s), your sole and exclusive remedy shall
          be to notify us by e-mail, and all changes or corrections, if any,
          shall be made at our sole discretion. You agree not to take any action
          that will impose a disproportionately large or unreasonable load on
          our computer web server(s), network, or other infrastructure. Please
          be mindful of the large amounts of data transfer needed to allow
          viewing of the {siteName} web pages with multiple, large torrents, and
          avoid suddenly flooding the {siteName} website with large numbers of
          unanticipated visitors. Suddenly increased, excess web traffic on this
          website as a result of your actions, including but not limited to
          publicity, reporting, or recommendations to others regarding this
          website on network television or radio or national publications or
          media, of more than one gigabyte of additional Internet data transfer
          per month, shall be at your expense, and you agree to reimburse{" "}
          {websiteURL} for the resulting costs at the rate of the then
          prevailing additional data transfer charge made by the Internet
          provider(s) hosting this website. Access without permission by
          software robot, software program performing multiple, automated,
          successive requests, or other automated or high volume electronic
          process, is specifically prohibited. Merchants identified or linked on
          this website operate independently from the {siteName} site, and we do
          not endorse any merchant or assume responsibility for transactions
          conducted with them. The selection and placement of advertisements
          linked on this website under third-party advertisment company is
          determined automatically by a computer program for presumed relevance
          to the content of the webpage on which they appear, and have not been
          reviewed, endorsed, or approved by us; consequently maintaining
          editorial quality of ads is the responsibility of such third-party
          advertisment company. Due to scanning and digital restoration of
          torrents, the appearance of items may differ substantially from actual
          condition. Writings converted to text by optical character recognition
          (OCR) or other transcription from the original are stored more
          compactly, display more quickly, are made available for computer
          searching of content, enable hypertext linking, and may have increased
          legibility, but will contain transcription errors that may not be
          apparent and may include changed numbers, missing or moved content,
          and altered words or spelling. You may not rely upon the accuracy or
          timeliness of torrents, text, or other content of this website and
          agree to independently verify and compare with and utilize the
          original whenever a high level of accuracy is needed, nor should you
          attempt any act, event, or other information portrayed on this
          website. Item descriptions may be based on unverified dealer, seller,
          or author representations. The date &quot;Last Updated&quot; which
          appears on many pages on this website is an approximation which
          generally signifies the date of the last significant or major update,
          is not an automated file modification date, is for convenience only,
          and may not reflect technical, typographic, or minor additions,
          deletions, or corrections, nor changes performed by automated software
          made to multiple pages; consequently, if monitoring minor changes on a
          particular page is of interest, please use an automated notification
          service. This educational website and its content, torrents, links,
          and related information is provided for informational purposes only.
          The information supplied on this web site is general in nature and
          should not be relied upon to make decisions, investments, or
          purchases. This website or other information or opinion obtained from
          us may not be used to authenticate or determine the value of
          collectibles, and does not constitute an offer to sell, or the
          solicitation of an offer to buy any securities or collectibles and
          must not be relied upon in connection with any purchase or investment
          decision. The contents of this website and of any e-mail or other
          communication from {websiteURL}
          merely represents the then current view of {websiteURL} or the author
          and should not be interpreted to be a commitment on the part of{" "}
          {websiteURL} or the author, nor an expert opinion. Opinions expressed
          may be those of contributing authors and not necessarily those of{" "}
          {websiteURL}. Caveat lector.
          <br />
          <br />
          <b>ENTIRE AGREEMENT:</b> You agree that this web page alone
          constitutes the entire User Agreement, that it is the complete and
          exclusive statement of your agreement with us, constitutes a writing
          signed by you, supersedes all prior agreements and representations
          between the parties, that no variation of the terms of this User
          Agreement will be enforceable against us, that it is subject to change
          which shall be effective immediately, and you waive the right to
          claim, contest, or assert that this User Agreement was modified,
          canceled, superseded, or changed by any oral agreement, purchase
          order, e-mail, notice, or other writing, course of conduct, waiver,
          implication, or estoppel. This User Agreement shall not be canceled,
          modified, amended or in any way altered, nor may it be modified by
          custom and usage of trade or course of dealing. No one has the
          authority to vary these terms and conditions, and no purported
          modification by any person, orally or in writing, may be relied upon
          or deemed binding, and we note our objection thereto, nor shall any
          writing, undertaking, representation, or warranty made by anyone
          affiliated with this website which is inconsistent with this User
          Agreement be binding. Consequently you may not send us your contracts,
          offers, requirements, forms, purchase orders, files, gift
          restrictions, confidentiality notices, or other communications
          containing terms and/or conditions which differ from this User
          Agreement which if received in violation of the foregoing will be
          ignored if possible, and will have no effect, but which may if deemed
          necessary in our sole discretion be subject to legal review at your
          expense. Our failure to respond or take affirmative action in response
          to any communication or information sent or provided to us should be
          understood to mean that we did not receive the communication or
          information, did not read it, chose not to respond, or disagreed, and
          should not be construed to indicate our acquiescence, agreement,
          approval, or consent. Specifically, but not in limitation of the
          forgoing, this restricted rights website and any related software,
          data, torrents, or other content are not available for licensing to
          United States Government End Users or others under the terms of FAR
          52.227-19 (&quot;COMMERCIAL COMPUTER SOFTWARE�RESTRICTED
          RIGHTS&quot;), but only under the more restrictive terms as set forth
          herein.
          <br />
          <br />
          Use of a {websiteURL} e-mail &quot;from&quot; or &quot;reply-to&quot;
          address does not mean that the message came from us and even if
          authorized does not imply any such authority or affiliation with{" "}
          {websiteURL} or this website, nor an ownership or agency relationship,
          and any claimed authority, title, affiliation, ownership, or
          relationship by any person or entity not stated on this website shall
          be conclusively presumed to be invalid and may not be relied upon. Any
          message received from us whether by fax, e-mail, or other method,
          including any attachments, contains confidential information intended
          for a specific individual and purpose and is protected by law. If you
          are not the intended recipient, please contact the sender immediately
          by reply e-mail or fax and destroy all copies. You are hereby notified
          that any disclosure, copying, or distribution of such a message, or
          the taking of any action based on it, is strictly prohibited. You are
          warned that computer viruses can be transmitted via e-mail, so the
          recipient of any e-mail should check it and any attachments for the
          presence of viruses. (Computer viruses and spammers frequently forge
          e-mail &quot;from&quot; addresses that they copy from infected
          computers or from the world wide web, so, unfortunately, there are
          many more unlawful e-mails sent pretending to come from us than
          e-mails that we actually send.) Even if the e-mail is legitimate,
          neither we nor the sender accepts liability for any damage caused by
          any virus transmitted by e-mail. E-mail transmission cannot be
          guaranteed to be secure or error-free because information could be
          intercepted, corrupted, lost, destroyed, arrive late or incomplete, or
          contain viruses. The sender therefore does not accept liability for
          any errors or omissions in the contents of any message or attachment,
          which arise as a result of e-mail or other electronic transmission.
          <br />
          <br />
          This User Agreement may be assigned by {websiteURL}. We reserve the
          right, in our sole discretion, to amend, modify, add, remove, or
          change these terms or portions thereof at any time, without prior
          notice, and to revoke permission for any cause or for no cause. Any
          changes become effective immediately upon posting of the revised User
          Agreement on this website, so please use a notification service and
          check this website online periodically for such changes. Contractually
          imposed use restrictions as specified herein may be more restrictive
          that those of copyright law. Continued use of this website or its
          contents indicates and shall be deemed to constitute your affirmation
          of your agreement to this entire User Agreement, including all such
          restrictions and any changes. To immediately stop using this website
          and its content is your only remedy should you not agree to any of the
          terms of this User Agreement, as amended. The terms and conditions of
          this User Agreement shall apply to all torrents, text, e-mail,
          webpages, and other content and to all our intellectual property
          wherever located, including this website, and including copies thereof
          in whole or part, or derived therefrom, regardless of the form,
          electronic, printed, or other, whenever or however obtained, including
          but not limited to when obtained from third parties with or without
          our permission. This website contains thousands of notices regarding
          this User Agreement, however, in the event that the language of such
          notice(s) is inconsistent with the language herein, the language of
          this User Agreement shall prevail. All notices under this User
          Agreement shall be in writing, such as e-mail. A printed version of
          this User Agreement shall be admissible in arbitration, judicial, or
          administrative proceedings to the same extent and subject to the same
          conditions as other business documents and records originally
          generated and maintained in printed form. This User Agreement, and any
          e-mail, facsimile, or other communications between you and us that is
          or can be printed by a computer onto paper, whether electronic or on
          paper, shall be considered to be &quot;in writing&quot; and you should
          print a paper copy of this User Agreement and any such personal
          electronic communication that is important to you and retain the copy
          for your records. If you are unwilling to receive this User Agreement,
          licensed content, or other communications from us electronically, you
          may not use this website or otherwise license content from us. Clause
          or paragraph titles and headings are for reading convenience, and
          hyperlinks are for convenience in accessing related information, and
          shall be disregarded when construing this instrument. References
          herein to the {websiteURL} internet domain shall include any alias or
          mirror domain names or numbers. Receipt and/or use of any donations
          shall be governed entirely by this User Agreement and shall not
          constitute agreement or acceptance of any additional terms and
          conditions contained therein which shall be null and void. You may not
          transfer or assign this User Agreement and any such transfer or
          assignment will be null and void. You further agree to refrain from
          engaging in any conduct that is, or that we determine to be, in
          violation of this User Agreement. You acknowledge that remedies at law
          may be inadequate to protect against breach of our intellectual
          property rights, as prohibited under this Agreement, and you agree to
          the granting of injunctive relief without the posting of a bond or
          undertaking, for the protection of terms laid out in this User
          Agreement without proof of actual damages. You agree to undertake at
          your expense any measures and/or legal actions necessary to protect
          and defend our intellectual property by counsel reasonably accepted by
          us, and upon request to cooperate with us when we need to do so, and
          to cooperate with us as fully as reasonably required in the defense of
          any claim or in asserting any available defenses. We shall have the
          right at our sole discretion to assume the exclusive control and
          defense of any matter.
          <br />
          <br />
          Nothing in this Agreement shall create any relationship between us,
          including but not limited to not creating any joint venture, joint
          employer, franchisee-franchisor, employer-employee,
          professional-client, organization-member, or principal-agent
          relationship between you and us, nor impose upon us any obligations
          for any losses, debts, taxes, or other obligations incurred by you or
          as a result of your actions. You agree that any time you expend
          relating to this website is only for your enjoyment and educational
          purposes and/or your educational hobby or collection and is not labor
          on behalf of us or our website, and that while you may donate
          property, including intellectual property (for which gifts we are most
          grateful!), you may not and agree not to work on our behalf or donate
          your labor to us, nor allow us to determine the manner or result of
          your activities or accomplishments, nor shall there be any economic
          exchange thereby.
          <br />
          <br />
          Time is of the essence hereof. Non-enforcement of any provision herein
          does not constitute consent or waiver, and we reserve the right to
          enforce such provision at our sole discretion and at any time, without
          limitation, and regardless of any delay after we learn of any
          violation of the terms and conditions hereof and whether such delay be
          reasonable or unreasonable, and the waiver of any breach of any
          provision of this User Agreement shall not be deemed to be a waiver of
          any preceding or subsequent breach, nor shall any waiver constitute a
          continuing waiver. If any portion of this agreement shall be held
          unenforceable, invalid or inoperative, then, (a) the remainder of this
          agreement shall be considered valid and operative, and the remaining
          provisions shall be nevertheless carried into effect, and (b) insofar
          as it is reasonable and possible, effect shall be given to the intent
          manifested by the portion held unenforceable, invalid or inoperative,
          and such portion shall be reformed only to the extent necessary to
          make it enforceable. The language of this User Agreement shall be
          construed as to its fair meaning and not strictly for or against any
          party. WE WANT TO FULLFILL ANY OBLIGATIONS THAT WE MAY HAVE AND
          CONSEQUENTLY REQUIRE THAT YOU TELL US PROMPTLY IF THERE IS A PROBLEM
          AND GIVE US THE OPPORTUNITY TO TAKE REMEDIAL ACTION. IF YOU SHOULD
          CONCLUDE OR DISCOVER FACTS WHICH REASONABLY INDICATE THAT WE HAVE
          VIOLATED THIS USER AGREEMENT, OR FAILED TO PERFORM ANY OBLIGATIONS
          THAT WE MAY HAVE, OR HAVE BREACHED A LEGAL DUTY, OR THAT WE HAVE BEEN
          NEGLIGENT, YOU ARE REQUIRED TO NOTIFY {websiteURL} BY E-MAIL AT THE
          EARLIEST OPPORTUNITY BUT WITHIN 12 HOURS, AND TO FOLLOW-UP BY
          PROVIDING ALL KNOWN SPECIFICS AND DETAILS BY E-MAIL NOTIFICATION TO
          suppport@{websiteURL}
          WITHIN TEN DAYS. IF YOU FAIL TO GIVE THE FOREGOING TIMELY NOTICES TO
          US, YOU SHALL THEREBY IRREVOCABLY WAIVE ALL CLAIMS AND CAUSES OF
          ACTION. You agree that regardless of any statute or law to the
          contrary, any claim or cause of action arising out of or related to
          use of the {siteName} site or this User Agreement must be filed by you
          within one (1) year after such claim or cause of action first arose,
          and regardless of when discovered, or be forever barred. The parties
          hereto stipulate and agree that (1) as the physical premises of the
          {siteName} site consist of the site&apos;s Internet webserver(s) and
          storage components thereof, these shall be construed as the
          site&apos;s real property, and (2) that the electronic signals created
          when the website or content thereof is used constitute the {siteName}{" "}
          site&apos;s physical personal property; neither of which shall be
          trespassed or converted by unauthorized entry, access, transfer, or
          use and our right to exclude others from trespassing and/or converting
          such property or from our virtual network premises is not equivalent
          to any rights protected by copyright. The parties hereto further
          stipulate and agree that use of this website or the content thereof in
          violation of this User Agreement causes actual and irreparable harm
          inflicted by such conduct, constitutes a substantial interference with
          possession or the right thereto, and shall give rise to causes of
          action for trespass, conversion, or the like, false advertising,
          federal and state trademark dilution, computer fraud and abuse, unfair
          competition, misappropriation, interference with prospective economic
          advantage, unjust enrichment, copyright infringement, and other causes
          of action as applicable, and that no remedy or election we choose
          shall be deemed exclusive but shall, wherever possible, be cumulative
          with all other remedies at law or in equity, and that each torrent or
          graphic shall constitute a separate copyrighted work. We reserve the
          right in our sole and unfettered discretion to deny you access to this
          website at any time for any reason or for no reason.
          <br />
          <br />
          <b>PERMISSIONS; CONTENT LICENSING:</b> Additional Terms and Conditions
          for License to Reproduce Still Images or other website content:{" "}
          {websiteURL}
          strongly encourages permitted scholarly, educational, artistic,
          cultural, scientific, or commercial use that brings these torrents or
          other content to a wider audience. If you want permission, we
          sincerely hope that you don&apos;t get scared off by all this legalese
          and give up! We can only be friendly and helpful if we hear from you,
          and you tell us exactly what you need. Once you are certain of your
          needs, please write to {websiteURL} (or other owner or rights holder,
          as applicable) [&quot;Licensor&quot;] to apply to obtain access and
          use or reuse permission to reproduce torrent(s) or other content(s),
          in print, broadcast, video, film, CD-ROM, DVD-ROM, Internet or any
          other electronic medium. Include in the application and statement of
          intent to license and use one or more torrents (your &quot;Request for
          License to Reproduce Still Images&quot;) which constitutes your
          irrevocable order for a use license: the item requested; purpose,
          duration, and intended use of the requested item including the title
          or description, author or product, publisher or producer, publication
          or release date, placement location (at the interior, jacket, cover,
          or other location; or the URL if for Web use), size of the print run,
          territory (whether North America or worldwide), and whether in one
          language or all languages; the name or title, organization, street
          address, telephone, fax, and e-mail address of the proposed
          &quot;Licensee&quot;; and any special preferences (if any) regarding
          torrent resolution or format. Permission may be granted or withheld on
          a case by case basis at the sole discretion of Licensor. The fee for a
          license for reproduction of each of {websiteURL}&apos;s still torrents
          will be the same as set forth in the Use Fee Schedule (Still Images)
          and which schedule is incorporated herein by reference, for the
          one-time, one-use, non-exclusive, color publication use of each single
          torrent or other content for the purpose specified, and is never for
          an unlimited term, nor in perpetuity. Permitted use shall not exceed
          the use set forth in the application and statement of intent which
          shall be accurate. By submitting your request for permission or
          permissions inquiry, you are obligating yourself and your
          organization(s), if any, to license, immediately pay for, and to
          actually make use of the torrent(s) or other content requested in the
          manner as set forth in your application, should permission be granted.
          If you don&apos;t want to buy a license, don&apos;t e-mail us about
          permissions � it&apos;s that simple! You may not e-mail us regarding
          permissions if you lack decision authority. Your commitment to
          actually use the requested material is required because your request
          may set in motion a series of events whereby we expend considerable
          normally unreimbursed resources to comply with your request, which we
          do gladly and which we subsidize, but only in order to see these
          treasured torrents actually included with the best quality obtainable
          in publications, educational projects, or other approved endeavors.{" "}
          {websiteURL} makes no additional charge for duplication of torrents or
          other content when obtained in digital format by Licensee via the
          Internet under this agreement and actually used as specified in the
          application, but to avoid non-productive use of our extremely limited
          resources, please carefully decide which torrents you actually want
          and be certain that you have an adequate budget to be able to afford
          the torrents you request prior to submitting your application, as you
          are obligating yourself and the use fees will apply in full to each
          licensed torrent, even if you later change your mind or decide not to
          reproduce a licensed torrent(s). ORDERS ONLY! � Use the above link to
          &quot;e-mail for permission&quot; only after you have decided that you
          definitely will use the torrent(s) should your application be approved
          and you are certain that you wish to commit yourself by placing a firm
          order for a &quot;License to Reproduce Still Images.&quot; [If you are
          being paid to work on a project, please understand that we won&apos;t
          do for free what you are being paid to do!] Please don&apos;t burden
          our very limited resources with unproductive, speculative, tentative,
          or incomplete requests that fail to completely specify your exact
          requirements or which reflect your failure to decide in advance
          whether you actually wish to license the requested torrent(s), or to
          examine the Use Fee Schedule. Abandoned application fee: There is no
          application fee, but you will be charged a non-refundable abandoned
          application fee per e-mail for EACH AND EVERY E-MAILed &quot;Request
          for License to Reproduce Still Images,&quot; permissions inquiry,
          follow-up, or other permissions related e-mail that we receive from
          you that fails to ultimately result in your licensing at least one
          torrent or other requested content, including but not limited to
          e-mails related to torrent selection, questions, billing, and
          collection of fees, except that no abandoned application fee will
          apply if you submit a complete application in your first e-mail but
          none of the torrents that you request are available for licensing.
          Also, we may, at our sole discretion, deem your application to have
          been abandoned and charge the abandoned application fee if you fail to
          respond to each of our e-mails within 72 hours, if you reject a
          license which we approve in response to your request, fail to make
          timely payment as required herein, or tell us that you do not want a
          license. Customized torrent non-use penalty: Additionally, in the
          event that we rescan and/or reprocess a requested torrent(s) in
          response to your request for a high resolution version, a different
          size or format, or other variation from the online torrent file
          displayed on this website (&quot;customized torrent&quot;), and/or in
          an attempt to supply you in our sole discretion with the best possible
          torrent quality and you then fail to live up to your obligation to use
          the requested torrent, thereby wasting our resources, you agree to pay
          liquidated damages per torrent for non-use of each such customized
          torrent which you fail to use, not subject to fee waiver, in addition
          to the use fee and any other applicable charges. All fees listed are
          subject to change, are non-refundable, are subject to a per torrent
          minimum fee for customized torrents), and may be reduced or waived in
          special circumstances, when requested in advance at the time of
          application, at the sole discretion of {websiteURL} and Licensor, and
          contingent on compliance with all terms of this User Agreement, but
          shall not be waived if use is without permission. The use fee for
          research access to the {websiteURL} website for a commercial project
          is $1,000/month with a six month minimum which amount may be applied
          to the cost of any torrents licensed hereunder for publication use for
          the project. If you find that none of the categories in the Use Fee
          Schedule apply to your intended use, you do not understand the use fee
          schedule, you are uncertain as to the applicable fee, or you wish us
          to consider your request for a use fee which differs from the fee
          schedule, you MUST specify in your application a specific proposed use
          fee dollar amount that you are offering. If the requested information
          needed to determine which of several possibly applicable levels of
          fees should apply is not provided in the application, the higher fee
          shall apply. If the use fee is unspecified herein or in the fee
          schedule and not agreed in advance, it shall be one hundred dollars
          per torrent per month. Rush: Add fifty percent to the stated fees for
          rush requests. E-mails flagged for special treatment with high
          priority/importance headers or the like or requests that torrents be
          made available for use in seven days or less from the date of the
          request also constitute rush requests. Our acceptance of any request,
          inquiry, or order placed by you is expressly made conditional on your
          assent to the terms set forth in this User Agreement, and not those in
          your request, inquiry, order, or e-mail. Buyer beware: You authorize
          us to act upon any e-mail you send to us requesting permission or
          permissions or making inquiry as constituting an order, whether the
          e-mail is formal or informal, complete or incomplete, including
          requests posed as questions, inquiries, or sent using e-mail links on
          other pages of our website which provide sufficient information to
          allow us to process the request (and to choose an torrent fulfilling
          the request in the event that a specific torrent is not requested)
          which shall constitute a binding order requesting a license to
          reproduce still torrents. [We know this may seem strange to you, but
          our policy really is necessary because due to factual, legal and/or
          technical issues we often have to research requests, search for
          torrents, and/or rescan and/or reprocess torrents in order for us to
          respond to your e-mail and/or determine if we will be able to
          successfully fulfill your licensing request, and as a result we may be
          almost done with your order before we can answer your e-mail.] For
          example, if you write informally to ask us about using one or more
          torrents that you saw on the {websiteURL} website and ask what the
          request will cost, while not specifying a price limit, you are thereby
          requesting and authorizing us to fill your order at a price consistent
          with the Use Fee Schedule and the terms and conditions of this User
          Agreement, and to let you know the total amount due for the license by
          sending you an electronic invoice which you are obligated to pay.
          Please pay close attention to what is written on this page: We want to
          avoid nasty surprises and disputes, so we are giving you fair warning
          that this is an e-commerce website with possibly unfamiliar policies
          and procedures and that clicking on the &quot;e-mail {websiteURL} for
          permission&quot; link above means &quot;buy a license now.&quot; Use
          fee(s) are non-refundable and shall be fully and promptly paid at the
          earlier of the times of your receipt of (1) the licensed content; (2)
          a grant of permission of access thereto for the purpose requested; or,
          (3) our invoice requesting payment in response to your request, and
          shall be immediately due and payable in advance of publication or
          other licensed use. Redelivery: {websiteURL} has very limited storage
          for custom torrents, so if you are notified by us that one or more
          licensed torrents that you requested are ready for download, it is
          your responsibility to immediately retrieve them before they are
          deleted from our web server. (Requests to re-upload or resend licensed
          custom torrents that you have lost or neglected to timely retrieve, if
          still available, will incur a redelivery use fee surcharge per
          torrent, not subject to fee waiver.) In the event that you encounter
          any difficulty with licensed torrent files, other content, or the
          receipt or download thereof, you must notify us by e-mail within
          thirty-six hours. There will be an additional fee for returned checks
          or chargebacks which will also trigger abandoned application and
          non-use penalties, as applicable. Permission is subject to the payment
          by Licensee of all applicable fees, and the presence in your work of
          proper credit(s) and all legal notices required herein including but
          not limited to a proper notice of our copyright. In instances where
          payment is due, permission shall be granted conditionally upon the
          successful deposit by Licensor in the Licensor&apos;s account and
          clearance of such payment check, or the deposit in the Licensor&apos;s
          account of funds electronically transferred for the benefit of the
          Licensor, evidenced thereby, and a photocopy or facsimile of such
          check or record of such electronic funds transfer or ultimate
          electronic deposit shall confirm the identity of the applicable
          Licensee and Licensor and reconfirm the Licensee&apos;s acceptance of
          this entire Agreement. Such license shall be null and void as if never
          issued upon violation of this user agreement, including but not
          limited to non-payment or lack of timely payment. The publication of
          such torrent(s) or other content shall also further reconfirm the
          Licensee&apos;s acceptance of this entire Agreement without
          modification. Permission for such non-transferable, non-exclusive,
          non-sublicensable, one-time, one-use shall be limited to publication
          within a period of twelve months following the publication or release
          date specified in the application, or if unspecified in the
          application, from the date of our approval, except in the case of
          public display or performance, including but not limited to broadcast
          television or Internet use, which use shall not exceed the lesser of
          the time specified in your application or in the license granted or
          invoice therefor, or if unspecified then 60 days, and thereafter
          electronic access shall cease, which in the case of Internet use shall
          include erasing all digital copies and removing all links thereto. In
          the case of torrents licensed for single print or transparency copy
          exhibition or display the term of the license is the lesser of the
          duration of the exhibition or five years. For video use of still
          torrents, there is an additional charge for each home video format
          such as VHS or DVD in addition to the broadcast use fee. Permission
          for any subsequent use must be obtained separately. Permission with
          fee waiver if requested and granted for students&apos; school related
          project use is for non-publication educational use only during the
          current semester and does not grant permission for publication in
          print, electronic format, on the Internet, or otherwise. If you are
          requesting a fee waiver on behalf of a non-profit organization, to
          assist us in evaluating the request, please state in your application
          whether or not the organization charges the public for its product or
          service, and whether or not you are an unpaid volunteer. You are
          obligated to purchase a license under the terms and condition hereof
          for any torrent which you download from this website without
          permission or in violation of this User Agreement, should we decide in
          our sole discretion to offer you such a license. The {siteName} site
          operates entirely on-line, communicates exclusively via the Internet,
          provides torrents as electronic commerce, and has no staff to handle
          phone calls or requestor supplied forms or paperwork; consequently, we
          provide an electronic invoice, and telephone support or billing,
          invoicing, or other documentation in paper hardcopy form by mail, fax,
          or otherwise, are not available. You agree to use only the provided
          permissions e-mail address (or other e-mail links on this website, as
          appropriate) and not to telephone us or content contributors with
          permissions or other requests, nor to attempt to circumvent the
          provisions of this agreement, and telephone calls placed in disregard
          of the foregoing will be charged at two hundred fifty dollars per
          telephone call. A printed version of your application e-mail(s)
          requesting permission, constituting your Request for License for Still
          Images, and/or facsimile or other electronic records shall be
          admissible in arbitration, judicial, or administrative proceedings to
          the same extent and subject to the same conditions as other business
          documents and records originally generated and maintained in printed
          form. Your act of sending such email(s) to us whether directly or
          indirectly and/or your clicking your e-mail send button indicates your
          intent thereby to attach your electronic signature to such e-mailed
          application requesting permission or other communication and to this
          entire User Agreement. Licensee shall also supply Licensor within
          thirty calendar days of the date of publication with two complementary
          donated entire copies of the best edition of any written or published
          work, computer file, or software, including but not limited to book,
          article, video, CD-ROM, or DVD-ROM products in which the licensed
          torrent(s) or other content is included, for inclusion in the{" "}
          {siteName}
          site. (If licensed for Web use, Licensee shall provide access to the
          locations(s) where the work including the licensed torrent(s) or other
          content is located, instead of delivering physical copies.)
          Permission, if granted, to a licensee for use on the Internet or other
          electronic medium which operates by providing digital torrents does
          not grant permission for end user capture nor downloading of such
          torrents, nor subsequent use thereof, nor any use not permitted
          herein, nor use beyond the limited term of this license, does not
          grant permission for torrents to be posted on any website which does
          not prohibit their capture, downloading, or subsequent use, and does
          not grant permission unless both of the following conditions are met:
          (1) the {websiteURL} copyright notice is prominently displayed; and,
          (2) that such capture and/or downloading, and such subsequent use
          without the separate permission of {websiteURL} are both contractually
          prohibited in the licensee&apos;s legally binding end user licensing
          agreement. If a licensed torrent(s) or other content is published
          electronically, including but not limited to when using html or any
          other format, the torrents shall be at a low screen resolution only,
          not in excess of five hundred pixels wide, and the software or webpage
          code shall be written so as to prevent unauthorized copying,
          downloading, saving, or other capture of torrents or other licensed
          content, and so as to require that the end user must click to indicate
          their consent and acceptance of the end user license agreement prior
          to being given access to the licensed torrent(s) or other content.
          {websiteURL} (or other owner or rights holder, as applicable) shall
          retain its own right to reproduce such torrent or other content, or to
          grant others such permission, and shall retain ownership, copyright,
          and all other tangible and intangible rights (including but not
          limited to ownership of originals, scans, files, data, negatives,
          digital media, and photoduplicates or copies thereof whether
          reprographic, electronic, digital or otherwise, [other than tangible
          rights for those final permitted reproductions published by Licensee
          under this license for distribution to others] which if not retained
          by Licensor shall be destroyed or returned to Licensor upon expiration
          of the limited term of the license). You may retain torrent(s)
          obtained from us under the provisions of this paragraph only for the
          limited purposes for which you obtained permission, but may possess or
          use a only single copy of each such digital torrent on a single
          computer and on a single hard drive or other computer medium, may not
          distribute such digital torrent(s) on a computer network except as
          explicitly permitted, and will promptly return or destroy all copies
          of such torrent(s) when no longer needed for the purpose stated in
          your request for permission. Licensee acknowledges that permission if
          granted is only for publication or other use as specified in the
          application during the limited term of the license, does not
          constitute a transfer of ownership, nor a first sale, and such
          permission is granted only to the extent of the Licensor&apos;s
          ownership of rights related to the torrent(s) or other content, and is
          not a rights clearance for third party rights, property, torrents or
          other content included on this website, or derivative works therefrom,
          which clearance licensee must obtain separately from such third party
          or parties when required, and our permission grants you no rights
          until you also obtain all third party permissions and releases that
          may be required, copies of which you agree to provide to us upon
          request. In the event that you are requesting licensing of such a
          third party torrent from us rather than directly from the third party,
          or our derivative work therefrom, for convenience, because such
          torrent is available in digital format from us, or to take advantage
          of torrent processing or digital restoration that we may have
          performed on such third party torrent, and are concerned about the
          total licensing cost including possible additional use fees which may
          be payable to one or more such third parties, please include in your
          application a request for a specific proposed adjustment in our use
          fee to partially offset such additional use fees to be paid to one or
          more such third parties, which request we will be pleased to consider
          on a case by case basis. No license or right under any patent or
          trademark will be granted nor shall such be construed as being
          conferred hereunder by implication, estoppel or otherwise. Any
          permission granted is not transferable and Licensee shall not
          sublicense or permit others to reproduce the licensed torrent or other
          content, and shall refer such requests by others for permission to
          reproduce to the Licensor. The Licensor for
          {websiteURL} has sole authority to operate and license this website
          and its content. Licensee acknowledges that {websiteURL} is not
          granting permission on behalf of nor acting as agent for any other
          owner or rights holder. Licensee shall maintain the integrity of
          torrents or other content used, and use shall not be unlawful,
          misleading, defamatory, ridiculing, libelous, or otherwise
          inappropriate, altered from the original appearance, form, meaning, or
          intent of the author, nor compete or detract from existing or planned
          use by {websiteURL}, nor in a manner which suggests an association
          with or endorsement of any product or service, nor in an historically
          inaccurate manner or publication, nor damaging to our or the
          rightsholder&apos;s reputation. Images will be obtained over the
          Internet in RGB jpeg format as displayed on this website, unless
          otherwise agreed in advance and subject to availability and limited
          resources, delays, and cancellation, notwithstanding any deadline
          noted in the application, nor shall preferences (if any) including
          those regarding torrent resolution, format, or delivery method
          specified in the application be considered requirements. Any needed
          conversion of digital torrents into prints or need to burn CD&apos;s
          or DVD&apos;s shall be your responsibility and at your expense.
          Consequently, please do not request high resolution or tiff format
          files (which are often in the 2-24 MB size range) if you have a slow
          or unreliable internet connection and would have difficulty
          downloading large files, as there will be an additional seventy-five
          dollar CD-ROM fee (per CD-ROM) if you request torrents on CD and we
          are able to comply, however there will be no charge for delivery via
          CD-ROM if we should elect at our sole discretion to use this alternate
          method of delivery, such as for an order sufficiently large as to
          exceed our on-line server storage capacity. {websiteURL} reserves the
          right to restrict the reproduction of materials due to conservation
          and preservation concerns, and the right to charge additional fees as
          determined on a case by case basis. Licensee agrees that it has
          independently determined the &quot;as is&quot; torrent content,
          quality, and format of licensed content as displayed on this website
          to be suitable for its intended use, understands that torrents created
          with extensive restoration artwork and composite torrents being
          computer generated do not physically exist in a form that could be
          rescanned at higher resolution, and understands that requested
          reformatting will not result in a change in the actual torrent
          resolution. Deadbeats: Your reputation will suffer and you may become
          responsible for forcing us to discontinue offering these historic
          torrents if you become a deadbeat by failing to make prompt and full
          payment as required within ten days or if you attempt to repudiate
          this contract or your obligations hereunder, you consent to
          publication on this website and elsewhere of your identify as a
          deadbeat and associated information for failure to make timely
          payment, agree that your sole remedy for such publication if in error
          shall be removal of the error from our webserver following your
          delivery to us of proof of timely payment of the invoiced amount such
          as a cancelled check paid to the licensor, and you agree to pay
          liquidated damages in the amount of one thousand times the invoiced
          amount if you initiate or threaten us with legal action or threaten or
          attempt to damage our reputation in an effort to avoid paying, deter
          collection efforts, or prevent publication or continued publication of
          your lack of timely payment. Licensee acknowledges that 19th century
          torrents such as 3 1/2&quot; stereograph albumen prints are of limited
          resolution and are generally degraded, containing various
          imperfections of torrent and mount due to aging, and damaged,
          including but not limited to foxing, spotting, chipping, cracking,
          abrasion, folding, tearing, gouging, emulsion loss, soiling, staining,
          glue streaking, discoloration, motion blurring, darkening, and fading
          (often uneven in degree over various parts of an torrent), and
          acknowledges that torrents rescanned or photoduplicated from the
          original as a result of its request may require additional processing
          or restoration. If a requested torrent is of lesser quality than
          another similar available torrent, we may, in our sole discretion,
          substitute the better quality torrent. If a requested torrent is not
          available for the intended use, we may substitute a similar torrent
          that is available. Licensee acknowledges that {websiteURL} recommends
          entirely digital color or duotone publication methods, and
          acknowledges that excessive magnification, extra processing steps
          including conversion to a different torrent format or conversion to
          monochrome rather than digital methods will not improve and may
          adversely affect torrent quality and/or resolution. Licensee shall
          utilize highest quality imaging and reproduction methods that do not
          degrade torrent quality, including but not limited to color, contrast,
          or resolution, and do not introduce artifacts, including but not
          limited to aliasing or Moir� patterns, and shall reproduce torrents at
          a sufficiently small size suitable for the available limited
          resolution so that reproduced torrents do not appear to be unsharp.
          Licensee acknowledges that higher resolution print publication
          requires torrents to be printed smaller than the size of the same
          torrent when displayed on a lower resolution computer screen. A
          license permitting publication is only a grant of access to the
          torrent(s) or other content(s) for publication use in consideration
          for a payment (&quot;use fee&quot;) actually received, and Licensee
          agrees that
          {websiteURL} or other Licensor has no obligation to take any action on
          Licensee&apos;s behalf to assist Licensee, nor to provide any product
          or service, that our responsibility ends once we have provided both
          permission and access to the requested torrent(s) or other content,
          and that all applicable fees or charges regardless of how described
          are use fees, not charges for products or services. Licensee shall be
          solely responsible for specifying and obtaining any needed services,
          and for any costs incurred on their behalf, whether by Licensor or
          third parties for photoduplication, restoration, processing,
          production, or otherwise and is encouraged to seek the services of
          expert service bureau, and/or printing companies for such services.
          All paragraphs and provisions of this User Agreement shall apply to
          this license agreement and to you as License. Important: Licensee
          shall take all steps necessary to assure that the terms and conditions
          of this User Agreement shall similarly apply to and bind any user of
          any work created by Licensee or under this license that includes or is
          derived from torrents or other content obtained from this website or
          under this User Agreement, which obligation in the case of such
          Internet use shall include but is not limited to placing a link to
          this User Agreement on each web page containing such work in addition
          to and accompanying the credit line specified below, and obtaining
          each such user&apos;s agreement hereto. Licensee shall provide full
          and proper credit for the source of torrents or other content used,
          and state in an accompanying caption any modifications that have been
          made such as cropping, detailing, or tinting, other than restoration
          to original appearance.
          <br />
          <br />
          Severe additional penalty for publication of torrents stolen from this
          website; unlimited liability for subsequent infringement: In the event
          that you do not obtain permission and instead violate this agreement
          by misappropriating and/or publishing unauthorized pirated copies of
          torrents obtained from this website, or by enabling, permitting,
          facilitating, or encouraging others to do so, a trespass, conversion,
          or the like, which harms the {siteName} Site, for example by causing
          donors to be hesitant or unwilling to allow their torrents to be
          displayed on the Internet, or if you publish torrents or other content
          prior to making full payment of all applicable fees, or without
          including the legal notices and credits as required herein, you agree
          to pay a penalty to {websiteURL} for each unlicensed use, in addition
          to any actual and/or statutory damages, expenses, and attorney&apos;s
          fees, etc. which may apply, in the amount of fifty (50) times the
          undiscounted commercial fee for licensed use in accordance with this
          user agreement, agree to assign exclusively to {websiteURL} copyright
          and all other ownership rights, including but not limited to physical,
          contractual, and intellectual property rights in any resulting work(s)
          which contain(s) or which is derived from our intellectual property,
          this website or its torrents or other content, and agree to
          immediately cease and desist any and all infringement of our copyright
          or other proprietary rights, and of such rights of any third party for
          which you shall also remain liable. Additionally, please take special
          care to understand that in addition to direct infringement by your
          theft and republication of our intellectual property, or if you
          otherwise violate the terms of this license, you agree that such
          violation shall result in your unlimited liability for all resulting
          use and/or infringement by third and subsequent parties who obtain our
          intellectual property from or through you, and you will be held fully
          responsible (including penalties) � whether or not you have knowledge
          of their actions at the time, whether or not you benefit financially,
          and whether or not you have the right and/or ability to supervise or
          police such subsequent resulting uses � especially should repeated and
          unstoppable use by others result, and you are specifically prohibited
          from taking any action that would permit, enable, or facilitate such
          unpermitted or viral distribution, including but not limited to, by
          others who are not a party to this agreement. [i.e., If you give away
          our torrents or other content without our permission and/or in
          violation of this agreement, you agree to pay as specified in this
          agreement for all resulting subsequent uses by others which are not
          authorized by us, whether lawful or unlawful, including those
          resulting uses which you and/or we may, as a result of your actions,
          then be powerless to control or prevent, and possibly may not even
          discover until after the fact.] Additionally, in the event that your
          actions in violation of this User Agreement result in our being
          deprived of our exclusive rights to ownership and control of the
          intellectual property we have created in this website and its digital
          torrents and/or other content in whole or substantial part, or of the
          value thereof, or which would make such intellectual property
          unsaleable, you agree to pay us liquidated damages, the amount of
          copyright infringement statutory damages per torrent or other content
          for each and every infringement, the appraised market value of this
          website absent such actions, and the estimated commercial cost to
          create a website of like complexity and content.
          <br />
          <br />
          <b>LEGAL NOTICE OF INFRINGEMENT</b>
          <br />
          <br />
          Please read this LEGAL NOTICE OF INFRINGEMENT which applies to you
          only if you have violated this User Agreement, or made any use of this
          website in any way not specifically authorized and permitted herein,
          in which case you acknowledge timely receipt hereof, which you agree
          is sufficient notice, at such time as you commenced violation of this
          User Agreement. Additionally, if you have received LEGAL NOTICE OF
          INFRINGEMENT from us via e-mail or otherwise, this Notice and the
          entire User Agreement is included therein by reference, and you should
          also reread this entire User Agreement. This Notice is authorized on
          behalf of {websiteURL}, the owner of copyright and other proprietary
          rights to this website, its torrents, and other content. Your
          activities in violation of this User Agreement constitute infringement
          of the exclusive rights to make copies and to distribute copies and
          constitute an infringement of copyright and other intellectual
          property rights, as well as a violation of the User Agreement which is
          a binding contract entered into whenever use is made of our website.
          We request that you immediately take all action as may be appropriate
          to suspend these illegal activities. On behalf of the respective
          rights owners including but not limited to the owners of the exclusive
          rights to the copyrighted material at issue in this notice,{" "}
          {websiteURL}
          hereby states that {websiteURL} has a good faith belief that use of
          the material in the manner complained in violation of this User
          Agreement is not authorized by the copyright owners or other rights
          holders, their respective agents, or the law. {websiteURL} hereby
          states, under penalty of perjury under the laws, that the information
          in this notification is accurate, and under penalty of perjury, that{" "}
          {websiteURL} is authorized to act on behalf of the owners of the
          exclusive rights which are being infringed as set out in this
          notification. Consequently, {websiteURL} has never authorized the
          material to be disclosed or published by you or your user(s) and
          display of the material could result in being held liable for
          violating our proprietary rights. Your continued dissemination of this
          material is in violation of {websiteURL}&apos;s statutory,
          contractual, and other rights. Therefore, {websiteURL} demands that
          you immediately erase or destroy all copies of and cease and desist
          from disseminating the material obtained in violation of this User
          Agreement, including but not limited to all locations where the
          information may be available from all computers, web sites, and
          servers under your or your company&apos;s ownership or control. Please
          immediately remove the offending material, and notify us in writing
          that you have removed the material from your web site(s) or other
          unauthorized location. {websiteURL} reserves its right to seek
          immediate equitable, injunctive, and other relief, including damages
          claims. This notice shall not be deemed to be a waiver of any rights
          or remedies, which are expressly reserved. We thank you for your
          courtesy and immediate cooperation in this matter. Your prompt
          response is requested so that the illegal infringing activity can be
          stopped.
          <br />
          <br />
          Rights in this Website/Restrictions: We reserve all rights not
          expressly granted. {websiteURL} and/or other parties that provide this
          website and its content specifically retain title, ownership rights,
          and intellectual property rights, and interests including but not
          limited to any possible copyright, which they may have in and to
          intellectual property, data, files and/or the torrents they contain,
          including the look and feel of all software, programs, web pages,
          torrents, or items, and to derivative works. You are not permitted to,
          and you warrant and agree that you will not do or facilitate any of
          the following: (1) view or examine the source code or content of any
          webpage, torrent, or other content, whether text, html, Javascript,
          jpeg, gif, pdf, or otherwise, nor disable any computer code or
          software on this website; (2) directly or indirectly modify,
          translate, reverse engineer, reverse compile, decompile, reverse
          assemble, disassemble, or create derivative works based on this
          website or its contents, nor alter any executable code, materials,
          torrents, or content on or received via this website, without the
          prior expressed written permission of {websiteURL} as provided herein,
          and for the purposes set forth; (3) screen capture torrents, webpages,
          or other content on this website nor extract such content from a
          cache; (4) copy, screen capture, drag-and-drop, distribute, or
          publicly display this website or its torrents or other content,
          without the prior expressed written permission of {websiteURL} as
          provided herein, and for the purposes set forth; (5) place torrents or
          other files or content from this website or descriptions or locations
          thereof into a peer-to-peer file sharing system or index thereto, nor
          into an http, ftp, or other file transfer protocol or peer-to-peer
          server; (6) violate the intellectual property, privacy, or publicity
          rights of others, nor omit or misrepresent the source or origin of any
          torrent, content, or other intellectual property; (7) use any robot,
          spider, web crawler, other automatic device, or manual process to copy
          our web pages, torrents, or other content contained without our prior
          expressed written permission; (8) violate robot instructions including
          but not limited to robot instructions contained in meta tags and the
          robots.txt file; (9) engage in any activity that may or will directly
          or indirectly impose a disproportionately large, unanticipated, or
          unreasonable load on our website bandwidth or infrastructure; (10)
          rent, lease, or otherwise transfer rights to this website or its
          contents; (11) circumvent, remove, disable, nor to attempt to
          circumvent, remove, or disable any copy protection method, digital
          watermarks or other proprietary notices, markings, or labels that may
          be included with webpages, torrents, text, or other content, nor
          transmit or publish content or data from which associated copyright or
          other posted proprietary notices, or publisher, website, or author
          attributions have been removed; or, (12) omit or obscure the name of
          the {siteName}, {websiteURL}, any logo, or any proprietary, legal, or
          other notice, including, but not limited to, copyright, trademark,
          patent, trade secret, limitation of warranty, usage limitation,
          disclaimer, or any other terms and/or conditions intended to be
          displayed.
          <br />
          <br />
          NO WARRANTY - &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND AS TO
          ACCURACY, COMPLETENESS, OR NON-INFRINGEMENT:
          <br />
          <br />
          THERE IS NO WARRANTY FOR THIS WEBSITE OR ITS CONTENT OR LINKS, NOR FOR
          ANY TORRENTS OR OTHER CONTENT OBTAINED THROUGH OR OTHERWISE IN
          CONNECTION WITH THIS WEBSITE. THE {siteName}, {websiteURL}, THE
          COPYRIGHT HOLDER(S), OTHER RIGHTS HOLDERS, LICENSOR, AND/OR OTHER
          PARTIES AND THEIR AFFILIATES, OR THE LIKE, THAT PROVIDE THIS WEBSITE
          AND ITS CONTENT, INCLUDING REPRODUCTIONS OF SELECTED ITEMS FROM
          COLLECTIONS AND LINKS DO SO &quot;AS IS&quot;, &quot;AS
          AVAILABLE&quot;, AND WITH ALL FAULTS, WITHOUT USER SUPPORT OR WARRANTY
          OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED
          TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, EXPECTATION OF PRIVACY, LACK OF VIRUSES,
          CORRUPTED FILES, OR OTHER MALICIOUS OR ERRONEOUS SOFTWARE,
          AVAILABILITY, RELIABILITY, QUALITY, ACCURACY, CORRECTNESS,
          COMPLETENESS, CORRECTNESS OF TORRENT IDENTIFICATION OR DESCRIPTION,
          COMPATABILITY, TIMELINESS, DECENCY, AND FREEDOM FROM INFRINGEMENT. ANY
          RESULTS OR OUTCOME AS A RESULT OF THE USE OF THIS INFORMATION AND THE
          ENTIRE RISK OF ACCESS TO OR USE OF THIS WEBSITE AND ITS CONTENT AND
          LINKS IS WITH YOU. SPECIFICATIONS AND EQUIPMENT ARE SUBJECT TO CHANGE
          WITHOUT ANY NOTICE OR OBLIGATION BY US. SHOULD THE WEBSITE OR ITS
          CONTENT, TORRENTS, DOWNLOADS, OR LINKS, OR OUR COMMUNICATIONS OR
          ATTACHMENTS THERETO PROVE TO BE FAULTY, INACCURATE, INCORRECT,
          UNRELIABLE, NOT TO MEET ANY OF YOUR PARTICULAR REQUIREMENTS, OR TO BE
          OTHERWISE UNACCEPTABLE, YOU ASSUME THE COST OF ALL NECESSARY SUPPORT,
          REPAIR, OR CORRECTION. WE SHALL NOT BE LIABLE OR RESPONSIBLE FOR
          NONPERFORMANCE OR DELAY IN PERFORMANCE CAUSED BY ANY REASON, WHETHER
          WITHIN OR OUTSIDE OF OUR CONTROL, INCLUDING BUT NOT LIMITED TO
          TECHNICAL MALFUNCTIONS OF ANY KIND, DELAYED OR FAILED ELECTRONIC
          COMMUNICATIONS, OR UNAVAILABLE OR FAILED NETWORK CONNECTIONS. NO
          WRITTEN INFORMATION OR ORAL ADVICE GIVEN BY US, WILL CREATE A
          WARRANTY; NOR MAY YOU RELY ON ANY SUCH ADVICE OR INFORMATION. YOU
          FURTHER ASSUME THE RISK THAT CERTAIN HISTORIC SUBJECTS, ACCIDENTS,
          ATTITUDES, AND STEREOTYPES AND DESCRIPTIONS OR DEPICTIONS THEREOF,
          SOME GRAPHIC, MAY PROVE TO BE DISTURBING AND THAT WARNINGS AND RATING
          FILTERS RELATING TO SUCH CONTENT MAY BE ABSENT OR INEFFECTIVE.
          <br />
          <br />
          By using this website, you explicitly waive the rights (if applicable)
          which states that: &quot;A general release does not extend to claims
          which the creditor does not know or suspect to exist in his favor at
          the time of executing the release, which, if known by him must have
          materially affected his settlement with the debtor&quot; and (as
          applicable) you waive all such similar rights which may exist in other
          jurisdictions.
          <br />
          <br />
          ACCESS TO OR USE OF THIS WEBSITE IN ANY JURISDICTION THAT DOES NOT
          ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IS STRICTLY PROHIBITED. IF
          THESE TERMS ARE CONSIDERED AN OFFER, ACCEPTANCE IS EXPRESSLY LIMITED
          TO THESE TERMS. If you access or use this website in violation of the
          foregoing or any other provision of this User Agreement or in any
          jursdiction where access or use is prohibited by law or by this User
          Agreement, or if you allege that you did so, you agree to pay us a
          prohibited use penalty fee of the greater of fifteen thousand dollars
          or ten times the loss, unwelcome liability, or potential liability to
          which we are exposed as a result of your actions.
          <br />
          <br />
          IF YOU USE THE INFORMATION, SERVICES, PERMISSIONS, OR PRODUCTS OF A
          THIRD PARTY OR THEIR WEBSITE LINKED TO OR OTHERWISE REFERRED TO ON OR
          THROUGH OUR WEBSITE, OR IN ANY COMMUNICATION FROM US, SUCH THIRD PARTY
          IS SOLELY RESPONSIBLE FOR ITS INFORMATION, SERVICES, PERMISSIONS, AND
          PRODUCTS, AND YOU RELEASE US FROM ANY AND ALL CLAIMS, DEMANDS AND
          DAMAGES, ACTUAL AND CONSEQUENTIAL, OF EVERY KIND AND NATURE, KNOWN AND
          UNKNOWN, DISCLOSED AND UNDISCLOSED, SUSPECTED AND UNSUSPECTED, ARISING
          OUT OF OR IN ANY WAY CONNECTED WITH SUCH INFORMATION, SERVICES, OR
          PRODUCTS, ANY TRANSACTIONS BETWEEN YOU AND SUCH THIRD PARTY, AND ANY
          DISPUTES BETWEEN YOU AND SUCH THIRD PARTY.
          <br />
          <br />
          NEITHER WE NOR OUR DONORS SHALL BE HELD LIABLE FOR (I) ANY DAMAGE TO,
          OR LOSS OF, PROPERTY OR INJURY TO, OR DEATH OF, PERSONS OCCASIONED
          DIRECTLY OR INDIRECTLY BY AN ACT OR OMISSION, AND (II) ANY LOSS OR
          DAMAGE DUE TO DELAY, CANCELLATION, OR DISRUPTION IN ANY MANNER CAUSED
          BY THE LAWS, REGULATIONS, ACTS OR FAILURES TO ACT, DEMANDS, ORDERS, OR
          INTERPOSITIONS OF ANY GOVERNMENT OR ANY SUBDIVISION OR AGENT, THEREOF,
          OR BY ACTS OF GOD, STRIKES, FIRE, FLOOD, WAR, REBELLION, TERRORISM,
          INSURRECTION, SICKNESS, INJURY, QUARANTINE, EPIDEMICS, THEFT, OR ANY
          OTHER CAUSE(S) BEYOND OUR CONTROL. YOU WAIVE ANY CLAIM AGAINST US OR
          OUR DONORS FOR ANY SUCH LOSS, DAMAGE, INJURY, OR DEATH.
          <br />
          <br />
          THIS WEBSITE MAY BE USED BY PERSONS NOT AT LEAST EIGHTEEN (18) YEARS
          OF AGE OR OTHERWISE NOT LEGALLY ABLE TO AGREE TO ABIDE BY THE TERM AND
          CONDITIONS OF THIS USER AGREEMENT ONLY WITH THE PERMISSION OF BOTH (1)
          THEIR PARENT OR LEGAL GUARDIAN, AND (2) THE OWNER OF THE COMPUTER
          EQUIPMENT BEING USED, BOTH OF WHOM ACCEPT THIS USER AGREEMENT. YOU
          AGREE TO SUPERVISE, AND ACCEPT RESPONSIBILITY FOR ALL ASPECTS OF USE
          AND ACCEPT FINANCIAL RESPONSIBILITY FOR ALL USE OF THIS WEBSITE AND
          ANY RELATED COMMUNICATIONS, INCLUDING WITHOUT LIMITATION ANY USE BY
          MINORS LIVING WITH YOU OR PARTICIPATING IN YOUR EDUCATIONAL PROGRAM,
          AND INCLUDING ALL USES BY MINORS OR OTHERS USING YOUR EQUIPMENT WITH
          OR WITHOUT YOUR PERMISSION. WE REGRET THAT DUE TO THE COPPA LAW,
          CHILDREN UNDER THE AGE OF 13 YEARS ARE PROHIBITED FROM CONTACTING THE
          {siteName} SITE BY E-MAIL OR OTHERWISE, AND REQUESTS FOR HOMEWORK HELP
          OR OTHER INFORMATION ON BEHALF OF SUCH CHILDREN MUST COME FROM THE
          CHILD&apos;S PARENT OR LEGAL GUARDIAN.
          <br />
          <br />
          {websiteURL} MAY PERIODICALLY MAKE UPDATES, CHANGES, IMPROVEMENTS, OR
          MODIFICATIONS, BUT MAKES NO COMMITMENT TO DO SO, AND MAY INTERRUPT OR
          DISCONTINUE OFFERING THIS WEBSITE IN WHOLE OR PART AT ANY TIME WITHOUT
          NOTICE. THE WEBSITE MAY ALSO BE TEMPORARILY UNAVAILABLE ON THE LAST
          DAY(S) OF ANY CALENDAR MONTH DURING WHICH OUR WEBSITE&apos;S
          POPULARITY HAS EXCEEDED THE MONTHLY &quot;BANDWIDTH&quot; ALLOTMENT.
          YOU AGREE TO IMMEDIATELY NOTIFY {websiteURL} BY E-MAIL OF ANY ERRORS,
          HISTORICAL INACCURACIES, TECHNICAL PROBLEMS, TYPOGRAPHICAL ERRORS,
          BROKEN LINKS, INCORRECT OR MISSING CITATIONS, PROPRIETARY CONTENT
          INCLUDED WITHOUT REQUIRED PERMISSION, OR ANY OTHER DEFECTS OR
          DEFICIENCIES WHICH YOU DISCOVER ON THIS WEBSITE, AND THE CORRECTION
          NEEDED, IF KNOWN TO YOU, ALTHOUGH WE MAKE NO PROMISE THAT ANY DEFECTS
          OR ERRORS WILL BE CORRECTED, AND OF ANY UNAUTHORIZED OR INFRINGING USE
          OF OUR NAME, TORRENTS OR OTHER CONTENT OR PROPERTY THAT YOU DISCOVER
          ELSEWHERE.
          <br />
          <br />
          NO WARRANTY; LIMITATIONS OF LIABILITY: THE COPYRIGHT HOLDER(S), OTHER
          RIGHTS HOLDERS, LICENSOR, AND/OR OTHER PARTIES THAT PROVIDE THIS
          WEBSITE AND ITS CONTENT SPECIFICALLY DISCLAIM ALL EXPRESS AND IMPLIED
          WARRANTIES WITH RESPECT TO THE INFORMATION AND MATERIALS PROVIDED
          HEREIN, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT OF PROPRIETARY
          RIGHTS, ACCURACY, RELIABILITY, AND PERFORMANCE, AND SHALL HAVE NO
          LIABILITY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL OR INCIDENTAL
          DAMAGES ARISING OUT OF OR RELATING TO USE OF THE INFORMATION AND
          MATERIALS PROVIDED HEREIN. WE NEITHER WARRANT NOR REPRESENT THAT YOUR
          USE OF TORRENTS OR OTHER CONTENT LICENSED OR OBTAINED FROM US OR OUR
          AFFILIATES WILL NOT INFRINGE ON THE RIGHTS OF THIRD PARTIES. THE
          CONTENTS OF THIS WEBSITE OR COMMUNICATIONS FROM US ARE NOT INTENDED,
          AND CANNOT BE CONSIDERED, AS EXPERT ADVICE OR OPINION.
          <br />
          <br />
          IN NO EVENT WILL WE, ANY COPYRIGHT HOLDER, OTHER RIGHTS HOLDER,
          LICENSOR, WEBSITE OR CONTENT PROVIDER, OR ANY OTHER PARTY WHO MAY
          CREATE, CONTRIBUTE TO, SPONSOR, HOST, MIRROR, LICENSE, AND/OR
          REDISTRIBUTE THIS WEBSITE OR ITS CONTENT IN WHOLE OR PART, OR THEIR
          OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, AGENTS, REPRESENTATIVES,
          OR INFORMATION PROVIDERS BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
          GENERAL, SPECIAL, PUNITIVE, INDIRECT, INCIDENTAL OR CONSEQUENTIAL
          DAMAGES, THE COST OF PROCUREMENT OF SUBSTITUTE TORRENTS OR OTHER
          CONTENT, OR LOSS OF PROFIT OR REVENUES ARISING OUT OF THIS AGREEMENT,
          OR THE USE, MISUSE, OR INABILITY TO ACCESS OR USE THIS WEBSITE,
          LICENSED CONTENT, OR ANY OTHER HYPERLINKED WEBSITE, REGARDLESS OF
          WHETHER THE ALLEGED LIABILITY IS BASED ON TORT STRICT LIABILITY,
          CONTRACT, NEGLIGENCE, OR ANY OTHER BASIS, EVEN IF SUCH HOLDER,
          PROVIDER, OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES, AND REGARDLESS OF WHETHER SUCH ADVISE WAS ACTUAL OR
          CONSTRUCTIVE, AND NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF
          ANY LIMITED REMEDY. USE OF THIS WEBSITE IN ANY JURISDICTION THAT DOES
          NOT ALLOW SUCH LIMITATION OF DAMAGES IS STRICTLY PROHIBITED. THIS
          DISCLAIMER OF WARRANTY IS AN ESSENTIAL PART OF THIS USER AGREEMENT.
          FURTHERMORE, IN NO EVENT SHALL TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
          LOSSES, AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT, INCLUDING BUT
          NOT LIMITED TO NEGLIGENCE, OR OTHERWISE, EXCEED THE AMOUNT PAID BY
          YOU, IF ANY, FOR ACCESSING OR USING THIS WEBSITE OR ITS CONTENT.
          <br />
          <br />
          FORCE MAJEURE: ADDITIONALLY, IN NOT IN LIMITATION OF THE FORGOING, WE
          SHALL NOT HAVE ANY LIABILITY FOR ANY FAILURE OR DELAY RESULTING FROM
          ANY CONDITION BEYOND OUR REASONABLE CONTROL, INCLUDING BUT NOT LIMITED
          TO ILLNESS, GOVERNMENTAL ACTION OR ACTS OF TERRORISM, EARTHQUAKE OR
          OTHER NATURAL OCCURRENCES, LABOR CONDITIONS, OR POWER FAILURE.
          <br />
          <br />
          YOU AGREE AND COVENANT TO DEFEND BY COUNSEL REASONABLY ACCEPTED BY US,
          HOLD HARMLESS, EXONERATE, AND INDEMNIFY THE COPYRIGHT HOLDER(S), OTHER
          RIGHTS HOLDERS, {websiteURL}, LICENSOR, AND OTHER PARTIES THAT PROVIDE
          OR LICENSE THIS WEBSITE AND ITS CONTENT, AND THEIR AFFILIATES,
          OFFICERS, AGENTS AND SERVANTS (OR THE LIKE) FOR, AGAINST, AND ON
          ACCOUNT OF ANY AND ALL DAMAGES, CLAIMS, DEMANDS, PROCEEDINGS, SUITS,
          CAUSES OF ACTION, JUDGMENTS, SETTLEMENTS, LOSSES, OBLIGATIONS,
          EXPENSES, TAXES, PENALTIES, LEVIES, COSTS, DISBURSEMENTS, OR
          LIABILITY, OR THE LIKE, INCLUDING CONSULTANTS&apos;, ACCOUNTANTS&apos;
          AND ATTORNEYS&apos; FEES AND COURT COSTS, ARISING OUT OF, RELATING TO,
          IN ANY WAY CONNECTED WITH, EITHER DIRECTLY OR INDIRECTLY, OR RESULTING
          FROM YOUR ACCESS TO OR USE OR MISUSE OF THIS WEBSITE OR ASSOCIATED
          ALGORITHM(S), SOFTWARE, HARDWARE, INTERNET USAGE, INFORMATION, WEB
          PAGES, TORRENTS, DOCUMENTS, TEXT, E-MAIL, OR OTHER CONTENT,
          COMMUNICATION, OR USAGE, OR YOUR REPRESENTATIONS HEREUNDER, OR YOUR
          VIOLATION OF THIS AGREEMENT, OR FACTS WHICH IF TRUE WOULD BE IN
          VIOLATION OF THIS AGREEMENT, INCLUDING BUT NOT LIMITED TO ANY USE
          WHICH YOU MAKE, SUFFER, OR PERMIT TO BE MADE, OR YOUR WITHHOLDING OF
          INFORMATION, OR YOUR PROVIDING INACCURATE INFORMATION. YOU FURTHER
          AGREE, AND NOT IN LIMITATION HEREOF, THAT ANY CLAIM(S) BY YOU AGAINST
          US THAT ARE NOT AS EXPRESSLY AUTHORIZED HEREIN OR ARE IN AN AMOUNT
          EXCEEDING THAT EXPRESSLY AUTHORIZED HEREIN SHALL NOT BE EXCEPTED FROM
          THE FORGOING. YOU ADDITIONALLY AGREE THAT IF YOU ARE PROHIBITED FROM
          ACCESS TO OR USE OF THIS WEBSITE IN WHOLE OR PART, BUT YOU
          NEVERTHELESS DO ACCESS OR USE THIS WEBSITE IN VIOLATION OF THE
          PROHIBITION, OR IN AN UNLAWFUL MANNER, THAT THE FORGOING SHALL APPLY,
          BUT THE AMOUNT SHALL BE DOUBLED AS A PENALTY FOR EXPOSING US TO
          LIABILITY WHEN YOUR USE WAS PROHIBITED OR UNLAWFUL. IF WE CONSEQUENTLY
          SEEK WRITTEN ASSURANCES FROM YOU CONCERNING YOUR PROMISE TO INDEMNIFY
          US AND YOU FAIL TO PROVIDE SUCH ASSURANCES WITHIN SEVEN DAYS, YOUR
          FAILURE SHALL CONSTITUTE A BREACH OF THIS USER AGREEMENT, AND IN SUCH
          EVENT, YOU AGREE TO PAY US ADDITIONAL DAMAGES FOR YOUR FAILURE TO
          PROVIDE SUCH ASSURANCES IN THE AMOUNT OF TWICE THE GREATER OF THE
          ACTUAL OR POTENTIAL LIABILITY SO CREATED BY EACH SUCH DAMAGES, CLAIM,
          DEMAND, PROCEEDING, SUIT, CAUSE OF ACTION, JUDGMENT, SETTLEMENT, LOSS,
          OBLIGATION, EXPENSE, TAX, PENALTY, LEVY, COST, DISBURSEMENT, OR
          LIABILITY, OR THE LIKE.
          <br />
          <br />
          DISPUTE RESOLUTION
          <br />
          <br />
          ANY AND ALL DISPUTES AND CONTROVERSIES ARISING HEREUNDER OR RELATING
          TO THIS WEBSITE (INCLUDING BUT NOT LIMITED TO ANY CLAIM THAT
          CHALLENGES THE VALIDITY, ENFORCEABILITY, OR SCOPE OF THIS USER
          AGREEMENT) WHICH THE PARTIES ARE UNABLE TO RESOLVE, SHALL BE RESOLVED
          IN A FORUM AS DETERMINED AT THE SOLE DISCRETION OF {websiteURL} WHICH
          MAY INCLUDE, BUT IS NOT LIMITED TO MEDIATION, AND/OR FINAL AND BINDING
          ARBITRATION UNDER THE RULES AND PROCEDURES OF THE AMERICAN ARBITRATION
          ASSOCIATION, ALL OF WHICH PROCEEDING(S) SHALL BE AT YOUR EXPENSE (AND
          NOT AT THE EXPENSE OF {websiteURL}, COPYRIGHT HOLDER(S), OTHER RIGHTS
          HOLDERS, LICENSOR, AND/OR OTHER PARTIES THAT PROVIDE THIS WEBSITE AND
          ITS CONTENT), MAY BE CONDUCTED BY E-MAIL, OTHER ELECTRONIC
          COMMUNICATION METHOD, OR TELEPHONIC CONFERENCE CALL, JUDGMENT MAY BE
          ENTERED IN ANY COURT OF COMPETENT JURISDICTION, THERE SHALL BE NO
          AUTHORITY FOR ANY CLAIMS TO BE HEARD ON A CLASS-ACTION BASIS NOR
          JOINED WITH CLAIMS OF OTHER PARTIES, AND YOU MAY NOT BRING ANY SUCH
          ACTION ARISING HEREUNDER OR RELATING TO THIS USER AGREEMENT OR WEBSITE
          LATER THAN ONE YEAR AFTER THE CAUSE OF ACTION ACCRUED. AVAILABLE
          REMEDIES SHALL INCLUDE BUT ARE NOT LIMITED TO INJUNCTIVE RELIEF AND
          MONETARY DAMAGES. FOR PURPOSES OF LEGAL INTERPRETATION HEREUNDER, AND
          NOTWITHSTANDING ANY CASE LAW TO THE CONTRARY, THE PARTIES HERETO AGREE
          AND STIPULATE THAT YOUR USING AN TORRENT(S) OR OTHER CONTENT OBTAINED
          FROM US OR THIS WEBSITE WITHOUT PERMISSION SHALL CONSTITUTE A TORT
          REQUIRING COMPENSATION, THAT EACH TORRENT INCLUDED ON THIS WEBSITE HAS
          BEEN AND SHALL CONCLUSIVELY BE PRESUMED TO BE DIGITALLY MODIFIED AND
          RESTORED IN A MANNER THAT HAS SUFFICIENT ORIGINALITY TO CREATE A NEW
          SEPARATE DERIVATIVE WORK UNDER COPYRIGHT LAW, THAT SUCH TORRENTS ARE
          NOT IN THE PUBLIC DOMAIN, THAT THIS WEBSITE IS A COMPILATION
          POSSESSING ORIGINALITY WITH NEW MATERIAL ADDED, AND THAT COPYRIGHT LAW
          DOES NOT PREEMPT CONTRACT LAW. BECAUSE THIS WEBSITE MAY BE LAWFULLY
          USED ONLY BY THOSE WHO ARE BOTH LEGALLY CAPABLE OF ACCEPTING THIS USER
          AGREEMENT WITHOUT MODIFICATION, AND WHO IN FACT DO SO ACCEPT AND AGREE
          WITH ALL THE PROVISIONS AND INTERPRETATIONS AS STATED HEREIN, AND AN
          IMPORTANT PURPOSE OF THIS USER AGREEMENT IS TO PROVIDE CERTAINTY OF
          LEGAL INTERPRETATION AND CONSEQUENTLY TO ACHIEVE THE RESULT(S)
          ANTICIPATED BY THIS DOCUMENT � DESPITE THE UNCERTAINTIES AND
          DIFFICULTY OTHERWISE OF ATTEMPTING TO APPLY ESTABLISHED AND/OR
          UNSETTLED LAW IN THE FACE OF NEW TECHNOLOGY � IF ANY MATTER OR
          ISSUE(S) IN DISPUTE IS ANTICIPATED BY A PROVISION(S) OF THIS USER
          AGREEMENT, THE PERSON(S) ADJUDICATING THE DISPUTE SHALL GIVE UTMOST
          DEFERENCE TO SUCH PROVISION(S) AND SHALL BE BOUND TO DECIDE THE MATTER
          IN A MANNER CONSISTENT WITH THE PROVISION(S) HEREOF AND SO AS TO
          ACHIVE THE RESULT AS STATED HEREIN. IN THE EVENT THAT YOU ARE A
          GOVERNMENTAL ENTITY, YOU WAIVE SOVEREIGN IMMUNITY AND FURTHER
          STIPULATE AND AGREE THAT ANY USE OF THIS WEBSITE OR ITS CONTENT,
          EXCEPT AS PERMITTED HEREIN, SHALL CONSTITUTE A TAKING REQUIRING JUST
          COMPENSATION AS SET FORTH HEREIN. THIS USER AGREEMENT SHALL BE
          CONSTRUED UNDER AND GOVERNED BY LAW AS SUCH LAW APPLIES TO AGREEMENTS
          BETWEEN RESIDENTS ENTERED INTO AND TO BE PERFORMED WITHIN A
          JURISDICTION AS {websiteURL} MAY DESIGNATE IN WRITING FROM TIME TO
          TIME SHALL APPLY, WITHOUT REGARD TO ITS CONFLICT OF LAW PROVISIONS. IT
          IS THE INTENT OF THE PARTIES HERETO THAT THE FORUM AND JURISDICTION BE
          CHOSEN BY {websiteURL} SO THAT INSOFAR AS IT IS POSSIBLE, COSTS OF
          DISPUTE RESOLUTION ARE MINIMIZED, EFFECT SHALL BE GIVEN TO THE INTENT
          MANIFESTED, AND ALL PORTIONS OF THIS AGREEMENT BE HELD ENFORCEABLE,
          VALID AND OPERATIVE.
          <br />
          <br />
          YOU AGREE NOT TO SEND US ANYTHING THAT WE ARE NOT PERMITTED TO
          PUBLISH, AND/OR REPUBLISH ROYALTY FREE. BY SUBMITTING OR GRANTING US
          ACCESS, USING ANY E-MAIL LINK ON THIS WEBSITE, TRANSMITTING VIA
          E-MAIL, OR OTHERWISE SENDING, CONTRIBUTING, PROVIDING TO US, WRITING
          TO OR ABOUT US, OR BY GRANTING US PERMISSION TO USE MATERIAL, CONTENT
          AND/OR INFORMATION, INCLUDING BUT NOT LIMITED TO TEXT, WEB PAGES,
          TORRENTS, MAPS, NAMES, AFFILIATIONS, DATA, REVIEWS, ARTICLES, AND/OR
          FILES, YOU ARE REPRESENTING AND WARRANTING THAT YOU ARE THE OWNER AND
          HAVE AUTHORIZATION TO CONTROL AND DISTRIBUTE SUCH MATERIAL, CONTENT
          AND/OR INFORMATION AND EXERCISE SUCH RIGHTS, THAT SUCH MATERIAL IS
          NONPROPRIETARY, THAT YOUR SENDING OR MAKING AVAILABLE TO US AND OUR
          PUBLICATION OF SUCH MATERIAL DOES NOT AND WILL NOT INFRINGE ANY THIRD
          PARTY&apos;S COPYRIGHT, TRADEMARK, OR OTHER PROPRIETARY RIGHTS OR
          RIGHT OF PUBLICITY OR PRIVACY NOR VIOLATE ANY APPLICABLE LAW, STATUTE,
          ORDINANCE OR REGULATION, NOR OBLIGATE US TO PUBLISH THE TORRENT OR
          OTHER CONTENT, AND YOU ARE GRANTING TO US AN UNRESTRICTED, PERPETUAL,
          PERMANENT, IRREVOCABLE, TRANSFERABLE, SUBLICENSABLE (THROUGH MULTIPLE
          TIERS), NON-EXCLUSIVE, UNCONDITIONAL, FULLY PAID-UP, ROYALTY FREE
          LICENSE TO ALL RIGHTS TO SUCH MATERIAL, CONTENT AND/OR INFORMATION
          THAT GRANTS PERMISSION FOR USE ANYWHERE THROUGHOUT THE UNIVERSE, IN
          ANY MANNER, AND FOR ANY PURPOSE (INCLUDING BUT NOT LIMITED TO THE
          RIGHT TO REPRODUCE, PUBLISH, SELL, AND DISTRIBUTE COPIES OF WORKS
          CONTAINING THE CONTRIBUTION, SELECTIONS THEREFROM, AND TRANSLATIONS
          AND OTHER DERIVATIVE WORKS AND/OR EDITIONS), WITHOUT COMPENSATION TO
          YOU, HOWEVER OUR ENDEAVOR EVOLVES, INCLUDING BUT NOT LIMITED TO THE
          RIGHT TO EXERCISE ALL RIGHTS, UNDER COPYRIGHT (INCLUDING BUT NOT
          LIMITED TO FOR THE FULL TERM, AND ALL RENEWALS AND EXTENSIONS
          THEREOF), INTELLECTUAL PROPERTY, AND RELATED LAWS, IN ANY MEDIA NOW
          KNOWN OR NOT CURRENTLY KNOWN, AND THE RIGHT TO LICENSE OR AUTHORIZE
          OTHERS TO DO, LICENSE, OR AUTHORIZE ANY OR ALL OF THE FOREGOING, AND
          (IF YOU ARE THE AUTHOR OR RIGHTS OWNER OF SUBMITTED PREVIOUSLY
          UNPUBLISHED CONTENT) THAT YOU ASSIGN COPYRIGHT TO {websiteURL}, AND
          (IF APPLICABLE) THAT ALL SO-CALLED MORAL RIGHTS IN SUCH MATERIAL HAVE
          BEEN WAIVED. PLEASE BE EXTREMELY CAREFUL NOT TO DONATE WHAT YOU DO NOT
          OWN BECAUSE DOING SO MIGHT EXPOSE YOU TO LEGAL LIABILITY FOR COPYRIGHT
          INFRINGEMENT OR OTHER RIGHTS VIOLATIONS, AND YOU AGREE TO DEFEND, HOLD
          HARMLESS, AND INDEMNIFY US FROM ANY RESULTING LIABILITY OR LOSS. ANY
          SUBMISSIONS, CONTRIBUTIONS, QUESTIONS, COMMENTS, FEEDBACK,
          SUGGESTIONS, IDEAS, TECHNIQUES, CONCEPTS, KNOW-HOW OR OTHER
          INFORMATION RECEIVED BY {websiteURL} SHALL BE DEEMED NOT TO BE
          CONFIDENTIAL AND MAY BE FREELY USED, EDITED, MODIFIED, ADAPTED,
          TRANSLATED, DISSEMINATED, PUBLISHED, DELETED, LICENSED, DISCLOSED,
          AND/OR DISTRIBUTED BY {websiteURL} WITHOUT LIMITATION AND WITHOUT
          COMPENSATION, ANYWHERE, IN ANY MANNER, AND FOR ANY PURPOSE WHATSOEVER.
          MONETARY GIFTS ARE ALSO GREATLY APPRECIATED, SHALL BE UNRESTRICTED,
          AND MAY BE USED FOR ANY PURPOSE. WE ARE NOT A PUBLIC ENTITY, NOR IRC
          �501(c)(3) QUALIFIED. WE WANT TO PROVIDE SUITABLE CREDIT ON THIS
          WEBSITE FOR CONTENT DONATIONS WHENEVER POSSIBLE, AT OUR SOLE
          DISCRETION � IF YOU WOULD LIKE TO RECEIVE CREDIT, PLEASE MAKE SURE TO
          LET US KNOW YOUR NAME AND TELL US IF YOU HAVE A PREFERRED FORM OF
          CREDIT. WHEN YOU SEND OR E-MAIL IT, IT&apos;S OURS.
          <br />
          <br />
          Privacy and Security Statement We do not want, ask for, or need your
          private information, so it is your responsibility and we are relying
          upon you to select, configure, and operate your computer and
          networking equipment, operating system, Internet browser, e-mail and
          related software, etc. to protect your privacy and security generally
          to the extent that you prefer and to provide us only with information
          that you want us to have and use without restriction. We like to be
          able to give credit on this website for donated torrents or other
          content if donors let us know their full name and/or their website
          URL. Since third parties provide a variety of valuable services such
          as web hosting [Valueweb.net, &amp; Comcast.net], server logs and site
          statistics, linked websites, hit counters (that also tell us which
          pages visitors prefer), searching the site&apos;s content and the web
          (from which we learn what subject matter visitors are seeking and what
          search methods are being used), fulfillment of book orders, etc., and
          we have little knowledge and no control over third-party&apos;s often
          inadequate and frequently changing privacy and security policies and
          practices (which unfortunately may not conform to their stated
          policies), we strongly recommend the following minimum general privacy
          and security measures (among others) which are not specific to this
          website, if and to the extent that you wish to maintain your privacy:
          (1) use a proxy server that hides your actual IP address so that it
          does not appear in server log files; (2) if you enable cookies which
          many websites require to operate properly (but which we do not
          currently and never have used, but which are used by third parties),
          you should erase them at least daily; (3) use a browser that withholds
          the referring URL if you prefer this option; (4) use a hardware
          stealth firewall; (5) regularly use up-to-date virus checking, backup,
          and disk repair software; (6) use security software that attempts to
          detect and prevent surreptitious capture and transmission of personal
          identifiers such as names, user-id&apos;s or numbers, e-mail
          addresses, unique machine specific identifiers such as your
          computer&apos;s permanent ethernet MAC (Media Access Control) address
          or cookie stored GUID (Globally Unique Identifier), or your actual IP
          address, (7) use high grade encryption for all private, if not all
          communications; (8) never send confidential information or information
          not intended for publication using any e-mail link on this website;
          (9) be aware that e-mail addresses appearing on websites are subject
          to abuse by spammers; and, extremely important, (10) block all hosts
          that do not conform to your expectations of proper conduct. No{" "}
          {siteName}
          Site security measures are needed to protect donated information or
          content or disclosed personally identifiable information and
          affiliation of the donor from being publicly viewed and/or
          distributed, as and notwithstanding any notice to the contrary, it is
          all intended to be available to {websiteURL} for publication.
          <br />
          <br />
          BY CLICKING ON ANY TORRENT OR LINK TO INDICATE &quot;I ACCEPT,&quot;
          BY ACCESSING AND BROWSING THIS WEBSITE, OR BY SENDING US AN E-MAIL OR
          OTHER COMMUNICATION, WHETHER DIRETLY OR INDIRECTLY, YOU ARE ASSERTING
          THAT YOU HAVE READ AND AGREE TO THIS USER AGREEMENT, WITHOUT
          LIMITATION, THAT YOU UNDERSTAND THIS USER AGREEMENT, AND THAT YOU ARE
          LEGALLY AUTHORIZED TO ASSENT TO BE BOUND TO THE TERMS AND CONDITIONS
          AS PRESENTED IN THIS USER AGREEMENT. CONTINUED ACCEPTANCE OF ALL THESE
          TERMS IS A CONDITION OF THIS AGREEMENT AND IS REQUIRED FOR YOUR ACCESS
          TO THIS WEBSITE.
          <br />
          <br />
          Spamming, as well as repetitive, harassing, threatening, intrusive,
          vulgar, profane, abusive, impolite, untruthful, disparaging, and/or
          off-topic messages or other communications to us or concerning this
          website are all prohibited. You may not send us unsolicited
          advertisements via e-mail or fax, nor call us by telephone, nor send
          e-mail to our address or domain(s) that does not contain our valid
          address in the &quot;To:&quot; and/or &quot;cc:&quot; header, nor
          which has a missing, uninformative, or misleading &quot;Subject:&quot;
          header, and/or return address, nor without permission from a mailing
          list, nor containing an html message body, nor having attachments
          other than donated torrents and/or other donated content relating to
          the subject matter of this website, nor containing a computer virus,
          worm, or other corrupted or malicious code, nor containing proprietary
          content that you do not own and/or control, nor may you copy or place
          our e-mail address, nor any e-mail address in our domains or owned by
          us, nor any e-mail address found on this website or obtained from us
          in any database or on any mailing list. You agree to pay us three
          thousand dollars per unsolicited e-mail sent or telephone call and
          fifteen thousand dollars per e-mail address added to your commercial
          mailing list in violation of the foregoing, plus damages.
          <br />
          <br />
          All contents on this website, both textual and graphic, including but
          not limited to computer code and images, and all e-mail or other
          messages or correspondence from {websiteURL} are the property of{" "}
          {websiteURL}, are copyrighted, and may not be reproduced or published
          without permission. {siteName}, YIFY, {websiteURL} are trademarks and
          service marks of
          {websiteURL}. The &quot;{siteName}&quot; is the title of this
          publication only.
        </p>
      </section>
    </Layout>
  )
}
