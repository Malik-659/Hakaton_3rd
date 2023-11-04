import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [passportText, setPassportText] = useState("");

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    // Отразите изображение горизонтально перед передачей в Tesseract
    const flippedImageSrc = await flipImage(imageSrc);

    // Извлечение текста из отраженного снимка паспорта
    Tesseract.recognize(flippedImageSrc, "eng")
      .then(({ data: { text } }) => {
        setPassportText(text);
      })
      .catch((error) => {
        console.error("Ошибка OCR:", error);
      });
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  // Функция для отражения изображения горизонтально
  const flipImage = async (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.translate(img.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0);
        const flippedImageSrc = canvas.toDataURL("image/png");
        resolve(flippedImageSrc);
      };
    });
  };

  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true} // Оставьте mirrored в значении true
      />
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>

      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}

      <div>
        <h2>Извлеченный текст из паспорта:</h2>
        <p>{passportText}</p>
      </div>
    </>
  );
};

export default Camera;
