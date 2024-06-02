import {
  IErrorResponseBody,
  ISuccessResponseBody,
} from "../interface/interface";

export const successResponse = ({
  res,
  data,
  status = 200,
  message = "success",
}: ISuccessResponseBody): void => {
  res.status(status).json({ success: true, data: data, message });
};

export const errorResponse = ({
  res,
  status = 400,
  message = "error",
}: IErrorResponseBody): void => {
  res.status(status).json({ success: false, message });
};
