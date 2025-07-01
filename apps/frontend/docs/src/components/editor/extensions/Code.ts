import {mergeAttributes, Node} from '@tiptap/core'
import {CodeRenderer} from './CodeRenderer'
import {ReactNodeViewRenderer} from "@tiptap/react";

export const Code = Node.create({
    name: 'code',
    group: 'block',
    content: 'inline*',

    priority: 1000,

    renderHTML({HTMLAttributes}) {
        return ['pre', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },

    parseHTML() {
        return [
            {
                tag: 'pre'
            }
        ]
    },

    addNodeView() {
        return ReactNodeViewRenderer(CodeRenderer)
    },
})