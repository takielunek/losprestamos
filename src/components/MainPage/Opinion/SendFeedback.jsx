import title from "/src/assets/title.png";
import arrow from "/src/assets/arrow.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import dataSender from "../../../dataSender.js";

const SendFeedback = () => {
  const [isSend, setIsSend] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const input =
    "w-full rounded-[10px] border-[1.5px] border-darkGreen py-[12px] px-[16px] text-[12px] sm:text-[16px] text-roboto ";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data) {
      const transferred = {
        ...data,
      };
      console.log(transferred);
      dataSender(JSON.stringify(data));
      setIsSend(true);
      setErrorMessage(false);
    }
  };

const handleSendClick = () => {
  if (input1.trim() === "" || input2.trim() === "") {
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 500); 
  } else {
    onSubmit();
  }
};

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div
      className="mb-[24px] sm:w-[80%] xl:w-[72%] sm:ml-[50px]"
      onKeyPress={handleKeyPress}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
        <img
          src={title}
          alt="Deja tus comentarios"
          className={`${
            isSend ? "hidden" : "block"
          } py-[30px] sm:py-0 sm:mb-[30px] `}
        />

        <input
          className={`${isSend ? "hidden" : "block"} ${input} mb-[15px] nameInput`}
          type="text"
          placeholder="Introduce tu nombre y apellido"
          {...register("firstName", { required: true, minLength: 3 })}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <textarea
          className={`${isSend ? "hidden" : "block"} ${input} messageTextArea`}
          placeholder="Deja tu comentario..."
          rows="6"
          {...register("comment", { required: true, minLength: 3 })}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        ></textarea>
        <div>
          <button
            type="submit"
            onClick={handleSendClick}
            className={`${
              isSend ? "hidden" : "block"
            } flex justify-center items-center bg-red hover:bg-green duration-300 text-white font-bold text-roboto text-[12px] sm:text-[18px] py-[12px] px-[30px] rounded-[10px] mt-[15px]`}
          >
            <p> Envía tu opinión</p>
            <img src={arrow} alt="" className="ml-[10px] xss:ml-[18px]" />
          </button>
        </div>
        {errorMessage && (
          <div className="absolute top-[-40px] left-0 bg-red rounded-xl px-[20px] py-[5px] duration-300">
            <p className="text-white text-[13px] text-roboto">
              ¡Completa todos los campos!
            </p>
          </div>
        )}

        {isSend && (
          <div className="flex justify-center mt-[150px]">
            <div className="text-center">
              <p className="text-[18px] gilroyMedium">
                ¡Gracias por su opinión!
              </p>
              <p className="text-[14px] gilroyMedium">
                Aparecerá en la lista pronto. :)
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SendFeedback;
