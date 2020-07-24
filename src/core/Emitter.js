export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false
    }
    this.listeners[eventName].forEach(listiner => {
      listiner(...args)
    })
    return true
  }

  // Подписываемся на уведомление
  // Добавляем нового слушателя
  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)
    return () => {
      this.listeners[eventName] =
          this.listeners[eventName].filter(listiner => listiner !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('roman', data => console.log('Sub: ', data))
// emitter.emit('roman', 33)
//
// setTimeout(() => {
//   emitter.emit('roman', 'After 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('roman', 'After 4 seconds')
// }, 4000)
