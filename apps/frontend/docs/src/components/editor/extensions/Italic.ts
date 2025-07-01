import {Mark} from '@tiptap/core'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        italic: {
            setItalic: () => ReturnType,
            unSetItalic: () => ReturnType,
            toggleItalic: () => ReturnType,
        }
    }
}

export const Italic = Mark.create({
    name: 'italic',
    renderHTML({HTMLAttributes}) {
        return ['i', HTMLAttributes, 0]
    },
    parseHTML() {
        return [{tag: 'i'}, {tag: 'em'}, {style: 'font-style: italic;'}]
    },
    addCommands() {
        return {
            setItalic: () =>
                ({commands}) => commands.setMark(this.name),
            useItalic: () =>
                ({commands}) => commands.unsetMark(this.name),
            toggleItalic: () =>
                ({commands}) => commands.toggleMark(this.name)
        }
    }
})