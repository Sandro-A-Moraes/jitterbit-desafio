import type { TokenPayload } from "../../middlewares/auth.middleware";

declare global {
    namespace Express {
        export interface Request {
            userId?: TokenPayload;
        }
    }
}