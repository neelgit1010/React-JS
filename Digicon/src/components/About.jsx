const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly p-8 gap-8">
      {/* Image Section */}
      <div className="flex gap-4 flex-1 min-w-[50%]">
        <div className="flex flex-col gap-4">
          <img src="/about/image-1.png" alt="image-1" />
          <img src="/about/image.png" alt="image" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/about/image-2.png" alt="image-2" />
          <img src="/about/image-3.png" alt="image-3" />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="text-3xl font-semibold">About Digicon Marketer</h1>
        <div className="max-w-xl">
          <p>
            Built on the vision of Swami Vivekananda, Digicon Marketer was
            founded in 2022 by Anamitra Sarkhel, whose devotion to Swamiji
            inspires our core values: honesty and fearlessness. Despite the
            global pandemic, we assembled a resilient team that has since helped
            numerous businesses rebound through effective marketing strategies.
            As a leading marketing agency in Kolkata, we proudly serve major
            brands and conglomerates, driven by Anamitra's visionary leadership
            and unmatched wordsmith skills. Our team of skilled professionals,
            working remotely from across India, ensures no client is left
            dissatisfied. At Digicon Marketer, we're committed to delivering
            what we promise, with no shortcuts. Our streamlined processes
            eliminate the hassle of constant follow-ups, offering clients a
            seamless experience. Guided by a 360-degree white-hat marketing
            approach, we focus on ROI-driven strategies to deliver measurable
            growth. Powered by ambition and Swami Vivekananda's timeless wisdom,
            we are ready to take your brand to new heights!
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          <div className="flex gap-10 flex-1">
            <div className="w-[70px] h-[70px] bg-blue-500 rounded-full min-w-[70px] flex justify-center items-center">
              <img src="/logos/vision.png" alt="vision" />
            </div>
            <div className="max-w-xl">
              <h1 className="text-blue-500 text-xl font-semibold">
                Our Vision
              </h1>
              <p>
                To empower brands with innovative, honest, and fearless
                marketing solutions inspired by Swami Vivekananda's vision,
                driving exceptional ROI and growth
              </p>
            </div>
          </div>
          <div className="flex gap-10 flex-1">
            <div className="w-[70px] h-[70px] bg-blue-500 rounded-full min-w-[70px] flex justify-center items-center">
              <img src="/logos/mission.png" alt="mission" />
            </div>
            <div className="max-w-xl">
              <h1 className="text-blue-500 text-xl font-semibold">
                Our Mission
              </h1>
              <p>
                To be a trusted marketing agency delivering unparalleled value,
                fostering resilience and creativity, and guiding businesses to
                enduring success globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;