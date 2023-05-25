import axios from "axios"
const entdemohealthinsAPI = axios.create({
  baseURL: "https://ent-demo-alexion-v2-40843.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_list_list(payload) {
  return entdemohealthinsAPI.get(`/api/v1/list/`)
}
function api_v1_list_create(payload) {
  return entdemohealthinsAPI.post(`/api/v1/list/`, payload.data)
}
function api_v1_login_create(payload) {
  return entdemohealthinsAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return entdemohealthinsAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return entdemohealthinsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return entdemohealthinsAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return entdemohealthinsAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return entdemohealthinsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return entdemohealthinsAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_list_retrieve(payload) {
  return entdemohealthinsAPI.get(`/api/v1/list/${payload.id}/`)
}
function api_v1_list_update(payload) {
  return entdemohealthinsAPI.put(`/api/v1/list/${payload.id}/`, payload.data)
}
function api_v1_list_partial_update(payload) {
  return entdemohealthinsAPI.patch(`/api/v1/list/${payload.id}/`, payload.data)
}
function api_v1_list_destroy(payload) {
  return entdemohealthinsAPI.delete(`/api/v1/list/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return entdemohealthinsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return entdemohealthinsAPI.post(`/rest-auth/logout/`)
}
function api_v1_callcenter_list(payload) {
  return entdemohealthinsAPI.get(`/api/v1/callcenter/`)
}
function api_v1_callcenter_create(payload) {
  return entdemohealthinsAPI.post(`/api/v1/callcenter/`, payload.data)
}
function api_v1_callcenter_retrieve(payload) {
  return entdemohealthinsAPI.get(`/api/v1/callcenter/${payload.id}/`)
}
function api_v1_callcenter_update(payload) {
  return entdemohealthinsAPI.put(
    `/api/v1/callcenter/${payload.id}/`,
    payload.data
  )
}
function api_v1_callcenter_partial_update(payload) {
  return entdemohealthinsAPI.patch(
    `/api/v1/callcenter/${payload.id}/`,
    payload.data
  )
}
function api_v1_callcenter_destroy(payload) {
  return entdemohealthinsAPI.delete(`/api/v1/callcenter/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return entdemohealthinsAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return entdemohealthinsAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return entdemohealthinsAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return entdemohealthinsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return entdemohealthinsAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_list_list,
  api_v1_list_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_list_retrieve,
  api_v1_list_update,
  api_v1_list_partial_update,
  api_v1_list_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_callcenter_list,
  api_v1_callcenter_create,
  api_v1_callcenter_retrieve,
  api_v1_callcenter_update,
  api_v1_callcenter_partial_update,
  api_v1_callcenter_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
