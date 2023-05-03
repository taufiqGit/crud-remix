import path from "path";

type ConfigType = {
  rootPath: string;
};

export const Config: ConfigType = {
  rootPath: path.resolve(__dirname, ".."),
};
