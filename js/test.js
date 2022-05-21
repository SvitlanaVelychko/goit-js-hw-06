class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const toggle1 = new Toggle();
toggle1.toggle();
console.log(toggle1.on);

const toggle2 = new Toggle({ isOpen: true });
toggle2.toggle();
console.log(toggle2.on);