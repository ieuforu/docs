import {NodeViewWrapper, type NodeViewProps,} from '@tiptap/react'

export const CodeRenderer = (props: NodeViewProps) => {
    const {node, HTMLAttributes} = props
    const {content} = node
    const code = Array.from(content.content)
    const codeStr = code.map(i => i.text)

    return (
        <NodeViewWrapper>
            <div className={'docx-code-block'} data-block-type={'code'}>
                <pre {...HTMLAttributes}>{codeStr}</pre>
                <form>
                    <input/>
                    <input type={'radio'}/>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>123</th>
                    </tr>
                    <tr>
                        <th>12</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </NodeViewWrapper>
    )
}
