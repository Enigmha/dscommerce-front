import { createContext } from "react";
import { AccessTokenPlayloadDTO } from "../models/auth";

export type ContextTokenType = {
  contextTokenPayload: AccessTokenPlayloadDTO | undefined;
  setContextTokenPayload: (accessTokenPayload: AccessTokenPlayloadDTO | undefined) => void;
};

export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => {},
});
