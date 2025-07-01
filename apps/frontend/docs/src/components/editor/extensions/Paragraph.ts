import {Node} from '@tiptap/core'

export const Paragraph = Node.create({
    name: 'paragraph',
    group: 'block',
    content: 'inline*',
    // 怎么渲染
    renderHTML({HTMLAttributes}) {
        return ['p', HTMLAttributes, 0]
    },

    // 怎么转json
    parseHTML() {
        return [{tag: 'p'}]
    }
})