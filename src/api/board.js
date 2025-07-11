import apiInstance from "@/plugin/axios"

export const getBoardMembers = async () => {
  const res = await apiInstance.get('/teams')
  return res.data
}

export const createBoardMember = (formData) => {
  return apiInstance.post('/teams', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const updateBoardMember = (id, formData) => {
  return apiInstance.post(`/teams/${id}?_method=PUT`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteBoardMember = (id) => {
  return apiInstance.delete(`/teams/${id}`)
}
