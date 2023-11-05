import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = ({ setOpenModal }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [passportText, setPassportText] = useState("");

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    const flippedImageSrc = await flipImage(imageSrc);
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
    <div className="w-[1000px] h-[1000px]">
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        X
      </button>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
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
    </div>
  );
};

export default Camera;
