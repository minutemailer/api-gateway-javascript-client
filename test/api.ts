// @ts-ignore
import Minutemailer from '../src/Minutemailer';

const minutemailer = new Minutemailer(process.env.MINUTEMAILER_API_KEY || 'nokey', 'http://api-gateway.minutemailer.test');

minutemailer.contact().index()
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));

minutemailer.contactList().index()
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));

minutemailer.field().index()
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));
