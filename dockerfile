
# Build backend server (node)
FROM node:16-alpine

# Working directory be app
WORKDIR /app

COPY  . .

RUN npm install 

EXPOSE 8000

CMD ["node","server.js"]