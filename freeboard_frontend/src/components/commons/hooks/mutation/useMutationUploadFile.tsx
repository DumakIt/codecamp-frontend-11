import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const useMutationUploadFile = () => {
  const [mutation] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  const uploadFile = async (args) => {
    const result = await mutation({ variables: { file: args.file } });
    args.setImages(result.data?.uploadFile.url);
  };

  return { uploadFile };
};
