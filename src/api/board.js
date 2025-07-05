import apiInstance from "@/plugin/axios"

export const getBoardMembers = async () => {
  const res = await apiInstance.get('/teams')
  return res.data
}