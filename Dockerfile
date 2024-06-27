FROM node:22-alpine
RUN mkdir /myapp
WORKDIR /myapp

COPY package.json /myapp/package.json
COPY package-lock.json /myapp/package-lock.json
RUN npm install --legacy-peer-deps
COPY . /myapp

RUN npm run build
EXPOSE 3005

CMD ["npm", "run", "dev"]