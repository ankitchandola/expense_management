import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import style from "./DropZone.style.module.css";
import Spacer from "@/components/Shared/Spacer/Spacer";
import { IDropZoneProps } from "./DropZone.d";

const DropZone: React.FC<IDropZoneProps> = ({ files, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles((prev) => [
        ...prev,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            fileBlob: file,
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const thumbs = files.map((file, index) => (
    <div className={style.thumb} key={file.name}>
      <div
        className={`border-1 border-neutral-300 rounded-lg py-5 px-8 ${style.thumbInner} relative`}
      >
        <div
          className="flex items-center justify-center bg-neutral-800 w-6 h-6 p-1 rounded-full absolute top-1.5 right-1.5 cursor-pointer"
          onClick={() => removeFile(index)}
        >
          <img src={"/icons/close-white.svg"} alt="close icon" />
        </div>
        <img
          src={file.preview}
          className={style.img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div className="border-1 border-amber-50 py-5 ">
        <p className="font-normal text-base text-gray-700">Upload Documents</p>
      </div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="border-1 border-neutral-300 rounded-lg py-2.5 px-3.5"
      >
        <input {...getInputProps()} />
        <div className="border-1 border-neutral-300 rounded-lg w-9 h-9 m-auto flex items-center justify-center">
          <img
            src={"/icons/upload.svg"}
            alt="upload icon"
            className="w-5 h-5"
          />
        </div>
        <Spacer height={10} />
        <p className="font-normal text-xs text-center text-blue-950">
          Click to upload leave document
        </p>
        <p className="font-normal text-xs text-center text-zinc-900">
          PNG , JPG or PDF
        </p>
      </div>
      <Spacer height={20} />
      <aside className={style.thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default DropZone;
