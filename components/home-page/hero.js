import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/website.jpg"
          alt="An image showing Panda"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Minh</h1>
      <p>
        I blog about myself, especially frontend frameworks like React and Vue
      </p>
    </section>
  );
}

export default Hero;
