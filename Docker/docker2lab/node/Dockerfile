# Step 1: Start with the latest version of Alpine
FROM alpine:latest

# Step 2: Downlpad and install dependency
RUN apk add --update nodejs
RUN apk add --update npm

# Step 3: Copy files
WORKDIR /usr/app/
COPY nodeserver.js .

# Step 4: Tell the image what to do when it starts as a container
CMD ["node","nodeserver.js"]