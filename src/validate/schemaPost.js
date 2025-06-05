import * as Yup from "yup"

export const schemaPost = Yup.object({
  taskName: Yup.string().required('Put your task name, please'),
})