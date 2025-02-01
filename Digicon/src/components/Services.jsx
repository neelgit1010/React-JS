import { useState } from "react";
import Card from "./Card";

const Services = () => {
  const servicesHeadings = [
    "Digital, Performance & Internet Marketing",
    "Development Services",
    "Designing Services",
    "Other Services",
  ];

  const services = [
    [
      [
        "/services/SEO.png",
        "SEO or SEM",
        "Crafted strategies ensure your brand ranks on top with advanced SEO and SEM, driving organic and paid traffic",
      ],
      [
        "/services/SMM.png",
        "SEO or SMM",
        "Engage your audience with creative content and campaigns across social media for increased brand awareness",
      ],
      [
        "/services/PPC.png",
        "PPC (Google AdWords)",
        "Maximize ROI with targeted pay-per-click ads, ensuring high-quality leads and measurable results.",
      ],
      [
        "/services/ORM.png",
        "Object-Relational Mapping",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/email.png",
        "Email Marketing",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/sms.png",
        "Bulk SMS & WA Marketing",
        "Reach customers instantly with bulk SMS and WhatsApp campaigns, fostering direct and impactful",
      ],
      [
        "/services/lead.png",
        "Lead Generation",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
      [
        "/services/app.png",
        "App Store Optimization",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
    ],
    [
      [
        "/services/webdev.png",
        "Web Development",
        "Crafted strategies ensure your brand ranks on top with advanced SEO and SEM, driving organic and paid traffic",
      ],
      [
        "/services/appdev.png",
        "App Development",
        "Engage your audience with creative content and campaigns across social media for increased brand awareness",
      ],
      [
        "/services/Software-Development.png",
        "Software Development",
        "Maximize ROI with targeted pay-per-click ads, ensuring high-quality leads and measurable results.",
      ],
      [
        "/services/CRM-Development.png",
        "CRM Development",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/Product-Development.png",
        "Product Development",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/Blockchain-and-Crypto-Dev.png",
        "Blockchain and Crypto Dev",
        "Reach customers instantly with bulk SMS and WhatsApp campaigns, fostering direct and impactful",
      ],
      [
        "/services/Game-Development.png",
        "Game Development",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
    ],
    [
      [
        "/services/uiux.png",
        "UI/UX Designing",
        "Crafted strategies ensure your brand ranks on top with advanced SEO and SEM, driving organic and paid traffic",
      ],
      [
        "/services/logo.png",
        "Logo Designing",
        "Engage your audience with creative content and campaigns across social media for increased brand awareness",
      ],
      [
        "/services/graphic.png",
        "Graphic Designing",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/brochure.png",
        "Brochure Designing",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/news.png",
        "Newsletter Designing",
        "Reach customers instantly with bulk SMS and WhatsApp campaigns, fostering direct and impactful",
      ],
      [
        "/services/flyer.png",
        "Flyer Designing",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
      [
        "/services/landing.png",
        "Landing Page Designing",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
      [
        "/services/adobe.png",
        "Adobe XD, Figma Design",
        "Generate high-quality leads through tailored strategies, empowering your business with valuable customer",
      ],
    ],
    [
      [
        "/services/anime.png",
        "Animation",
        "Crafted strategies ensure your brand ranks on top with advanced SEO and SEM, driving organic and paid traffic",
      ],
      [
        "/services/cyber.png",
        "Cyber Security",
        "Engage your audience with creative content and campaigns across social media for increased brand awareness",
      ],
      [
        "/services/linguistics.png",
        "Linguistics Services",
        "Maximize ROI with targeted pay-per-click ads, ensuring high-quality leads and measurable results.",
      ],
      [
        "/services/data.png",
        "Data Entry",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ],
      [
        "/services/product.png",
        "Product Entry",
        "Streamline data management with ORM tools for efficient database interaction and app performance.",
      ]
    ],
  ];

  // State to track the selected category
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="m-2 p-4">
      <h1 className="text-3xl font-semibold">What We Provide</h1>
      <div>

        <div className="flex gap-8 mt-4 font-semibold text-xl overflow-auto">
          {servicesHeadings.map((heading, index) => (
            <p
              key={index}
              className={`whitespace-nowrap cursor-pointer ${
                selectedIndex === index ? "text-blue-600" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {heading}
            </p>
          ))}
        </div>

        <hr className="mt-4 border border-gray-400" />

        <div className="p-2 flex flex-wrap gap-4">
          {services[selectedIndex]?.map((service, idx) => (
            <Card key={idx} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;