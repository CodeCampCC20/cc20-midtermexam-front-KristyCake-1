import * as Yup from "yup"

export const schema = Yup.object({
  username: Yup.string().required('Put your EMAIL, please'),
  password: Yup.string().required('Put your PASSWORD, please')
})