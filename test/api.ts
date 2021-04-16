// @ts-ignore
import fetch from 'node-fetch';
import Minutemailer from '../src/Minutemailer';

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

const minutemailer = new Minutemailer(process.env.MINUTEMAILER_API_KEY || 'nokey', 'http://api-gateway.minutemailer.test');

minutemailer.contact().index()
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));

minutemailer.contactList().index()
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));

minutemailer.contact().show('a0a949e0-4539-48b3-8a1f-e134dca5368a')
    .then((res) => console.log(res))
    .catch((ex) => console.error(ex));
