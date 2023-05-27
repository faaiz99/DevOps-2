FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app

RUN npm install --production
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . /app

EXPOSE 5000
CMD [ "npm", "start" ]