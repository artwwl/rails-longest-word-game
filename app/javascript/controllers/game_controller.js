import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]
  connect() {
    console.log("connected");
  }

  printInput(e){
    e.preventDefault()
    e.currentTarget.disabled = true
    e.currentTarget.classList.remove("btn-primary")
    e.currentTarget.classList.add("btn-danger")

    console.log(e.currentTarget.value)
    this.inputTarget.value += e.currentTarget.value
  }
}
