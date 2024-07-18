import { useRef, useState } from "react";
import "./file-upload.css";

const FileUpload = () => {
  const [file, setFile] = useState();
  const uploadReference = useRef();
  const progressReference = useRef();
  const statusReference = useRef();
  const loadReference = useRef();

  function handleUploadFile() {
    const file = uploadReference.current.files[0];
    // console.log(file);
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append("image", file);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleAbort, false);

    xhr.open("POST", "https://v2.convertapi.com/upload");
    xhr.send(formData);
  }

  function handleProgress(event) {
    loadReference.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`;
    const percentage = (event.loaded / event.total) * 100;
    progressReference.current.value = Math.round(percentage);
    statusReference.current.innerHTML = `${Math.round(
      percentage
    )} % Uploaded...`;
  }

  function handleSuccess(event) {
    statusReference.current.innerHTML = event.target.responseText;
    progressReference.current.value = 0;
  }
  function handleError() {
    statusReference.current.innerHTML = "Upload Failed! Please Try again";
  }
  function handleAbort() {
    statusReference.current.innerHTML = "Upload Aborted! Please Try again";
  }

  return (
    <div className="file-upload-container">
      <h2>File Upload</h2>
      <input
        onChange={handleUploadFile}
        type="file"
        name="file"
        ref={uploadReference}
      />
      <label>
        File Progress:
        <progress ref={progressReference} value={"0"} max={"100"} />
      </label>
      <p className="status" ref={statusReference}></p>
      <p className="load" ref={loadReference}></p>
      <img
        src={file}
        alt="File Upload img"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default FileUpload;
