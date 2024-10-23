

const ContactUs = () => {

     const wrapper =
       "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";


  return (
    <div className="bg-beige">
      <div className={`${wrapper}`}>
        <p className=" font-roboto font-bold text-darkGreen text-center text-[40px] sm:text-[50px] bold pt-[20px] sm:pt-[100px] mb-[150px]">
          Contacto
        </p>
        <div className="text-center pb-[250px]">
          <p className="font-roboto text-[24px] text-darkGreen mb-[24px] ">
            Contacto con el Inspector de Protección de Datos Personales:
          </p>
          <div className="mb-[24px]">
            <a
              className=" text-[26px] xxs:text-[30px] font-roboto font-bold text-green hover:underline duration-300"
              href="mailto:info@losprestamos.es"
            >
              info@losprestamos.es
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs