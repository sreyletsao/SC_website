import apiInstance from "@/plugin/axios"

export const getSponsor = async () => {
  const res = await apiInstance.get('/sponsors')
  return res.data
}