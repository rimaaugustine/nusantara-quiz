import fetch from "isomorphic-unfetch"
import { api, init } from "./config"

export const space_id = "381el0fe1wnr"
export const access_token = "79049fa3e3330fdad5efc9cfaa8108947ba665833011e56217e3d9c44882bf74"

export const get = function(path) {
  return fetch(`${api}${path}`, init)
}
