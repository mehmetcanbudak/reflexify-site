import { createContext } from "react"
import { E } from "/utils/state.js"

export const initialState = {"drawer_state": {"show_left": false}, "header_state": {"withNav": [["Home", "/home/start"], ["Setup", "/setup/setup"], ["Material", "/material/setup"]]}, "is_hydrated": false}
export const initialEvents = [E('main_state.hydrate', {})]
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);