export class Noiser {
  private static randomize(value: string): string {
    return value
      .split('')
      .map((char) => {
        if (char.match(/[0-9a-zA-Z]/)) {
          return String.fromCharCode(
            Math.floor(Math.random() * 26) + 97, // Random lowercase letter (ASCII 97-122)
          )
        } else if (char.match(/[\s]/)) {
          return ' ' // Keep spaces as they are
        } else {
          return String.fromCharCode(
            Math.floor(Math.random() * 15) + 33, // Random symbol (ASCII 33-47)
          )
        }
      })
      .join('')
  }

  constructor(private readonly period: number = 50) {}

  public start(value: string, callback: (chars: string) => void) {
    if (value === '' || value === null || value === undefined) return
    let index = 1
    let chars = value[0] ?? ''
    const maxIndex = value.length
    let currentPeriod = this.period

    const tick = () => {
      if (index >= maxIndex + 10) {
        callback(value)
        return
      }
      if (index < maxIndex) {
        chars += value[index]
      }
      callback(
        chars.substring(0, Math.max(0, index - 10)) +
          Noiser.randomize(chars.substring(Math.max(0, index - 10), index)),
      )
      index += 1
      currentPeriod = Math.max(5, currentPeriod * 0.95)
      setTimeout(tick, currentPeriod)
    }

    setTimeout(tick, currentPeriod)
  }
}
