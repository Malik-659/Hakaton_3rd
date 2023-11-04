import React, { useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Helps = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-2/3 h-full">
        <h1 className="mt-16 mb-8 text-3xl">Вопросы к Нашей команде?</h1>
        <p className="mb-16 text-[12px]">
          Проверено 23 января 2023 года - Директорат правовой и административной
          информации (премьер-министр)
        </p>
        <div>
          <div className="flex justify-end mb-8 ">
            <button 
            onClick={() => {setShow(!show) 
                setShow2(!show2)
            setShow3(!show3)}}
            className="w-32 h-8 bg-blue-400 rounded-xl">
              расскрыть все
            </button>
          </div>
          <div className="flex items-center justify-between">
            <BsArrowRightSquareFill className="w-8 h-8" />
            <p>Есть Проблема?</p>
            {show ? (
                <IoMdArrowDropup onClick={() => setShow(false)}/>
                ) : (
                <IoMdArrowDropdown onClick={() => setShow(true)}/>
                )}
          </div>
          {show && (
            <ul className="mt-8 text-blue-700">
              <li><a href="">Создайте учетную запись или войдите в систему</a></li>
              <li><a href="">Сообщить о технической проблеме (баг, навигация ...)</a></li>
            </ul>
          )}
          <div className="flex items-center justify-between mt-8">
            <BsArrowRightSquareFill className="w-8 h-8" />
            <p>Есть Предложение по сайту?</p>
            {show2 ? (
                <IoMdArrowDropup onClick={() => setShow2(false)} />
                ) : (
                <IoMdArrowDropdown onClick={() => setShow2(true)}/>
                )}
          </div>
          {show2 && (
                <ol className="mt-8 text-blue-700">
                <li><a href="">Выскажите свое мнение</a></li>
              </ol>
            )}
          <div className="flex items-center justify-between mt-8">
            <BsArrowRightSquareFill className="w-8 h-8" />
            <p>Вопрос о ваших прав и процедурах</p>
            {show3 ? (
                <IoMdArrowDropup onClick={() => setShow3(false)}/>
                ) : (
                <IoMdArrowDropdown onClick={() => setShow3(true)} />
                )}
          </div>
          {show3 && (
                <ul className="mt-8 text-blue-700">
                <li><a href="">Задайте свой вопрос</a></li>
              </ul>
            )}
        </div>
      </div>
    </div>
  );
};

export default Helps;
