export const getTime = () => {
    const date = new Date()
    const time = date.toLocaleTimeString()
    const milisecond = date.getMilliseconds()

    return `${time}:${milisecond}`
}