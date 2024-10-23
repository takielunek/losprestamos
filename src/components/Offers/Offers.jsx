const Offers = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1030px] px-[30px] sm:px-0";

  return (
    <div className="relative bg-beige">
      <div
        className={`${wrapper} pt-[20px] sm:pt-[150px] pb-[50px] sm:pb-[150px]`}
      >
        <p className="text-[25px] md:text-[32px] xl:text-[36px] text-roboto font-bold text-darkGreen ">
          ¡Retira 1500 € seleccionando las ofertas a continuación!
        </p>
        <p className="text-[16px] xl:text-[18px] text-offerText text-roboto mb-[18px]">
          Hemos analizado tu solicitud, a continuación te presentamos una lista
          de empresas que pueden otorgarte un préstamo. ¡Elija una oferta y
          obtenga efectivo! Recuerda que puedes aprovechar varias ofertas para
          pedir prestado todo lo que necesites.
        </p>

        {/* oferty */}

        <div className="flex flex-col sm:flex-row mb-[36px]">
          {/* oferty - 1 */}
          <div className="bg-white py-[16px] m-[8px] rounded-[4px] shadow-xl w-full sm:w-1/3 md:w-1/4 ">
            <div className="flex justify-around">
              <img
                src="https://application.casacredit.es/assets/img/Moneyman.png"
                alt=""
                className="h-[54px] p-[10px] mb-[10px]"
              />
            </div>
            <div className="text-offerText text-roboto text-center mb-[16px]">
              <p className="text-[16px] xl:text-[18px] ">Monto del préstamo:</p>
              <p className="text-[22px] xl:text-[18px] font-bold ">1500 €</p>
            </div>
            <div className="flex justify-around mb-[16px]">
              <button className="text-[16px] text-white font-bold bg-green hover:bg-darkGreen px-[16px] py-[12px] rounded-[4px]">
                Recoge tu efectivo
              </button>
            </div>
            <p className="text-[13px] xl:text-[18px] text-offerText text-roboto text-center pt-[5px] pb-[15px]">
              Período de amortización del préstamo: 30 dias
            </p>
          </div>
          {/* oferty - 2 */}
          <div className="bg-white py-[16px] m-[8px] rounded-[4px] shadow-xl w-full sm:w-1/3 md:w-1/4">
            <div className="flex justify-around">
              <img
                src="https://application.casacredit.es/assets/img/Moneyman.png"
                alt=""
                className="h-[54px] p-[10px] mb-[10px]"
              />
            </div>
            <div className="text-offerText text-roboto text-center mb-[16px]">
              <p className="text-[16px] xl:text-[18px] ">Monto del préstamo:</p>
              <p className="text-[22px] xl:text-[18px] font-bold ">1500 €</p>
            </div>
            <div className="flex justify-around mb-[16px]">
              <button className="text-[16px] text-white font-bold bg-green hover:bg-darkGreen px-[16px] py-[12px] rounded-[4px]">
                Recoge tu efectivo
              </button>
            </div>
            <p className="text-[13px] xl:text-[18px] text-offerText text-roboto text-center pt-[5px] pb-[15px]">
              Período de amortización del préstamo: 30 dias
            </p>
          </div>
        </div>

        {/* oferty - koniec */}

        <div className="mt-[72px]">
          <p className="text-[20px] md:text-[22px] xl:text-[25px] text-roboto text-center font-bold text-darkGreen mt-[32px] xl:mt-[36px] mb-[16px]">
            ¿Aún no has podido conseguir un préstamo?
          </p>
          <div className="flex justify-around">
            <button className="text-white font-bold bg-green hover:bg-darkGreen px-[16px] py-[12px] rounded-[4px]">
              Consulta ofertas adicionales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
