export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        if (!this.modal) {
            throw new Error(`Modal with id "${modalId}" not found`);
        }

        this.overlay = this.modal.previousElementSibling?.classList.contains("overlay")
            ? this.modal.previousElementSibling
            : document.querySelector(".overlay");

        this.closeButton = this.modal.querySelector(".modal__close");
        this.isOpen = false;

        this.closeButton?.addEventListener("click", () => this.close());
    }

    open() {
        this.modal.classList.add("modal-showed");
        if (this.overlay) {
            this.overlay.classList.add("modal-showed");
        }
        this.isOpen = true;
    }

    close() {
      this.modal.classList.remove("modal-showed");
      if (this.overlay) {
          this.overlay.classList.remove("modal-showed");
        }
      this.isOpen = false;
    
      const form = this.modal.querySelector("form");
      if (form) {
          form.blur();
          form.noValidate = true; 
        }
    }

    isOpened() {
        return this.isOpen;
    }
}