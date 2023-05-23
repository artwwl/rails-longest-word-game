import { Controller } from "@hotwired/stimulus"

let lastId;

export default class extends Controller {
  static targets = ["input", "button"]

  connect() {
    lastId = 0
  }


  disableButton(button) {
    button.disabled = true
    button.classList.remove("btn-primary")
    button.classList.add("btn-danger")
    lastId += 1

    button.setAttribute('data-id', lastId)
  }

  enableButton() {
    this.buttonTargets.forEach((button) => {
      if (parseInt(button.dataset.id) === lastId){
        button.disabled = false
        button.classList.add("btn-primary")
        button.classList.remove("btn-danger")
      }
    })
    lastId -= 1;
  }

  backspace(e){
    e.preventDefault()
    let newValue = this.inputTarget.value.split('')
    newValue.splice(-1, 1)
    newValue = newValue.join('')
    this.inputTarget.value = newValue

    this.enableButton()
  }

  keyCheck(e){
    // console.log(e.key)
    if (e.key === 'Backspace') {
      this.backspace(e)
    }

    // console.log(this.buttonTargets)
    for (let button of this.buttonTargets) {
      // console.log(button)
      if (button.value === e.key.toUpperCase()) {
        if (!button.disabled) {
          this.inputTarget.value += button.value
          this.disableButton(button)
          break
        }
      }
    }
  }

  printInput(e){
    e.preventDefault()
    this.disableButton(e.currentTarget)
    this.inputTarget.value += e.currentTarget.value
  }

}
