import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({

    emailAddress: '',
    message: '',
    responseMessage: '',

    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isValidMsg: gte('message.length', 5),
    isValid: and('isValidEmail', 'isValidMsg'),
    isNotValid: not('isValid'),

    actions: {

        sendMessage() {
            var email = this.get('emailAddress');
            var message = this.get('message');
            var responseMessage = 'To: ' + email + ', Message: ' + message;

            alert('Sending your message in progress... ');

            const newContact = this.store.createRecord('contact', { email, message });

            newContact.save().then(response => {
                this.set('responseMessage', responseMessage);
                this.set('emailAddress', '');
                this.set('message', '');
              });
            
        }
    }

});
