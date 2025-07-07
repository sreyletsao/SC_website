import apiInstance from "@/plugin/axios"
export const getOnSiteTeam = async () => {
  const res = await apiInstance.get('/staffs')
  return res.data
}