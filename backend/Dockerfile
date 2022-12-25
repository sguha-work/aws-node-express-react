FROM node:18

RUN npm -g config set user root
RUN npm -g install serverless
# Create app directory
WORKDIR /usr/src/modules

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./modules .

WORKDIR /usr/src/modules/users

RUN npm install

EXPOSE 3000
CMD [ "sls", "offline" ]