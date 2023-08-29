# Portal Farol

## SETUP


### Docker
We are currently using docker to create a postgres database to test functionalities. Don't worry
about creating dummy users, they are already created using prisma.

#### Setup

1. Install docker on [link](https://docs.docker.com/engine/install/). Follow all steps in detail and
talk to other members if need be
2. Run on the root of the project to start docker:

```docker compose up -d```

3. To turn off the project:
```docker compose down``` 


### Prisma
Prisma is an ope#n source ORM. It abstracts most of the connections to outside storages.
We are currently using it to connect to postgres, our database to 

#### Setup
Run on the root
```
npx prisma migrate dev --name init
npx prisma studio
```

### Next
We are currently using NextJS with Prisma and tRPC on the backend, and tailwind and next auth on the front.

#### Setup
Run on the root of the project
```
npm install
npm run dev
```


