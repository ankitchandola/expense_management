export interface FileWithPreview extends File {
  preview: string;
}

export interface IDropZoneProps {
  files: FileWithPreview[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
}
