// 创建基础文档顶层结构
// 节点创建 Node
// 修饰 Mark
import {Node} from '@tiptap/core'

export const Document = Node.create({
    name: 'doc',
    topNode: true,
    content: 'block+', // 可以有多个节点
})