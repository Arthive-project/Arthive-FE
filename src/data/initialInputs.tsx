const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

export const INITIAL_INPUTS = {
  CODENAME: '',
  GUNAME: '중랑구',
  TITLE: '',
  PLACE: '',
  ORG_NAME: 'string',
  DATE: '',
  USE_TRGT: '',
  USE_FEE: '',
  PLAYER: '',
  PROGRAM: '',
  ETC_DESC: '',
  ORG_LINK: '',
  MAIN_IMG: '',
  RGSTDATE: formattedDate,
  TICKET: 'string',
  STRTDATE: '',
  END_DATE: '',
  THEMECODE: 'string',
  LOT: '',
  LAT: '',
  IS_FREE: '유료',
  HMPG_ADDR: 'string',
};
