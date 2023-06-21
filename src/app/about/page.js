import Content from "../components/content";
import Candle from "../../icons/candle.svg";
import Wave from "../../icons/wave.svg";
import Transition from "../components/transition";
export default function About() {
  const heroParagraphs = [
    `In the vibrant city of Mombasa, a harmonious fusion of creativity and tradition birthed Kubuni Tattoo Studio.
    It all began when a diverse group of local artisans and tattoo enthusiasts, united by their love for Swahili culture and artistry,
    decided to create a unique space that celebrated both ancient traditions and contemporary tattooing. Inspired by the rich history
    and profound symbolism of Swahili designs, they embarked on a journey to establish a haven where body art became a canvas for 
    personal stories and cultural expression.`,
    `With a commitment to preserving and revitalizing Swahili artistic heritage, Kubuni Tattoo Studio took pride in 
    mentoring local talents and supporting emerging artists. They hosted regular workshops and exhibitions,
     inviting the community to engage in the storytelling power of tattoos. As word spread about their exceptional 
     craftsmanship and dedication to cultural preservation, Kubuni Tattoo Studio became a destination for locals 
     and visitors alike, where the universal language of art transcended boundaries and fostered connections between diverse cultures.`,
  ];
  const endParagraphs = [
    `At Kubuni Tattoo Studio, we believe that getting a tattoo is more
    than just a needle and some ink—it's an experience that
    reflects your unique story and individuality. So kick back, relax,
    and let us take you on a journey of self-expression and artistic
    exploration.`,
    `Step into our cozy studio, where the aroma of fresh coffee mingles
    with the buzzing of tattoo machines. Our talented artists are not
    only skilled in their craft but also experts in making you feel at
    ease. We understand that getting inked can be a mix of excitement
    and nervousness, so we've created a chill atmosphere where you
    can kick off your shoes, sip on a beverage of your choice, and have
    a good laugh while you share your ideas and inspirations.`,
  ];
  return (
    <Transition>
      <main>
        <Content
          src="/about-hero.png"
          alt="Dark-skinned thighs with tattoo of several flowers"
          paragraphs={heroParagraphs}
          heading="Origin Story"
          dark={true}
        >
          Origin{" "}
          <Candle
            className="inline w-8 fill-current text-primary"
            aria-hidden="true"
          />{" "}
          Story
        </Content>

        <Content
          src="/about-center.jpg"
          alt="Brown person's tattooed back highlighted in a circle"
          paragraphs={endParagraphs}
          imageAfter={true}
          end={true}
          heading="The Tattooed Way"
          blendCirclePosition="top-64"
        >
          The Tattooed{" "}
          <Wave
            className="inline w-20 fill-current text-primary"
            aria-hidden="true"
          />{" "}
          Way
        </Content>
      </main>
    </Transition>
  );
}
