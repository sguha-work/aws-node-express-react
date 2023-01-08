FROM public.ecr.aws/lambda/nodejs:16

# Create app directory
WORKDIR /usr/src/modules

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./modules .

WORKDIR /usr/src/modules/users

RUN npm install

CMD [ "sls", "offline" ]
EXPOSE 3000
#docker run -p 3000:3000 -d sguha1988/aws-node-express-sls-api