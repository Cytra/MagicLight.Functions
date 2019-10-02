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
});

export const contactUs = functions.https.onCall(async (data, context) => {
    const msg = {
        to: 'info@magiclight.lt',
        from: 'info@magiclight.lt',
        templateId: 'd-8f6f1f41238742c799925a8fdb6b3fde',
        dynamic_template_data: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            content: data.content,
        },
    };
    await sgMail.send(msg);

    return {success: true};
});

export const neworder = functions.https.onCall(async (data, context) => {
    const msg = {
        to: 'info@magiclight.lt',
        from: 'info@magiclight.lt',
        templateId: 'd-a9d389047ee6420cb64eaeb2b481c5b7',
        dynamic_template_data: {
            name: data.name,
            lastName: data.lastName,
            address: data.address,
            city: data.city,
            country: data.country,
            zipCode: data.zipCode,
            email: data.email,
            phone: data.phone,
            addInfo: data.addInfo,
            products: data.products,
            price: data.price,
            shipping: data.shipping,
            willpay: data.willpay,
        },
    };

    await sgMail.send(msg);
    return {success: true};
});

