import { helper } from '@ember/component/helper';

export function capitalizeFirstLetter(params) {
  const string = params[0].string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default helper(capitalizeFirstLetter);
