import React from "react";
import Image from "next/image";
const page = () => {
  return (
    // bg-red-400
    <div className=" flex lg:gap-5 gap-28 justify-start lg:justify-center lg:ms-[500px] flex-wrap lg:flex-nowrap ms-4 mb-3 lg:mb-10">
      <section
        className="lg:absolute lg:inset-0 w-auto lg:w-1/2 top-28  lg:mt-28 max-h-80 rounded-e-3xl lg:rounded-e-full ps-3 pb-3 "
        style={{ backgroundColor: "#BE1A1B" }}
      >
        {" "}
        <div className="relative">
          <h2
            className="md:text-4xl text-2xl font-semibold mt-3 md:mt-11 text-white lg:absolute right-48 max-w-96"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#ff9595",
            }}
          >
            Фарш мелкого и крупного помола
          </h2>

          <p className="mt-6 text-white max-w-lg lg:absolute right-16 top-28">
            Наш фарш мелкого помола производится с использованием отборного
            мяса, которое проходит строгий контроль на каждом этапе. Мы
            обеспечиваем идеальную текстуру и однородность, чтобы продукт
            подходил для различных блюд. Подходит для домашнего использования и
            профессиональной кулинарии.
          </p>
        </div>
      </section>

      <div className="mt-5 flex gap-1 flex-nowrap lg:flex-wrap">
        <div className="flex flex-col gap-2">
          <Image
            src={"/largeMeat.webp"}
            alt="Фарш"
            width={200}
            height={150}
            className="rounded-lg h-44 w-full max-w-52"
          />

          <Image
            src={"/farchTwo.jpg"}
            alt="Фарш"
            width={200}
            height={200}
            className="rounded-lg w-full max-w-52"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={"/farchFive.jpg"}
            alt="Фарш"
            width={200}
            height={240}
            className="rounded-lg h-64 w-full max-w-52"
          />
          <Image
            src={"/farchFour.jpg"}
            alt="Фарш"
            width={200}
            height={200}
            className="rounded-lg max-60 max-h-48 w-full max-w-52"
          />
          <p className="max-w-[270px]">
            Продукция соответствует всем стандартам ХАЛЯЛ. Не содержит соевых
            продуктов и ГМО. Вес продукта: 450 ± 10 г. Срок хранения: при
            температуре -3°С — 10-15 дней; при температуре -18°С — 40 дней.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
