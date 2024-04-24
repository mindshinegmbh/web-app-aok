import { Session } from "models/session_type";

export interface SessionState {
   session: Session | null
   sessionId: number
}
