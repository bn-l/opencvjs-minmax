import cv from "../../dist/index.js";

export function translateException(err: any) {
    if (typeof err === "number") {
        try {
            const exception = cv.exceptionFromPtr(err);
            return exception;
        } catch (error) {
            // ignore
        }
    }
    return err;
}
