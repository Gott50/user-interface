FROM nginx:alpine

ENV DEBUG=off \
	APP_DIR=/build \
	APP_PATH_PREFIX=/aSubSiteInParentDomainUseThisPath \
	APP_API_PLACEHOLDER=/allRequestStartOfthisPathIsAnApiCall \
	APP_API_GATEWAY="https://api.36node.com" \
	CLIENT_BODY_TIMEOUT=10 \
	CLIENT_HEADER_TIMEOUT=10 \
	CLIENT_MAX_BODY_SIZE=1024 \
	WHITE_LIST_IP=(172.17.0.1)|(192.168.0.25) \
	WHITE_LIST=off

COPY nginx/conf.d/nginx-site.conf /etc/nginx/conf.d/app.conf.template
COPY nginx/start-nginx.sh /usr/sbin/start

RUN chmod u+x /usr/sbin/start

EXPOSE 80 443
WORKDIR ${APP_DIR}

COPY build ${APP_DIR}


CMD [ "start" ]
