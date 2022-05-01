---
id: mongodb-install-windows
title: MongoDB Install Windows
date: 2022-05-01 17:35:28
---

### Install MongoDB

1. Download the _.msi_ installer: <a href='https://www.mongodb.com/try/download/community?tck=docs_server' class='external'>mongodb.com: Community Edition</a>
2. Start the wizard by double-clicking the _.msi_ file
3. Change location to _F:\Program Files\MongoDB\Server\5.0\bin_
4. Uncheck the _Install MongoDB as a Service_
5. Uncheck the _Install MongoDB Compass_
6. Click Install
7. Add _C:\Program Files\MongoDB\Server\5.0\bin_ to your [PATH environment variable](../workplace/windows/set-environment-variable-windows)

### Install mongosh

1. Download and run the MongoDB Shell _.msi_ installer: <a href='https://www.mongodb.com/try/download/shell?jmp=docs' class='external'>mongodb.com: Shell</a>
2. Accept location: _F:\Users\parsh\AppData\Local\Programs\mongosh_
3. Add the mongosh binary (F:\Users\parsh\AppData\Local\Programs\mongosh\) to your [PATH environment variable](../workplace/windows/set-environment-variable-windows)

### Run MongoDB

1. Run _cmd_ as admin and create the data directory:

```sh
c:
md "\data\db"
```

2. Start MongoDB database:

```sh
"F:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"

# or simply

mongod --dbpath="c:\data\db"
```

3. Connect to MongoDB:

```sh
mongosh
```

After running this command, you should see information about your MongoDB shell, the local server connection, and some additional information printed to the terminal.

### Resources

- <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/' class='external'>mongodb.com: Install Mongodb On Windows</a>
