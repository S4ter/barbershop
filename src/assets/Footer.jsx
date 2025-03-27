import icons from "./images/icons.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-row text-white gap-8">
        <p>+48 111 111 111</p>
        <p>example@email.com</p>
        <p>Przykładowa 69 55-777 Miasto</p>
      </div>
      <div className="flex flex-row gap-5">
        <a href="https://www.linkedin.com/in/patrykstefanski/">
          <svg className="w-7 h-7 fill-defaultblack dark:fill-white">
            <use xlinkHref={`${icons}#icon-facebook2`} />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/patrykstefanski/">
          <svg className="w-7 h-7 fill-defaultblack dark:fill-white">
            <use xlinkHref={`${icons}#icon-instagram`} />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Footer;
