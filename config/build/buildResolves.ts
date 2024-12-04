import {ResolveOptions} from "webpack";

export default function buildResolves() : ResolveOptions {
    return {
        extensions: ['.ts', '.js', '.tsx']
    }
}