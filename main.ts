import { IMethod, ISource } from "./types"

const createMethod = (source : ISource, name: string, method: IMethod): void => {
    switch(typeof source) {
        case "string": {
            String.prototype[name] = method
            break
        }
        case "number": {
            Number.prototype[name] = method
            break
        }
        case "boolean": {
            Boolean.prototype[name] = method
            break
        }
        case "object": {
            if ((source as any).isArray()) Array.prototype[name] = method
            else Object.prototype[name] = method
            break
        }
    }
}

export default createMethod