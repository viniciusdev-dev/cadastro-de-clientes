export function validarEmail(email) {
    return email.email.inludes('@') && email.icludes (".");

}
export function LimparCmaopos(...inputs) {
    inputs.forEach(input => input.value = '');

}
     