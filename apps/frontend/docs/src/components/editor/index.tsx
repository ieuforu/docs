import {useMemo} from 'react'
import {EditorProvider, useCurrentEditor} from '@tiptap/react'
import {Document} from './extensions/Document'
import {Text} from './extensions/Text'
import {Italic} from './extensions/Italic.ts'
import {Paragraph} from "./extensions/Paragraph.ts";
import {Collaboration} from '@tiptap/extension-collaboration'
import {CollaborationCursor} from '@tiptap/extension-collaboration-cursor'
// 基础数据层
import * as Y from 'yjs'

// 传输层
import {WebsocketProvider} from "y-websocket";
import {cursorRender} from "./extensions/CursorRender.ts";
import {Code} from "./extensions/Code.ts";

const yDoc = new Y.Doc()

const provider = new WebsocketProvider('ws://localhost:3000', 'yjs-doc-demo', yDoc)

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const Toolbar = () => {
    const {editor} = useCurrentEditor()
    const handleItalic = () => {
        editor?.chain().focus().toggleItalic().run()
    }
    return (
        <div>
            <button onClick={handleItalic}>斜体</button>
        </div>
    )
}

export const Editor = () => {
    // 按照插件化的思想，拓展核心功能
    const extensions = useMemo(
        () => [
            Document,
            Text,
            Italic,
            Code,
            Paragraph,
            Collaboration.configure({
                document: yDoc,
            }),
            CollaborationCursor.configure({
                provider: provider,
                user: {
                    name: 'lve' + Math.random(),
                    color: getRandomColor(),
                },
                render: cursorRender
            }),
        ],
        []
    )

    const content = useMemo(() => {
        return {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: '123123'
                        },
                        {
                            type: 'code',
                            content: [
                                {
                                    type: 'text',
                                    text: 'console.log(1)'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }, [])

    return (
        <div style={{width: '100%', height: '800px', border: '1px solid'}}>
            <EditorProvider extensions={extensions} content={content}>
                <Toolbar/>
                {/*从XML --> JSONContent 编辑器编译原理 */}
                {/*<Doc>
                    <Paragraph>
                        <Text>123</Text>
                    </Paragraph>
                </Doc>*/}
            </EditorProvider>
        </div>
    )
}
