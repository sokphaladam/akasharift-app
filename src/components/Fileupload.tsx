import React from "react";
import { UploadFileToFirebase } from "../store/firebase";

export default function Fileupload() {
  return (
    <input
      type="file"
      value={""}
      onChange={(e) => {
        if (e.target.files) {
          UploadFileToFirebase(e.target.files[0]);
        }
      }}
    />
  );
}

export const FileuploadComponent = Fileupload;
