export type CursorUser = {
    name: string
    color: string
    iconUrl: string
}

const getIcon = (userName: string) => {
    return `https://robohash.org/${userName}?set=set1&size=100x100`
}

export const cursorRender = (user: CursorUser) => {
    // cursor 容器
    const cursor = document.createElement('span')
    cursor.style.position = 'relative'
    // cursor.style.backgroundColor = user.color
    //cursor 头像
    const cursorAvatar = document.createElement('img')
    // const randomHair = Math.floor(Math.random() * 3) + 1
    // cursorAvatar.src = `https://api.dicebear.com/8.x/lorelei/svg?size=32&hair=variant0${randomHair}`
    cursorAvatar.src = getIcon(user.name)
    cursorAvatar.style.backgroundColor = user.color
    cursorAvatar.style.border = '2px solid #f2f2f2'

    cursorAvatar.style.width = '36px'
    cursorAvatar.style.maxWidth = '36px'
    cursorAvatar.style.height = '36px'
    cursorAvatar.style.borderRadius = '50%'
    cursorAvatar.style.left = '0'
    cursorAvatar.style.top = '-36px'
    cursor.appendChild(cursorAvatar)
    // cursor 尾巴
    const cursorTrail = document.createElement('span')
    cursorTrail.style.position = 'absolute'
    cursorTrail.style.width = '2px'
    cursorTrail.style.height = '100%'
    cursorTrail.style.backgroundColor = user.color
    cursorTrail.style.left = '-1px'
    cursorTrail.style.top = '0'
    cursor.appendChild(cursorTrail)
    return cursor
}