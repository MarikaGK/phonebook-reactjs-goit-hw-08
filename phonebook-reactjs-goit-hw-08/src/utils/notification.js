import { Notify } from 'notiflix';

const notifyRegisterSuccess = () => {
  Notify.success(
    'Welcome to PhoneBook! Have some fun adding new contacts to your list'
  );
};

const notifyRegisterFailure = () => {
  Notify.failure(`Something went wrong`);
};

const notifyLogingInSuccess = () => {
  Notify.success(`Welcome back to PhoneBook! Nice to see you again`);
};

const notifyLogingInFailure = () => {
  Notify.failure('Something went wrong. Incorrect email or password');
};

const notifyContactExist = name => {
  Notify.warning(`${name} is already in contacts`);
};

const notifyNumberExist = number => {
  Notify.warning(`${number} is already in contacts`);
};

const notifyEmptyNameInput = () => {
  Notify.warning('Name field should be filled');
};

const notifyEmptyNumberInput = () => {
  Notify.warning('Number field should be filled');
};

const notification = {
  notifyRegisterSuccess,
  notifyRegisterFailure,
  notifyLogingInSuccess,
  notifyLogingInFailure,
  notifyContactExist,
  notifyNumberExist,
  notifyEmptyNameInput,
  notifyEmptyNumberInput,
};

export default notification;
