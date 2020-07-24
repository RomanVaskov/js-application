import {DomListiner} from '@core/DomListiner';

export class ExcelComponent extends DomListiner {
  constructor($root, options = {}) {
    super($root, options.listiners);
    this.name = options.name || ''
    this.emitter = options.emitter

    this.prepare()
    this.unsubs = []
  }

  // Настраиваем наш компонент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }

  // Уведомляем слушателя про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }

  // Инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListiners();
  }

  // Удаляем компонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListiners()
    this.unsubs.forEach(unsub => unsub())
  }
}

