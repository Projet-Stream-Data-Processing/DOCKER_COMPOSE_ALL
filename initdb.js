print('Start #################################################################');

db.createUser(
    {
        user: "user",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "Velov"
            }
        ]
    }
);

db.createCollection('Station');
db.createCollection('StationName');