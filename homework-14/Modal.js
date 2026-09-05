export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;


    this.closeButton = this.modal.querySelector('#modal-close-button');

    this.#closeHandler = () => {
      this.close();
    };

    this.button = document.getElementById(buttonId);
    this.#initOpen();
  }

  #closeHandler = null;

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#closeHandler);
    }
    this.closeButton.addEventListener('click', this.#closeHandler);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

  
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.#closeHandler);
    }
    this.closeButton.removeEventListener('click', this.#closeHandler);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen() {
    this.button.addEventListener('click', () => {
      this.open();
    });
  }
}