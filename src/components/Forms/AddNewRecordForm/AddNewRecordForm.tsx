import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Spacer from "@/components/Shared/Spacer/Spacer";
import SubmitButton from "@/components/Shared/SubmitButton/SubmitButton";
import { IAddNewRecordForm } from "@/types/global/expenditure";
import Input from "@/components/Shared/Input/Input";
import { addNewRecordInputs } from "@/utils/constants/expenditure.constants";
import DropZone from "@/components/DropZone/DropZone";
import ComboBox from "@/components/Shared/ComboBox/ComboBox";
import { useEffect, useState } from "react";
import { addNewRecordSchema } from "./AddNewRecordSchema";
import { IAddNewRecordFormData } from "./AddNewRecordForm.d";
import JSZip from "jszip";
import { useDispatch, useSelector } from "react-redux";
import {
  appendAttachment,
  updateAttachmentAtIndex,
} from "@/redux/reducer/expenditureReducer";
import { RootState } from "@/redux/store";
import {
  base64ToBlob,
  fetchFileBlob,
  saveBlobToBase64,
} from "@/utils/blobConverter";

interface FileWithPreview extends File {
  preview: string;
  fileBlob?: Blob;
}

const Form = (props: FormikProps<IAddNewRecordForm>) => {
  const {
    values,
    errors,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm,
  } = props;
  const [showDescription, setShowDescription] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const dispatch = useDispatch();
  const index = useSelector(
    (state: RootState) => state.pageConfig.addExpenditureModel.currentIndex
  );
  const attachment = useSelector(
    (state: RootState) => state.expenditure.attachment[index || 0]
  );

  useEffect(() => {
    const unzipFile = async () => {
      const zipBlob = base64ToBlob(attachment);
      const arrayBuffer = await zipBlob.arrayBuffer();
      const zipFile = await JSZip.loadAsync(arrayBuffer);

      const extractedFiles: any[] = [];
      zipFile.forEach((relativePath, file) => {
        extractedFiles.push(
          file.async("blob").then((fileBlob) => ({
            name: file.name,
            fileBlob,
            preview: URL.createObjectURL(fileBlob),
          }))
        );
      });

      const resolvedFiles = await Promise.all(extractedFiles);
      setFiles(resolvedFiles);
    };
    if (attachment && Object.keys(attachment).length !== 0 && index !== null) {
      unzipFile();
    }
  }, []);

  const displayFormInputs = addNewRecordInputs.map((input, index) => (
    <div
      key={`expenditure-input-${index}`}
      className={`${input.widthSize === "half" ? "w-[48%]" : "w-full"} ${
        !showDescription && input.name === "description" ? "hidden" : ""
      }`}
    >
      {input.type === "combobox" ? (
        <ComboBox
          options={input.options || []}
          onChange={(id, name) => {
            setFieldValue(input.name, name);
            if (id === 4) setShowDescription(true);
            else setShowDescription(false);
          }}
          placeholder={input.placeholder || ""}
          label={input.label}
          name={input.name}
          errors={errors}
          value={values?.[input.name] || ""}
        />
      ) : (
        <Input
          label={input.label}
          type={input.type}
          name={input.name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[input.name] || ""}
          errors={errors}
        />
      )}
    </div>
  ));

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = await validateForm();
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    const zip = new JSZip();
    for (const file of files) {
      const { name, fileBlob, preview } = file;
      let blob =
        fileBlob instanceof Blob ? fileBlob : await fetchFileBlob(preview);
      if (!blob.type) {
        const extension = name.split(".").pop()?.toLowerCase();
        let mimeType = "";

        if (extension === "png") mimeType = "image/png";
        else if (extension === "jpeg" || extension === "jpg")
          mimeType = "image/jpeg";
        else if (extension === "pdf") mimeType = "application/pdf";
        if (mimeType) {
          blob = new Blob([blob], { type: mimeType });
        }
      }
      zip.file(name, blob);
    }

    try {
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const base64Zip = await saveBlobToBase64(zipBlob);
      if (index) {
        dispatch(updateAttachmentAtIndex({ index, file: base64Zip }));
      } else {
        dispatch(appendAttachment(base64Zip));
      }

      // const formData = new FormData();
      // formData.append("files", zipBlob, "files.zip");
      // await fetch('/your-api-endpoint', {
      //   method: 'POST',
      //   body: formData,
      // });
      handleSubmit();
    } catch (error) {
      console.error("Error while zipping files:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-wrap gap-4 justify-between">
        {displayFormInputs}
      </div>
      <DropZone files={files} setFiles={setFiles} />
      <Spacer height={8} />
      <Spacer height={22} />
      <div className="w-full">
        <SubmitButton
          type="submit"
          value="Add now"
          bgColor="blue-900"
          borderColor="blue-900"
          textColor="white"
        />
      </div>
    </form>
  );
};

const AddNewRecordForm = withFormik<IAddNewRecordFormData, any>({
  mapPropsToValues: (props) =>
    props.initialData || {
      type: "",
      date: "",
      amount: null,
    },

  validationSchema: () => Yup.object().shape(addNewRecordSchema),

  handleSubmit: (values, { props }) => {
    props.handleSubmit(values);
  },
})(Form);

export default AddNewRecordForm;
