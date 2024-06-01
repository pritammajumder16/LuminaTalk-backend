const devOrigin = "*";
const prodOrigin = "";
export const corsConfig =
  process.env.NODE_ENV == "production"
    ? { credentails: true, origin: devOrigin }
    : { credentails: true, origin: prodOrigin };
