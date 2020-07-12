import {capitalize} from '@core/utils';

export class DomListiner {
  constructor($root, listiners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListiner');
    }
    this.$root = $root;
    this.listiners = listiners;
  }

  initDOMListiners() {
    this.listiners.forEach(listiner => {
      const method = getMethodName(listiner)
      if (!this[method]) {
        throw new Error(`
          Method ${method} is not implemeted in ${this.name || ''} Component
        `)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listiner, this[method])
    })
  }

  removeDOMListiners() {
    this.listiners.forEach(listiner => {
      const method = getMethodName(listiner)
      this.$root.off(listiner, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
