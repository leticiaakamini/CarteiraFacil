import { FormControl, FormGroup } from "@angular/forms";

export class ValidacoesForm {

  static getMensagemErro(nomeCampo: string, nomeValidator: string, valorValidator?: any) {
    const config = {
      'required': `${nomeCampo} é obrigatório.`,
      'minlength': `${nomeCampo} precisa ter no mínimo ${valorValidator.requiredLength} caracteres.`,
      'maxlength': `${nomeCampo} precisa ter no máximo ${valorValidator.requiredLength} caracteres.`,
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': 'Campos não são iguais',
      'pattern': 'Campo inválido'
    };

    return config[nomeValidator];
  }

  static igualA(outroCampo: string) {
    const validator = (formControl: FormControl) => {
      if (outroCampo == null) {
        throw new Error('É necessário informar um campo.')
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const campo = (<FormGroup>formControl.root).get(outroCampo);

      if (!campo) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (campo.value !== formControl.value) {
        return { igualA : outroCampo };
      }

      return null;
    };

    return validator;
  }

  static telefoneValidator(telefone: FormControl){
    const tel = telefone.value;

    if(tel && tel !== ''){
      const validaTel = /^[0-9]{10,11}$/;
      return validaTel.test(tel) ? null : { telInvalido : true };
    }

    return null;
  }

  static valorValidator(valor: FormControl){
    const preco = valor.value;

    if(preco && preco !== ''){
      const validaPreco = /^[0-9]{1,10}[,]|[.][0-9]{2}$/;
      return validaPreco.test(preco) ? null : {precoInvalido : true}
    }
  }

}