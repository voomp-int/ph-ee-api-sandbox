import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
  UploadContainer
} from "../StyledElements/DocumentUploadStyledElement";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2000000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const DocumentsUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
   
    for (let file of newFiles) {
      if (!otherProps.multiple) {
          return { file };
      }
      files[file.name] = file;
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    console.log(filesAsArray)
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {

      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <>
    <UploadContainer>
      <FileUploadContainer>
        <InputLabel>{label}</InputLabel>
        <DragDropText>Add your files here</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span style={{background: "none"}}> Add {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      {/* <FilePreviewContainer>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
                <InputLabel>{index}</InputLabel>
         
            );
          })}
        </PreviewList>
      </FilePreviewContainer> */}
      </UploadContainer>
    </>
  );
};

export default DocumentsUpload;