import {DomListiner} from '@core/DomListiner';

export class ExcelComponent extends DomListiner {
  constructor($root, options = {}) {
    super($root, options.listiners);
    this.name = options.name || ''
  }

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListiners();
  }

  destroy() {
    this.removeDOMListiners()
  }
}

