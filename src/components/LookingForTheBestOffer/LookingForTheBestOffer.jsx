const LookingForTheBestOffer = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div className="relative bg-beige">
      <div
        className={`${wrapper} pt-[20px] sm:pt-[150px] pb-[50px] sm:pb-[150px]`}
      >
        <p className="text-[24px] md:text-[30px]  text-roboto font-bold text-darkGreen text-center leading-[29px] md:leading-[37px] pt-[32px] mb-[16px]">
          ¡Tu solicitud de préstamo ha sido aprobada! Estamos buscando la mejor
          oferta...
        </p>
        <p className="text-[16px] xl:text-[18px] text-center text-darkGreen gilroyLight leading-[18px] px-[8px] mt-[16px] mb-[24px]">
          Actualmente, estamos esperando la decisión de los prestamistas. En un
          momento te mostraremos las ofertas preparadas.
        </p>

        <div className="flex justify-around mt-[50px]">
          <div
            className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-green"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForTheBestOffer;
