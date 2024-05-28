import { InputData, SessionSeverObject } from "models/session_type";

export interface SessionState {
   session: SessionSeverObject | null
   sessionId: number
   user_inputs: InputData[]
}
