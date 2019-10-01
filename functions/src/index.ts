import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const generateMail = functions.https.onCall(async (data, context) => {
    const msg = {
        to: 'info@magiclight.lt',
        from: 'info@magiclight.lt',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: "subject",
            name: "name",
        },
    };

    await sgMail.send(msg);
})

