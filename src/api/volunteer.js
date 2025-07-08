import apiInstance from "@/plugin/axios"

export const getVolunteer = async () => {
  const res = await apiInstance.get('/volunteers')
  return res.data
}