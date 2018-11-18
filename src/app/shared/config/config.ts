export class Config {
  static disableTicketsColor: string = '#B6B6B6';
  static myTicketsColor: string = 'green';
  // true input
  static trueInfoBorder = '';
  static trueInfoBackground = '';
  static trueInfoColor = '';
  static trueInfoClass = 'true-info-class';
  // false input
  static falseInfoBorder = '#ccc .1em solid!important';
  static falseInfoBackground = '';
  static falseInfoColor = '';
  static falseInfoClass = 'false-info-class';
  static PHONE_MASK = ['3', '8', ' ', '(', /\d/, /\d/, /\d/, ')', '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  static EMAIL_MASK = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
  static indexCountErrorLoadPage: number = 5;
  static NAME_PROJECT = 'SOLD-OUT';
  static URL_CLIENT = 'http://localhost:4200';
  static DEF_PHOTO = Config.URL_CLIENT + '/assets/resource/img/main_logo.svg';
  static MY_SELECTED_SEAT: string = 'rgb(42, 187, 16)';
  static DISABLE_SEAT: string = '#CCC';

  static notifyOn: string = '#27AE60';
  static notifyOff: string = '#ff0066';
}
