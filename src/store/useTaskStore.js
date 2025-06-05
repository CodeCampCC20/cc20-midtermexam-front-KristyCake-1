import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

export const useTaskStore = create(persist((set) => ({
  posts: [],
  fetchTaskData: async (id) => {
    const res = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`)
    console.log('userId', id)
    console.log("url", `http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`)
    console.log("res", res)
    set({ posts: res.data.todos })
  },
})), {
  name: "store-data"
})