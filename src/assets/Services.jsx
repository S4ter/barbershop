import icons from "./images/icons.svg";

function Services() {
  return (
    <div className="bg-no-repeat bg-cover bg-center py-30 bg-maingray-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-white font-roboto text-5xl tracking-tight">
          Nasze usługi
        </h2>
        <div className="max-w-lg flow-text break-words text-base font-thin text-white mx-auto py-3">
          Oferujemy kompleksowy zakres usług fryzjerskich, które zapewnią Ci
          perfekcyjny wygląd na każdą okazję.
        </div>
        <div className="grid grid-cols-3 gap-6 text-white text-left pt-10">
          <div className="relative bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-hairclipper`} />
            </svg>
            <h3 className="font-bold text-xl py-2">Strzyżenie</h3>
            <p>
              Precyzyjne cięcie włosów dostosowane do Twojego stylu i
              preferencji.
            </p>
          </div>
          <div className="relative mx-auto bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-wash`} />
            </svg>{" "}
            <h3 className="font-bold text-xl py-2">Mycie</h3>
            <p>
              Odświeżający zabieg mycia włosów z użyciem profesjonalnych
              szamponów.
            </p>
          </div>
          <div className="relative mx-auto bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-styling`} />
            </svg>
            <h3 className="font-bold text-xl py-2">Stylizacja</h3>
            <p>
              Ułożenie włosów, które podkreśli ich naturalny kształt i dopasuje
              do Twojego wizerunku.
            </p>
          </div>
          <div className="relative mx-auto bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-shave`} />
            </svg>
            <h3 className="font-bold text-xl py-2">Golenie</h3>
            <p>
              Staranna i dokładna pielęgnacja zarostu, zapewniająca gładką skórę
              i perfekcyjny wygląd.
            </p>
          </div>
          <div className="relative mx-auto bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-coloring`} />
            </svg>
            <h3 className="font-bold text-xl py-2">Koloryzacja</h3>
            <p>
              Zmiana koloru włosów, która nada im nowoczesny i świeży wygląd.
            </p>
          </div>
          <div className="relative mx-auto bg-maingray-3 px-10 py-15 rounded-3xl">
            <svg className="absolute top-5 right-5 w-13 h-13 fill-none stroke-orange outline-1 outline-orange outline-offset-2 rounded-full ">
              <use xlinkHref={`${icons}#icon-wax`} />
            </svg>
            <h3 className="font-bold text-xl py-2">Depilacja</h3>
            <p>Skuteczne usuwanie zbędnego owłosienia, brwi, uszu i nosa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
