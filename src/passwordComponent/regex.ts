export const hasNumberRegex = /\d/;
export const hasSpecialCharRegex = /[!@#$%^&*]/;
export const hasUppercaseRegex = /[A-Z]/;
export const hasNoConsecutiveRegex = /^(?!.*([a-zA-Z\d])\1)/;
export const hasLettersRegex = /[a-zA-Z]/;
export const cleanRegex = /[^a-zA-Z0-9!@#$%^&*]/g;