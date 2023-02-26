import { getNewAccessToken } from "./../libraries/getNewAccessToken";
import { atom, selector } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getNewAccessToken();
    return newAccessToken;
  },
});
