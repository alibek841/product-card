export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) {
            throw new Error(`Form with id "${formId}" not found`);
        }
    }

    getValues() {
        const formData = new FormData(this.form);
        return Object.fromEntries(formData.entries());
    }

    isValid() {
        return this.form.checkValidity();
    }

    reset() {
        this.form.reset();
    }
}