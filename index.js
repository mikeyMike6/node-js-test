const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    '760503880789-1l1ufv32tmfi57j1v7cvqrg2i405b5i8.apps.googleusercontent.com',
    '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',
    'http://localhost:3000/oauth2callback'
)

const scopes = ['https://www.googleapis.com/auth/admin.directory.user'];

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
});

const admin = google.admin({
    version: 'directory_v1',
    auth: oauth2Client
});

const params = {
    domain: 'demo.seiloc.com'
};

admin.users.list(params, (err, res) =>
{
    if(err) {
        console.error(err);
        throw err;
    }
    console.log(res.data.users);
})