import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({

    message: '',
    emailAddress: '',
    responseMessage: '',

    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isValidMsg: gte('message.length', 5),
    isValid: and('isValidEmail', 'isValidMsg'),
    isNotValid: not('isValid'),

    actions: {

        saveInvitation() {
            alert(`Sending msg: ${this.get('message')}  from: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }

});
