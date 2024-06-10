import { contactDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactInformation = () => {
  function openWhatsApp() {
    const whatsappLink = "https://wa.me/+254768687334";
    window.open(whatsappLink);
  }

  return (
    <section className="py-4 ">
      <div className="py-5 flex flex-col items-center justify-center max-lg:items-start">
        <h1 className="mb-2  headingThree">Message Me</h1>
        <p>We'll get back to you within 24 hours</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {contactDetails.map((contact) => (
          <div
            className="mode bg-primary-two-100 rounded py-5 px-2 gap-5 flex justify-start items-center mb-5 xl:mr-5  hover:scale-[1.1] hover:cursor-pointer hover:bg-primary-500"
            key={contact.name}
            onClick={() => {
              if (contact?.link === "+254768687334") {
                openWhatsApp();
              } else if (contact?.name === "Fiverr") {
                window.open(contact?.link, "_blank", "noopener,noreferrer");
              } else if (contact?.link.includes("@")) {
                window.location.href = `mailto:${contact?.link}`;
              }
            }}
          >
            <Image
              src={contact.icon}
              alt={contact.link}
              width={30}
              height={30}
            />

            <div
              onClick={contact?.link === "+254768687334" ? openWhatsApp : null}
            >
              <h2 className="text-lg font-semibold mb-1">{contact.name}</h2>
              {contact?.name === "Fiverr" ? (
                <Link
                  href={contact?.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lets connect
                </Link>
              ) : (
                <p>{contact?.link}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInformation;
